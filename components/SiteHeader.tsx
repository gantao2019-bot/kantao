"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "../lib/content";

const NAV: Record<Locale, { href: string; label: string }[]> = {
  "zh-hk": [
    { href: "", label: "首頁" },
    { href: "/satellite-data", label: "衛星數據" },
    { href: "/solutions", label: "解決方案" },
    { href: "/resources", label: "資源中心" },
    { href: "/about", label: "關於我們" },
    { href: "/contact", label: "聯絡我們" },
  ],
  en: [
    { href: "", label: "Home" },
    { href: "/satellite-data", label: "Satellite Data" },
    { href: "/solutions", label: "Solutions" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
};

/**
 * Site header. The live site also linked to the in-preparation Satellite AI
 * subscription page; that link is deliberately omitted from this rebuild.
 */
export default function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? `/${locale}`;
  const otherLocale: Locale = locale === "zh-hk" ? "en" : "zh-hk";
  const rest = pathname.replace(/^\/(zh-hk|en)/, "");
  const otherPath = `/${otherLocale}${rest}`;
  const t = NAV[locale];

  return (
    <header className="site-header">
      <div className="container">
        <Link href={`/${locale}`} className="brand" aria-label="KANTAO">
          <Image
            src="/logo-dark-bg.svg"
            alt="KANTAO"
            width={110}
            height={40}
            priority
          />
        </Link>
        <nav aria-label="Main">
          {t.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href}`}>
              {item.label}
            </Link>
          ))}
          <span className="lang-switcher">
            <Link
              href={`/${locale}${rest}`}
              className={locale === "zh-hk" ? "active" : ""}
              hrefLang="zh-HK"
            >
              繁中
            </Link>
            <Link
              href={otherPath}
              className={locale === "en" ? "active" : ""}
              hrefLang="en"
            >
              EN
            </Link>
          </span>
        </nav>
      </div>
    </header>
  );
}
