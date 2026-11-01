import AiToolExample from "@/components/AiTools/AiToolExample";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Examples | AI Tool",
  description: "Explore AI-powered tools and examples.",
};

export default function AiExamplesPage() {
  return (
    <>
      <Breadcrumb pageTitle="AI Examples" />
      <section className="pb-17.5 lg:pb-22.5 xl:pb-27.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            Explore AI Examples
          </h1>
          <p className="mt-4 max-w-2xl">
            Try practical AI tools for writing, spreadsheets, and interview
            preparation.
          </p>
          <AiToolExample />
        </div>
      </section>
    </>
  );
}
