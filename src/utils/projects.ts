import { getCollection } from "astro:content";

const assets = import.meta.glob<string>("/src/media/**/*.{jpg,jpeg,png,gif,webp,mp4,webm}", {
  eager: true,
  import: "default",
  query: "?url&no-inline",
});

export async function getProjects() {
  const entries = await getCollection("projects");
  return entries.sort((a, b) => a.data.order - b.data.order).map((entry) => ({
    ...entry.data,
    slug: entry.id.replace(/\/index$/, ""),
    entry,
    media: entry.data.media.map((source) => {
      if (/^https:\/\//.test(source)) return source;
      if (!assets[source]) throw new Error(`Missing project media: ${source} (${entry.id})`);
      return assets[source];
    }),
  }));
}
