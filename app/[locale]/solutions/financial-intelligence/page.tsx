import type { Metadata } from "next";
import { metaFor, toLocale } from "../../../../lib/meta";
import { capabilities } from "../../../../lib/content";
import CapabilityPage from "../../../../components/CapabilityPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return metaFor("solutions/financial-intelligence", locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toLocale(locale);
  const content = capabilities["solutions/financial-intelligence"][loc];
  return <CapabilityPage locale={loc} content={content} />;
}
