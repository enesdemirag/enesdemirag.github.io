import { useMemo } from 'react';
import type { TimelineItem } from '../../data/timelineData';
import { INTERVAL_CHART_CONFIG, buildIntervalLaneLayout, type TimelineTask } from '../../lib/timelineVertical';
import './TimelineGraphDesktop.css';

interface TimelineGraphDesktopProps {
  items: TimelineItem[];
  onSelect: (item: TimelineTask) => void;
}

export default function TimelineGraphDesktop({ items, onSelect }: TimelineGraphDesktopProps) {
  const layout = useMemo(() => buildIntervalLaneLayout(items), [items]);

  const axisWidth = INTERVAL_CHART_CONFIG.axisWidthPx;
  const plotPaddingX = INTERVAL_CHART_CONFIG.plotPaddingXPx;
  const plotPaddingY = INTERVAL_CHART_CONFIG.plotPaddingYPx;
  const laneStep = INTERVAL_CHART_CONFIG.laneWidthPx + INTERVAL_CHART_CONFIG.laneGapPx;

  const plotWidthPx = layout.laneAreaWidthPx + (plotPaddingX * 2);
  const frameMinWidthPx = axisWidth + plotWidthPx;
  const frameHeightPx = layout.plotHeightPx + (plotPaddingY * 2);
  const laneBoundaries = Array.from({ length: layout.laneCount + 1 }, (_, index) => (
    index === layout.laneCount ? layout.laneAreaWidthPx : index * laneStep
  ));

  return (
    <div className="timeline-interval">
      <div className="timeline-interval__scroller">
        <div
          className="timeline-interval__frame"
          style={{
            minWidth: `${frameMinWidthPx}px`,
            height: `${frameHeightPx}px`,
            gridTemplateColumns: `${axisWidth}px ${plotWidthPx}px`,
          }}
        >
          <aside className="timeline-interval__axis" aria-hidden="true">
            {layout.monthTicks.map((tick) => (
              <span
                key={tick.id}
                className={`timeline-interval__month${tick.isYearStart ? ' timeline-interval__month--year-start' : ''}`}
                style={{ top: `${tick.topPx + plotPaddingY}px` }}
              >
                {tick.label}
              </span>
            ))}
          </aside>

          <div className="timeline-interval__plot">
            <div className="timeline-interval__grid" aria-hidden="true">
              {layout.monthTicks.map((tick) => (
                <span
                  key={`line-${tick.id}`}
                  className={`timeline-interval__grid-line${tick.isYearStart ? ' timeline-interval__grid-line--year-start' : ''}`}
                  style={{ top: `${tick.topPx + plotPaddingY}px` }}
                />
              ))}
              {laneBoundaries.map((left, index) => (
                <span
                  key={`column-${index}`}
                  className="timeline-interval__grid-column"
                  style={{ left: `${left + plotPaddingX}px` }}
                />
              ))}
            </div>

            <div className="timeline-interval__bars">
              {layout.bars.map((bar) => (
                <button
                  key={bar.id}
                  type="button"
                  className={`timeline-interval__bar timeline-interval__bar--${bar.item.category}`}
                  style={{
                    left: `${bar.leftPx + plotPaddingX}px`,
                    top: `${bar.topPx + plotPaddingY}px`,
                    width: `${bar.widthPx}px`,
                    height: `${bar.heightPx}px`,
                  }}
                  onClick={() => onSelect(bar.item)}
                  aria-label={`${bar.item.title} (${bar.item.timeRange})`}
                  title={bar.item.timeRange}
                >
                  <span className="timeline-interval__bar-title">{bar.item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
