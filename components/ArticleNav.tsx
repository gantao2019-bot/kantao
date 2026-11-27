import Link from "next/link";
import type { Locale } from "../lib/content";

export interface ArticleNavTarget {
  href: string;
  title: string;
}

const LABELS: Record<Locale, { prev: string; next: string; navLabel: string }> = {
  "zh-hk": { prev: "上一篇", next: "下一篇", navLabel: "文章導航" },
  en: { prev: "Previous", next: "Next", navLabel: "Article navigation" },
};

/**
 * Previous / Next navigation between daily articles.
 * `prev` is the older article, `next` is the newer one; either may be
 * absent at the ends of the series (oldest shows only Next, newest only Previous).
 */
export default function ArticleNav({
  locale,
  prev,
  next,
}: {
  locale: Locale;
  prev: ArticleNavTarget | null;
  next: ArticleNavTarget | null;
}) {
  if (!prev && !next) return null;
  const t = LABELS[locale];
  return (
    <nav className="article-nav" aria-label={t.navLabel}>
      {prev ? (
        <Link
          href={`/${locale}/${prev.href}`}
          className="article-nav-link article-nav-prev"
        >
          <span className="article-nav-label">← {t.prev}</span>
          <span className="article-nav-title">{prev.title}</span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}
      {next ? (
        <Link
          href={`/${locale}/${next.href}`}
          className="article-nav-link article-nav-next"
        >
          <span className="article-nav-label">{t.next} →</span>
          <span className="article-nav-title">{next.title}</span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}
    </nav>
  );
}
