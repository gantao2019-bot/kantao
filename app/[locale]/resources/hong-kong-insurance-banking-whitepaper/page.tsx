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
  return metaFor("resources/hong-kong-insurance-banking-whitepaper", locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toLocale(locale);
  const content = articles["resources/hong-kong-insurance-banking-whitepaper"][loc];
  return <ArticlePage locale={loc} content={content} />;
}
