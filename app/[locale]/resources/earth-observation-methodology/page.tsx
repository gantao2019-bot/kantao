import type { Metadata } from "next";
import { metaFor, toLocale } from "../../../../lib/meta";
import { articles } from "../../../../lib/content";
import ArticlePage from "../../../../components/ArticlePage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return metaFor("resources/earth-observation-methodology", locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toLocale(locale);
  const content = articles["resources/earth-observation-methodology"][loc];
  return <ArticlePage locale={loc} content={content} />;
}
