import Link from "next/link";
import { useState } from "react";
import { optimizeImageSrc } from "../lib/image";

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
            src={optimizeImageSrc({ src: previewSrc, width: 1500 })}
            loading="lazy"
            width={width}
            height={height}
            alt="Preview"
            decoding="async"
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
