import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { defineCollection, type CollectionEntry } from "astro:content";

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};

export function createIsLangEntry(lang: string) {
  return (entry: CollectionEntry<"docs">): boolean =>
    entry.id.startsWith(lang + "/");
}

export const isEnglishEntry = createIsLangEntry("en");
