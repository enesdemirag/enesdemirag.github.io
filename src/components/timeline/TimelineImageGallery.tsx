import './TimelineImageGallery.css';

interface TimelineImageGalleryProps {
  images?: string[];
  altPrefix: string;
}

export default function TimelineImageGallery({ images, altPrefix }: TimelineImageGalleryProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="timeline-image-gallery">
      {images.map((image, index) => (
        <figure key={`${image}-${index}`} className="timeline-image-gallery__item">
          <img
            src={image}
            alt={`${altPrefix} visual ${index + 1}`}
            loading="lazy"
            className="timeline-image-gallery__image"
          />
        </figure>
      ))}
    </div>
  );
}
