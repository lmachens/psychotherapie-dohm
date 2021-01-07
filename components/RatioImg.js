import React from "react";

function RatioImg({ smallSrc, mediumSrc, largeSrc, alt }) {
  return (
    <div className="ratio-img">
      <picture>
        {largeSrc && <source srcSet={largeSrc} media="(min-width: 992px)" />}
        {mediumSrc && <source srcSet={mediumSrc} media="(min-width: 768px)" />}
        <img src={smallSrc} alt={alt} width="100%" height="100%" />
      </picture>
    </div>
  );
}

export default RatioImg;
