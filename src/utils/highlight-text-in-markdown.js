export async function highlightTextInMarkdown(markdown, searchTextArray) {
  let highlightedMarkdown = markdown;
  for (const searchText of searchTextArray) {
    const regex = new RegExp(`\\b${searchText}\\b`, "gim");
    highlightedMarkdown = highlightedMarkdown.replace(
      regex,
      `==${searchText}==`
    );
  }
  return Promise.resolve(highlightedMarkdown);
}
