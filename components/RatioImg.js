import React from "react";

function RatioImg({ src, alt }) {
  return (
    <div className="ratio-img">
      <img className="img-fluid" src={src} alt={alt} />
    </div>
  );
}

export default RatioImg;
