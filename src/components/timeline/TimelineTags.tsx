import './TimelineTags.css';

interface TimelineTagsProps {
  tags: string[];
}

export default function TimelineTags({ tags }: TimelineTagsProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <ul className="timeline-tags" aria-label="Tags">
      {tags.map((tag) => (
        <li key={tag} className="timeline-tags__item">
          {tag}
        </li>
      ))}
    </ul>
  );
}
