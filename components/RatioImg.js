import React from "react";

function RatioImg({ smallSrc, mediumSrc, largeSrc, alt }) {
  return (
    <div className="ratio-img">
      <picture>
        {largeSrc && <source srcSet={largeSrc} media="(min-width: 992px)" />}
        {mediumSrc && <source srcSet={mediumSrc} media="(min-width: 768px)" />}
        <img src={smallSrc} alt={alt} />
      </picture>
    </div>
  );
}

export default RatioImg;
