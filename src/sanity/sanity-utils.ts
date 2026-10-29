import ImageUrlBuilder from "@sanity/image-url";
import { QueryParams, createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Blog } from "@/types/blog";
import {
  postQuery,
  postQueryBySlug,
  postQueryByTag,
  postQueryByAuthor,
} from "@/sanity/sanity-query";
import { integrations, messages } from "../../integrations.config";

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  if (!integrations?.isSanityEnabled || !clientConfig.projectId || clientConfig.projectId === "demo-project-id") {
    return {} as QueryResponse;
  }

  const client = createClient(clientConfig);
  return client.fetch<QueryResponse>(query, qParams, {
    cache: "force-cache",
    next: { tags },
  });
}

export async function getPosts() {
  const data: Blog[] = await sanityFetch({
    query: postQuery,
    qParams: {},
    tags: ["post", "author"],
  });
  return data;
}

export async function getPost(slug: string) {
  const data: Blog = await sanityFetch({
    query: postQueryBySlug,
    qParams: { slug },
    tags: ["post", "author"],
  });
  return data;
}

export async function getPostsByTag(tag: string) {
  const data: Blog[] = await sanityFetch({
    query: postQueryByTag,
    qParams: { slug: tag },
    tags: ["post", "author"],
  });
  return data;
}

export async function getPostsByAuthor(author: string) {
  const data: Blog[] = await sanityFetch({
    query: postQueryByAuthor,
    qParams: { slug: author },
    tags: ["post", "author"],
  });
  return data;
}

export function imageBuilder(source: any) {
  if (!integrations?.isSanityEnabled || !clientConfig.projectId || clientConfig.projectId === "demo-project-id") {
    return { url: () => "" } as any;
  }

  return ImageUrlBuilder(clientConfig).image(source);
}
