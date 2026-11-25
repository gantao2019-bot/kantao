import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

const SUPPORTED_LOCALES = ["zh-hk", "en"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = SUPPORTED_LOCALES.includes(locale as Locale)
    ? (locale as Locale)
    : "zh-hk";
  return (
    <>
      <SiteHeader locale={activeLocale} />
      <main>{children}</main>
      <SiteFooter locale={activeLocale} />
    </>
  );
}
