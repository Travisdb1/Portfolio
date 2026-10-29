import schemas from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "Demo Studio",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
