import type { Metadata } from "next";
import { metaFor, toLocale } from "../../../lib/meta";
import { legal } from "../../../lib/content";
import LegalPage from "../../../components/LegalPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return metaFor("terms", locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toLocale(locale);
  const content = legal["terms"][loc];
  return <LegalPage content={content} />;
}
