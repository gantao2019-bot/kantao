import type { ArticleContent, Locale } from "../lib/content";
import { articles, resourcesIndex } from "../lib/content";
import { SITE_URL } from "../lib/meta";
import ArticleNav from "./ArticleNav";
import ArticleShare from "./ArticleShare";
import CtaBand from "./CtaBand";

/** Item type marking the daily-article series in the resources index. */
const SERIES_TYPE: Record<Locale, string> = {
  "zh-hk": "觀點",
  en: "Perspective",
};

/** Shared renderer for the /resources/* article pages. */
export default function ArticlePage({
  locale,
  content,
}: {
  locale: Locale;
  content: ArticleContent;
}) {
  // Identify this article's route key by object identity: each page.tsx
  // passes articles[key][locale] by reference, so no per-article prop is needed.
  const routeKey = Object.keys(articles).find(
    (key) => articles[key][locale] === content,
  );

  // Prev/next neighbours from the same newest-first list that drives the
  // resources index, filtered to the daily-article series so evergreen
  // resources (cases, white papers, FAQ, methodology) are excluded.
  // Future daily articles are added to the top of that list, so they slot
  // into the navigation automatically.
  const series = resourcesIndex[locale].items.filter(
    (item) => item.type === SERIES_TYPE[locale],
  );
  const index = routeKey
    ? series.findIndex((item) => item.href === routeKey)
    : -1;
  const prev =
    index >= 0 && index + 1 < series.length
      ? { href: series[index + 1].href, title: series[index + 1].title }
      : null; // older article
  const next =
    index > 0
      ? { href: series[index - 1].href, title: series[index - 1].title }
      : null; // newer article
  const canonicalUrl = routeKey ? `${SITE_URL}/${locale}/${routeKey}` : "";

  const ctaTitle =
    locale === "zh-hk"
      ? "把這個場景轉成您的觀測任務。"
      : "Turn this scenario into your observation mission.";
  return (
    <div className="container">
      <section>
        <span className="eyebrow">{content.category}</span>
        <h1>{content.title}</h1>
        <p className="lead">{content.intro}</p>
        <p className="meta-line">
          {content.date} · {content.readTime}
        </p>
      </section>

      <section className="article-meta">
        <p>
          <strong>{content.audienceLabel}</strong>
          <br />
          {content.audience}
        </p>
        <p>
          <strong>{content.boundaryLabel}</strong>
          <br />
          {content.boundary}
        </p>
      </section>

      {content.sections.map((section) => (
        <section key={section.n}>
          <span className="card-number">{section.n}</span>
          <h2>{section.heading}</h2>
          {section.kind === "list" ? (
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{section.text}</p>
          )}
        </section>
      ))}

      {content.questions.length > 0 && (
        <section>
          <span className="eyebrow">{content.questionsTitle}</span>
          <div className="qa-list">
            {content.questions.map((qa) => (
              <details key={qa.q}>
                <summary>{qa.q}</summary>
                <p>{qa.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <ArticleNav locale={locale} prev={prev} next={next} />
      <ArticleShare locale={locale} title={content.title} url={canonicalUrl} />

      <CtaBand locale={locale} title={ctaTitle} />
    </div>
  );
}
