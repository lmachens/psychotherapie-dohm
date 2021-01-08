import Link from "next/link";
import { useState } from "react";
import { optimizeImageSrc } from "../lib/image";

const sizes = [
  { minWidth: 1500, imgWidth: 1750 },
  { minWidth: 1250, imgWidth: 1500 },
  { minWidth: 1000, imgWidth: 1250 },
  { minWidth: 750, imgWidth: 1000 },
  { minWidth: 500, imgWidth: 750 },
  { minWidth: 400, imgWidth: 500 },
];

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
            {sizes.map((size) => (
              <source
                key={size}
                srcSet={optimizeImageSrc({
                  src: previewSrc,
                  width: size.imgWidth,
                })}
                media={`(min-width: ${size.minWidth}px)`}
              />
            ))}

            <img
              src={optimizeImageSrc({ src: previewSrc, width: 400 })}
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
