"use client";

import { use } from "react";
import HomeContent, { parseFilterTags } from "@/components/HomeContent";
import { TAG_TAXONOMY } from "@/data/projects";

export default function FilteredPage({
  params,
}: {
  params: Promise<{ filter: string }>;
}) {
  const { filter } = use(params);
  const tags = parseFilterTags(filter);

  // If no valid tags found, show all projects (graceful fallback)
  return <HomeContent filterTags={tags} />;
}
