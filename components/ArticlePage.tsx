import type { ArticleContent, Locale } from "../lib/content";
import CtaBand from "./CtaBand";

/** Shared renderer for the /resources/* article pages. */
export default function ArticlePage({
  locale,
  content,
}: {
  locale: Locale;
  content: ArticleContent;
}) {
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

      <CtaBand locale={locale} title={ctaTitle} />
    </div>
  );
}
