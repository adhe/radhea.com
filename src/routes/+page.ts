import type { PageLoad } from "./$types";

interface PostMeta {
  title?: string;
  heading?: string;
  client?: string;
  type?: string;
  period?: string;
  description?: string;
  image?: string;
  tags?: string;
  order?: number;
}

export const load: PageLoad = () => {
  const metas = import.meta.glob<PostMeta>("/src/lib/content/*.md", {
    eager: true,
    import: "metadata",
  });

  const posts = Object.entries(metas).map(([path, meta]) => {
    const slug = path.split("/").pop()!.replace(".md", "");
    return { slug, ...meta };
  });

  return { posts };
};
