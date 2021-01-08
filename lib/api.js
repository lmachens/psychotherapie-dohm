export async function fetchAPI(collection) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${collection}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await res.json();
}
