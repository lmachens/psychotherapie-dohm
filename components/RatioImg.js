import React from "react";

function RatioImg({ src, alt }) {
  return (
    <div className="ratio-img">
      <img src={src} alt={alt} />
    </div>
  );
}

export default RatioImg;
