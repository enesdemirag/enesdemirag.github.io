import { CATEGORY_LABELS, type Category } from '../../data/timelineData';
import './TimelineCategoryBadge.css';

const categoryClassMap: Record<Category, string> = {
  education: 'timeline-category-badge--education',
  work: 'timeline-category-badge--work',
  project: 'timeline-category-badge--project',
  award: 'timeline-category-badge--award',
  life: 'timeline-category-badge--life',
};

interface TimelineCategoryBadgeProps {
  category: Category;
}

export default function TimelineCategoryBadge({ category }: TimelineCategoryBadgeProps) {
  return <span className={`timeline-category-badge ${categoryClassMap[category]}`}>{CATEGORY_LABELS[category]}</span>;
}
