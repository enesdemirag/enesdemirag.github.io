import { useCallback, useState } from 'react';
import { timelineItems } from '../../data/timelineData';
import type { TimelineTask } from '../../lib/timelineVertical';
import TimelineDetailModal from './TimelineDetailModal';
import TimelineGraphDesktop from './TimelineGraphDesktop';
import './TimelineSection.css';

export default function TimelineSection() {
  const [selectedItem, setSelectedItem] = useState<TimelineTask | null>(null);

  const handleSelect = useCallback((item: TimelineTask) => {
    setSelectedItem(item);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return (
    <section id="timeline" className="timeline-section" aria-labelledby="timeline-title">
      <TimelineGraphDesktop items={timelineItems} onSelect={handleSelect} />
      <TimelineDetailModal item={selectedItem} onClose={handleClose} />
    </section>
  );
}
