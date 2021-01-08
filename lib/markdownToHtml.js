export default async function markdownToHtml(markdown) {
  const [{ default: remark }, { default: html }] = await Promise.all([
    import("remark"),
    import("remark-html"),
  ]);

  const result = await remark().use(html).process(markdown);
  return result.toString();
}
