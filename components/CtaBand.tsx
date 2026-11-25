import Link from "next/link";
import type { Locale } from "../lib/content";

const COPY: Record<Locale, { title: string; button: string }> = {
  "zh-hk": {
    title: "把您的決策問題轉化為可持續的觀測任務。",
    button: "與我們聯絡",
  },
  en: {
    title: "Turn your decision problem into a persistent observation mission.",
    button: "Contact our team",
  },
};

/** Closing call-to-action band used at the end of most pages. */
export default function CtaBand({
  locale,
  title,
}: {
  locale: Locale;
  title?: string;
}) {
  const t = COPY[locale];
  return (
    <section className="cta-band">
      <h2>{title ?? t.title}</h2>
      <p>
        <Link href={`/${locale}/contact`} className="btn btn-primary">
          {t.button}
        </Link>
      </p>
    </section>
  );
}
