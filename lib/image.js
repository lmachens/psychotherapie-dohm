export function optimizeImageSrc({ src, width }) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${
    width === "100%" ? 1250 : width
  }&q=90`;
}
export function optimizeCMSImageSrc({ src, width }) {
  return optimizeImageSrc({
    src: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${src}`,
    width,
  });
}
