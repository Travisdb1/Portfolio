const config = {
  projectId: (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo-project-id") as string,
  dataset: (process.env.NEXT_PUBLIC_SANITY_DATASET || "production") as string,
  apiVersion: "2023-06-19",
  token: (process.env.SNITY_API_KEY || "") as string,
  useCdn: false,
};

export default config;
