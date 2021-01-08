import { optimizeCMSImageSrc } from "../lib/image";

const sizes = [
  { minWidth: 1500, imgWidth: 1000 },
  { minWidth: 1200, imgWidth: 750 },
  { minWidth: 400, imgWidth: 500 },
];
function RatioImg({ src, alt }) {
  return (
    <div className="ratio-img">
      <picture>
        {sizes.map((size) => (
          <source
            key={size}
            srcSet={optimizeCMSImageSrc({ src, width: size.imgWidth })}
            media={`(min-width: ${size.minWidth}px)`}
          />
        ))}
        <img
          src={optimizeCMSImageSrc({ src, width: 400 })}
          alt={alt}
          width="100%"
          height="100%"
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  );
}

export default RatioImg;
