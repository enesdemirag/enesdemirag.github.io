import type { Category, TimelineItem } from '../data/timelineData';

export const TIMELINE_MIN_YEAR = 1998;
export const TIMELINE_MIN_MS = Date.UTC(TIMELINE_MIN_YEAR, 0, 1, 0, 0, 0, 0);

const DAY_MS = 24 * 60 * 60 * 1000;
const MIN_EVENT_MS = DAY_MS;
const MIN_TIMESPAN_MS = MIN_EVENT_MS;
const MERGE_GAP_MS = DAY_MS;

const MONTH_INDEX: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

const MONTH_SHORT = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

const monthYearFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

interface EraWindow {
  label: string;
  startMs: number;
  endMs: number;
}

const ERA_WINDOWS: EraWindow[] = [
  { label: 'Founder Era', startMs: Date.UTC(2025, 9, 1), endMs: Date.UTC(2026, 11, 31) },
  { label: 'Overemployment Era', startMs: Date.UTC(2025, 1, 1), endMs: Date.UTC(2025, 10, 30) },
  { label: 'Vision Expansion', startMs: Date.UTC(2022, 0, 1), endMs: Date.UTC(2024, 11, 31) },
  { label: 'Career Start', startMs: Date.UTC(2020, 0, 1), endMs: Date.UTC(2022, 11, 31) },
  { label: 'University Year 4', startMs: Date.UTC(2020, 0, 1), endMs: Date.UTC(2021, 11, 31) },
  { label: 'University Year 3', startMs: Date.UTC(2018, 0, 1), endMs: Date.UTC(2019, 11, 31) },
  { label: 'University Year 2', startMs: Date.UTC(2017, 0, 1), endMs: Date.UTC(2018, 11, 31) },
  { label: 'University Prep & Year 1', startMs: Date.UTC(2016, 0, 1), endMs: Date.UTC(2017, 11, 31) },
  { label: 'Middle & High School', startMs: Date.UTC(2010, 0, 1), endMs: Date.UTC(2016, 11, 31) },
];

export interface ParsedInterval {
  startMs: number;
  endMs: number;
  hasPresent: boolean;
}

export interface TimelineTask {
  id: string;
  category: Category;
  title: string;
  subtitle?: string;
  timeRange: string;
  description: string;
  tags: string[];
  url?: string;
  images?: string[];
  subtasks: TimelineItem[];
  startMs: number;
  endMs: number;
  hasPresent: boolean;
  order: number;
}

export interface LanePlacement extends ParsedInterval {
  item: TimelineTask;
  laneIndex: number;
}

export interface IntervalBarLayout extends LanePlacement {
  id: string;
  topPx: number;
  heightPx: number;
  leftPx: number;
  widthPx: number;
}

export interface IntervalMonthTick {
  id: string;
  label: string;
  topPx: number;
  isYearStart: boolean;
}

export interface IntervalEraMarker {
  id: string;
  label: string;
  topPx: number;
  side: 'left' | 'right';
}

export interface IntervalChartLayout {
  bars: IntervalBarLayout[];
  laneCount: number;
  laneAreaWidthPx: number;
  plotHeightPx: number;
  monthTicks: IntervalMonthTick[];
  eraMarkers: IntervalEraMarker[];
  minMs: number;
  maxMs: number;
}

export interface IntervalChartConfig {
  axisWidthPx: number;
  plotPaddingXPx: number;
  plotPaddingYPx: number;
  laneWidthPx: number;
  laneGapPx: number;
  minBarHeightPx: number;
  monthRowHeightPx: number;
  maxLanes: number;
}

export const INTERVAL_CHART_CONFIG: IntervalChartConfig = {
  axisWidthPx: 84,
  plotPaddingXPx: 0,
  plotPaddingYPx: 0,
  laneWidthPx: 138,
  laneGapPx: 0,
  minBarHeightPx: 44,
  monthRowHeightPx: 18,
  maxLanes: 4,
};

function cleanDateToken(token: string): string {
  return token.replace(/\(.*?\)/g, '').replace(/\./g, '').trim();
}

function parseDateToken(token: string, isEnd: boolean, nowMs: number): number | null {
  const cleaned = cleanDateToken(token);

  if (/^present$/i.test(cleaned)) {
    return nowMs;
  }

  const monthYear = cleaned.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (monthYear) {
    const month = MONTH_INDEX[monthYear[1].toLowerCase().slice(0, 3)];
    const year = Number(monthYear[2]);

    if (month === undefined || Number.isNaN(year)) {
      return null;
    }

    if (isEnd) {
      return Date.UTC(year, month + 1, 0, 23, 59, 59, 999);
    }

    return Date.UTC(year, month, 1, 0, 0, 0, 0);
  }

  const yearOnly = cleaned.match(/^(\d{4})$/);
  if (yearOnly) {
    const year = Number(yearOnly[1]);

    if (Number.isNaN(year)) {
      return null;
    }

    if (isEnd) {
      return Date.UTC(year, 11, 31, 23, 59, 59, 999);
    }

    return Date.UTC(year, 0, 1, 0, 0, 0, 0);
  }

  return null;
}

function formatTimeRange(startMs: number, endMs: number, hasPresent: boolean): string {
  const startLabel = monthYearFormatter.format(startMs);
  const endLabel = hasPresent ? 'Present' : monthYearFormatter.format(endMs);
  return `${startLabel} – ${endLabel}`;
}

function uniqueStrings(values: string[]): string[] {
  return Array.from(new Set(values.filter(Boolean)));
}

function pickPrimaryCategory(items: TimelineItem[]): Category {
  const counts = new Map<Category, number>();

  items.forEach((item) => {
    counts.set(item.category, (counts.get(item.category) ?? 0) + 1);
  });

  const categories = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  return categories[0]?.[0] ?? items[0].category;
}

function normalizeTitle(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48);
}

export function parseTimeRangeToInterval(timeRange: string, order: number, nowMs = Date.now()): ParsedInterval {
  const parts = timeRange
    .split(/\s+[–-]\s+/u)
    .map((part) => part.trim())
    .filter(Boolean);

  const fallbackStart = Date.UTC(2010 + order, 0, 1, 0, 0, 0, 0);

  if (parts.length === 0) {
    return {
      startMs: fallbackStart,
      endMs: fallbackStart + MIN_EVENT_MS,
      hasPresent: false,
    };
  }

  const startToken = parts[0];
  const endToken = parts[1] ?? parts[0];

  const parsedStart = parseDateToken(startToken, false, nowMs);
  const parsedEnd = parseDateToken(endToken, true, nowMs);

  const startMs = parsedStart ?? fallbackStart;
  let endMs = parsedEnd ?? startMs + MIN_EVENT_MS;

  if (endMs <= startMs) {
    endMs = startMs + MIN_EVENT_MS;
  }

  return {
    startMs,
    endMs,
    hasPresent: /present/i.test(endToken),
  };
}

export function clampIntervalToWindow(interval: ParsedInterval, minMs: number, maxMs: number): ParsedInterval | null {
  if (interval.endMs < minMs || interval.startMs > maxMs) {
    return null;
  }

  const startMs = Math.max(interval.startMs, minMs);
  const endMs = Math.min(Math.max(interval.endMs, startMs + MIN_EVENT_MS), maxMs);

  return {
    startMs,
    endMs,
    hasPresent: interval.hasPresent,
  };
}

export function buildMergedTasks(items: TimelineItem[], nowMs = Date.now()): TimelineTask[] {
  const parsedItems = items
    .map((item) => {
      const interval = parseTimeRangeToInterval(item.timeRange, item.order, nowMs);
      const clamped = clampIntervalToWindow(interval, TIMELINE_MIN_MS, nowMs);

      if (!clamped) {
        return null;
      }

      return {
        item,
        ...clamped,
      };
    })
    .filter((entry): entry is { item: TimelineItem; startMs: number; endMs: number; hasPresent: boolean } => Boolean(entry));

  const byTitle = new Map<string, Array<{ item: TimelineItem; startMs: number; endMs: number; hasPresent: boolean }>>();

  parsedItems.forEach((entry) => {
    const key = normalizeTitle(entry.item.title);
    if (!byTitle.has(key)) {
      byTitle.set(key, []);
    }
    byTitle.get(key)?.push(entry);
  });

  const tasks: TimelineTask[] = [];

  byTitle.forEach((titleEntries, normalizedTitle) => {
    const sorted = titleEntries
      .slice()
      .sort((a, b) => a.startMs - b.startMs || a.endMs - b.endMs || a.item.order - b.item.order);

    const clusters: Array<Array<{ item: TimelineItem; startMs: number; endMs: number; hasPresent: boolean }>> = [];

    sorted.forEach((entry) => {
      const currentCluster = clusters[clusters.length - 1];

      if (!currentCluster) {
        clusters.push([entry]);
        return;
      }

      const currentEnd = currentCluster.reduce((max, candidate) => Math.max(max, candidate.endMs), 0);
      if (entry.startMs <= currentEnd + MERGE_GAP_MS) {
        currentCluster.push(entry);
      } else {
        clusters.push([entry]);
      }
    });

    clusters.forEach((cluster, clusterIndex) => {
      const sortedClusterEntries = cluster
        .slice()
        .sort((a, b) => a.startMs - b.startMs || a.endMs - b.endMs || a.item.order - b.item.order);
      const phaseMap = new Map<string, TimelineItem>();

      sortedClusterEntries.forEach((entry) => {
        const phaseKey = `${normalizeTitle(entry.item.subtitle ?? '')}|${entry.startMs}|${entry.endMs}`;
        const existingPhase = phaseMap.get(phaseKey);

        if (!existingPhase) {
          phaseMap.set(phaseKey, {
            ...entry.item,
            tags: [...entry.item.tags],
            images: entry.item.images ? [...entry.item.images] : undefined,
          });
          return;
        }

        const mergedDescriptions = uniqueStrings([existingPhase.description, entry.item.description]);
        const mergedTags = uniqueStrings([...existingPhase.tags, ...entry.item.tags]);
        const mergedImages = uniqueStrings([...(existingPhase.images ?? []), ...(entry.item.images ?? [])]);
        const mergedUrl = uniqueStrings([existingPhase.url ?? '', entry.item.url ?? '']);

        existingPhase.description = mergedDescriptions.join('\n\n');
        existingPhase.tags = mergedTags;
        existingPhase.images = mergedImages.length > 0 ? mergedImages : undefined;
        existingPhase.url = mergedUrl.length === 1 ? mergedUrl[0] : existingPhase.url;
        existingPhase.order = Math.min(existingPhase.order, entry.item.order);
      });

      const sortedSubtasks = Array.from(phaseMap.values());
      const phaseCount = sortedSubtasks.length;

      const startMs = cluster.reduce((min, entry) => Math.min(min, entry.startMs), Number.MAX_SAFE_INTEGER);
      const endMs = cluster.reduce((max, entry) => Math.max(max, entry.endMs), 0);
      const hasPresent = cluster.some((entry) => entry.hasPresent);
      const isMerged = phaseCount > 1;

      const subtitles = uniqueStrings(sortedSubtasks.map((item) => item.subtitle ?? ''));
      const mergedTags = uniqueStrings(sortedSubtasks.flatMap((item) => item.tags));
      const mergedImages = uniqueStrings(sortedSubtasks.flatMap((item) => item.images ?? []));
      const mergedUrls = uniqueStrings(sortedSubtasks.map((item) => item.url ?? ''));
      const phaseSummary = subtitles.length > 0 ? subtitles.join(' -> ') : `${phaseCount} phases`;

      const primaryUrl = mergedUrls.length === 1 ? mergedUrls[0] : undefined;

      const description = isMerged
        ? `Continuous timeline across ${phaseCount} phases. See role phases below for details.`
        : sortedSubtasks[0].description;

      const subtitle = isMerged
        ? phaseSummary
        : sortedSubtasks[0].subtitle;

      tasks.push({
        id: isMerged
          ? `merged-${slugify(normalizedTitle)}-${clusterIndex}`
          : sortedSubtasks[0].id,
        category: pickPrimaryCategory(sortedSubtasks),
        title: sortedSubtasks[0].title,
        subtitle,
        timeRange: formatTimeRange(startMs, endMs, hasPresent),
        description,
        tags: mergedTags,
        url: primaryUrl,
        images: mergedImages.length > 0 ? mergedImages : undefined,
        subtasks: sortedSubtasks,
        startMs,
        endMs,
        hasPresent,
        order: Math.min(...sortedSubtasks.map((subtask) => subtask.order)),
      });
    });
  });

  return tasks.sort((a, b) => a.startMs - b.startMs || a.endMs - b.endMs || a.order - b.order);
}

function buildMonthTicks(minMs: number, maxMs: number, timeToY: (timeMs: number) => number): IntervalMonthTick[] {
  const maxDate = new Date(maxMs);
  const minDate = new Date(minMs);

  let year = maxDate.getUTCFullYear();
  let month = maxDate.getUTCMonth();

  const minYear = minDate.getUTCFullYear();
  const minMonth = minDate.getUTCMonth();

  const ticks: IntervalMonthTick[] = [];

  while (year > minYear || (year === minYear && month >= minMonth)) {
    const isYearStart = month === 0;

    ticks.push({
      id: `${year}-${month + 1}`,
      label: `${MONTH_SHORT[month]} ${year}`,
      topPx: timeToY(Date.UTC(year, month, 1, 0, 0, 0, 0)),
      isYearStart,
    });

    month -= 1;
    if (month < 0) {
      month = 11;
      year -= 1;
    }
  }

  return ticks;
}

function buildEraMarkers(minMs: number, maxMs: number, timeToY: (timeMs: number) => number): IntervalEraMarker[] {
  const minGapPx = 52;

  const markers = ERA_WINDOWS
    .map((era) => {
      if (era.endMs < minMs || era.startMs > maxMs) {
        return null;
      }

      const clampedStart = Math.max(era.startMs, minMs);
      const clampedEnd = Math.min(era.endMs, maxMs);
      const midpoint = (clampedStart + clampedEnd) / 2;

      return {
        id: era.label.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        label: era.label,
        topPx: timeToY(midpoint),
      };
    })
    .filter((marker): marker is { id: string; label: string; topPx: number } => Boolean(marker))
    .sort((a, b) => a.topPx - b.topPx);

  for (let index = 1; index < markers.length; index += 1) {
    const previous = markers[index - 1];
    if (markers[index].topPx < previous.topPx + minGapPx) {
      markers[index].topPx = previous.topPx + minGapPx;
    }
  }

  for (let index = markers.length - 2; index >= 0; index -= 1) {
    const next = markers[index + 1];
    if (markers[index].topPx > next.topPx - minGapPx) {
      markers[index].topPx = next.topPx - minGapPx;
    }
  }

  return markers.map((marker, index) => ({
    id: marker.id,
    label: marker.label,
    topPx: marker.topPx,
    side: index % 2 === 0 ? 'left' : 'right',
  }));
}

export function buildIntervalLaneLayout(
  items: TimelineItem[],
  nowMs = Date.now(),
  config: IntervalChartConfig = INTERVAL_CHART_CONFIG
): IntervalChartLayout {
  const minMs = TIMELINE_MIN_MS;
  const maxMs = nowMs;

  const maxDate = new Date(maxMs);
  const monthCount = Math.max(
    1,
    ((maxDate.getUTCFullYear() - TIMELINE_MIN_YEAR) * 12) + maxDate.getUTCMonth() + 1
  );

  const plotHeightPx = monthCount * config.monthRowHeightPx;
  const spanMs = Math.max(maxMs - minMs, MIN_TIMESPAN_MS);

  const timeToY = (timeMs: number) => ((maxMs - timeMs) / spanMs) * plotHeightPx;
  const tasks = buildMergedTasks(items, nowMs);

  const laneCountLimit = Math.max(1, config.maxLanes);
  const laneEnds: number[] = Array.from({ length: laneCountLimit }, () => Number.NEGATIVE_INFINITY);
  const laneUsed: boolean[] = Array.from({ length: laneCountLimit }, () => false);

  const lanePlacements: LanePlacement[] = tasks.map((task) => {
    const availableLaneIndex = laneEnds.findIndex((laneEnd) => laneEnd < task.startMs);
    let laneIndex = availableLaneIndex;

    if (laneIndex === -1) {
      laneIndex = laneEnds.reduce((selectedIndex, laneEnd, index) => (
        laneEnd < laneEnds[selectedIndex] ? index : selectedIndex
      ), 0);
    }

    laneEnds[laneIndex] = Math.max(laneEnds[laneIndex], task.endMs);
    laneUsed[laneIndex] = true;

    return {
      item: task,
      startMs: task.startMs,
      endMs: task.endMs,
      hasPresent: task.hasPresent,
      laneIndex,
    };
  });

  const laneCount = Math.max(1, laneUsed.reduce((count, used) => (used ? count + 1 : count), 0));
  const laneAreaWidthPx = (laneCount * config.laneWidthPx) + ((laneCount - 1) * config.laneGapPx);

  const bars: IntervalBarLayout[] = lanePlacements.map((placement) => {
    const rawTop = timeToY(placement.endMs);
    const rawBottom = timeToY(placement.startMs);
    const rawHeight = rawBottom - rawTop;

    const heightPx = Math.max(config.minBarHeightPx, rawHeight);
    const maxTop = Math.max(0, plotHeightPx - heightPx);
    const topPx = Math.max(0, Math.min(rawTop, maxTop));

    return {
      id: placement.item.id,
      item: placement.item,
      startMs: placement.startMs,
      endMs: placement.endMs,
      hasPresent: placement.hasPresent,
      laneIndex: placement.laneIndex,
      topPx,
      heightPx,
      leftPx: placement.laneIndex * (config.laneWidthPx + config.laneGapPx),
      widthPx: config.laneWidthPx,
    };
  });

  return {
    bars,
    laneCount,
    laneAreaWidthPx,
    plotHeightPx,
    monthTicks: buildMonthTicks(minMs, maxMs, timeToY),
    eraMarkers: buildEraMarkers(minMs, maxMs, timeToY),
    minMs,
    maxMs,
  };
}
