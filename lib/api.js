async function fetchAPI(collection) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${collection}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();
  return data;
}

export function getHome() {
  return fetchAPI("dohm-home");
}

export function getAbout() {
  return fetchAPI("dohm-about");
}

export function getFaq() {
  return fetchAPI("dohm-faq");
}

export function getPublications() {
  return fetchAPI("dohm-publications");
}

export function getPrivacy() {
  return fetchAPI("dohm-privacy");
}

export function getLegal() {
  return fetchAPI("dohm-legal");
}

export function getFooter() {
  return fetchAPI("dohm-footer");
}
