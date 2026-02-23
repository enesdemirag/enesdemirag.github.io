import { useEffect, useMemo } from 'react';
import { parseTimeRangeToInterval, type TimelineTask } from '../../lib/timelineVertical';
import TimelineCategoryBadge from './TimelineCategoryBadge';
import TimelineImageGallery from './TimelineImageGallery';
import TimelineTags from './TimelineTags';
import './TimelineDetailModal.css';

interface TimelineDetailModalProps {
  item: TimelineTask | null;
  onClose: () => void;
}

export default function TimelineDetailModal({ item, onClose }: TimelineDetailModalProps) {
  const subtasks = useMemo(() => {
    if (!item || item.subtasks.length <= 1) {
      return [];
    }

    const nowMs = Date.now();

    return item.subtasks
      .slice()
      .sort((a, b) => {
        const aInterval = parseTimeRangeToInterval(a.timeRange, a.order, nowMs);
        const bInterval = parseTimeRangeToInterval(b.timeRange, b.order, nowMs);

        if (aInterval.startMs !== bInterval.startMs) {
          return aInterval.startMs - bInterval.startMs;
        }

        if (aInterval.endMs !== bInterval.endMs) {
          return aInterval.endMs - bInterval.endMs;
        }

        return a.order - b.order;
      });
  }, [item]);

  useEffect(() => {
    if (!item) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [item, onClose]);

  if (!item) {
    return null;
  }

  return (
    <div className="timeline-modal-backdrop" onClick={onClose} role="presentation">
      <section
        className="timeline-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`timeline-modal-title-${item.id}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="timeline-modal__close" onClick={onClose} aria-label="Close details">
          ×
        </button>

        <div className="timeline-modal__body">
          <div className="timeline-modal__row">
            <TimelineCategoryBadge category={item.category} />
          </div>

          <h3 id={`timeline-modal-title-${item.id}`} className="timeline-modal__title">
            {item.title}
          </h3>

          <p className="timeline-modal__time">{item.timeRange}</p>

          {item.subtitle ? <p className="timeline-modal__subtitle">{item.subtitle}</p> : null}

          <p className="timeline-modal__description">{item.description}</p>

          <TimelineTags tags={item.tags} />

          {item.url ? (
            <a className="timeline-modal__link" href={item.url} target="_blank" rel="noopener noreferrer">
              {item.url}
            </a>
          ) : null}

          {subtasks.length > 0 ? (
            <section className="timeline-modal__subtasks" aria-label="Role phases">
              <h4 className="timeline-modal__subtasks-title">Role phases</h4>
              <ul className="timeline-modal__subtask-list">
                {subtasks.map((subtask) => (
                  <li key={`${item.id}-${subtask.id}`} className="timeline-modal__subtask">
                    <p className="timeline-modal__subtask-title">{subtask.subtitle ?? subtask.title}</p>
                    <p className="timeline-modal__subtask-time">{subtask.timeRange}</p>
                    <p className="timeline-modal__subtask-description">{subtask.description}</p>
                    {subtask.tags.length > 0 ? (
                      <p className="timeline-modal__subtask-tags">{subtask.tags.join(' | ')}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {item.images && item.images.length > 0 ? (
            <TimelineImageGallery images={item.images} altPrefix={item.title} />
          ) : null}
        </div>
      </section>
    </div>
  );
}
