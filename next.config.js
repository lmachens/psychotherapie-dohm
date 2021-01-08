if (typeof process.env.NEXT_PUBLIC_STRAPI_API_URL === "undefined") {
  throw new Error("process.env.NEXT_PUBLIC_STRAPI_API_URL is required");
}

const { hostname } = new URL(process.env.NEXT_PUBLIC_STRAPI_API_URL);

module.exports = {
  images: {
    domains: [hostname],
    imageSizes: [90, 200, 500, 750, 1000, 1250, 1500, 1750],
  },
};
