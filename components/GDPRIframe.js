import Link from "next/link";
import React, { useState } from "react";
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
          <picture>
            <source
              srcSet={optimizeImageSrc({ src: previewSrc, width: 1750 })}
              media="(min-width: 1500px)"
            />
            <source
              srcSet={optimizeImageSrc({ src: previewSrc, width: 1500 })}
              media="(min-width: 1250px)"
            />
            <source
              srcSet={optimizeImageSrc({ src: previewSrc, width: 1250 })}
              media="(min-width: 1000px)"
            />
            <source
              srcSet={optimizeImageSrc({ src: previewSrc, width: 1000 })}
              media="(min-width: 750px)"
            />
            <source
              srcSet={optimizeImageSrc({ src: previewSrc, width: 750 })}
              media="(min-width: 500px)"
            />
            <img
              src={optimizeImageSrc({ src: previewSrc, width: 500 })}
              loading="lazy"
              width={width}
              height={height}
              alt="Preview"
              decoding="async"
            />
          </picture>
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
