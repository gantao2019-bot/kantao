import Link from "next/link";
import type { Locale } from "../lib/content";

const LABELS = {
  "zh-hk": {
    tagline: "由香港連接全球地球觀測數據、分析能力與行業決策場景。",
    address: "香港九龍尖沙咀麼地道62號永安廣場9樓3-4室",
    navTitle: "網站導覽",
    nav: [
      { href: "/satellite-data", label: "衛星數據" },
      { href: "/solutions", label: "解決方案" },
      { href: "/resources", label: "資源中心" },
      { href: "/about", label: "關於我們" },
      { href: "/contact", label: "聯絡我們" },
    ],
    privacy: "私隱政策",
    terms: "使用條款",
    aiFacts: "官方事實",
  },
  en: {
    tagline:
      "Connecting global Earth observation data and analytics with real industry decisions from Hong Kong.",
    address:
      "FLAT/RM 3-4, 9/F, WING ON PLAZA, 62 MODY ROAD, TSIM SHA TSUI, KOWLOON, HONG KONG",
    navTitle: "Navigate",
    nav: [
      { href: "/satellite-data", label: "Satellite Data" },
      { href: "/solutions", label: "Solutions" },
      { href: "/resources", label: "Resources" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    privacy: "Privacy",
    terms: "Terms",
    aiFacts: "AI facts",
  },
} as const;

export default function SiteFooter({ locale }: { locale: Locale }) {
  const t = LABELS[locale];
  return (
    <footer className="site-footer">
      <div className="container">
        <p>{t.tagline}</p>
        <p>
          <strong>趕淘科技（香港）有限公司</strong>
          <br />
          <strong>KANTAO TECHNOLOGY (HK) LIMITED</strong>
        </p>
        <p>
          <a href="mailto:info@kantao.space">info@kantao.space</a>
          <br />
          {t.address}
        </p>
        <p>© 2026 KANTAO TECHNOLOGY (HK) LIMITED</p>
        <nav aria-label={t.navTitle}>
          {t.nav.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Legal">
          <Link href={`/${locale}/privacy`}>{t.privacy}</Link>
          <Link href={`/${locale}/terms`}>{t.terms}</Link>
          <Link href={`/${locale}/ai-facts`}>{t.aiFacts}</Link>
        </nav>
      </div>
    </footer>
  );
}
