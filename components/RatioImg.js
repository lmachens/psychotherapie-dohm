import { optimizeCMSImageSrc } from "../lib/image";

function RatioImg({ smallSrc, mediumSrc, largeSrc, alt }) {
  return (
    <div className="ratio-img">
      <picture>
        {largeSrc && (
          <source
            srcSet={optimizeCMSImageSrc({ src: largeSrc, width: 1000 })}
            media="(min-width: 992px)"
          />
        )}
        {mediumSrc && (
          <source
            srcSet={optimizeCMSImageSrc({ src: mediumSrc, width: 750 })}
            media="(min-width: 768px)"
          />
        )}
        <img
          src={optimizeCMSImageSrc({ src: smallSrc, width: 500 })}
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
