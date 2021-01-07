import Link from "next/link";
import React, { useState } from "react";

function GDPRIframe({
  previewSrc,
  previewText,
  name,
  width,
  height,
  fill,
  ...rest
}) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div>
      {!agreed && (
        <div className="preview">
          <img
            src={previewSrc}
            loading="lazy"
            width={width}
            height={height}
            alt="Preview"
          />
          <div className="modal-content">
            <p>{previewText}</p>
            <button className="btn btn-primary" onClick={() => setAgreed(true)}>
              Akzeptieren
            </button>
            <Link href="/privacy">
              <a>Siehe Datenschutz</a>
            </Link>
          </div>
        </div>
      )}
      {agreed && <iframe width={width} height={height} {...rest} />}
    </div>
  );
}

export default GDPRIframe;
