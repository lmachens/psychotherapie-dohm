import { optimizeCMSImageSrc } from "../lib/image";

const sizes = [
  { minWidth: 1501, imgWidth: 1000 },
  { minWidth: 1201, imgWidth: 750 },
  { minWidth: 361, imgWidth: 500 },
];
function RatioImg({ src, alt, className }) {
  return (
    <div className={`ratio-img ${className || ""}`}>
      <picture>
        {sizes.map((size) => (
          <source
            key={size.minWidth}
            srcSet={optimizeCMSImageSrc({ src, width: size.imgWidth })}
            media={`(min-width: ${size.minWidth}px)`}
          />
        ))}
        <img
          src={optimizeCMSImageSrc({ src, width: 360 })}
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
