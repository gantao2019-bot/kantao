import type { LegalContent, Locale } from "../lib/content";

/** Shared renderer for /privacy and /terms. */
export default function LegalPage({
  content,
}: {
  content: LegalContent;
}) {
  return (
    <div className="container">
      <section>
        <span className="eyebrow">{content.eyebrow}</span>
        <h1>{content.title}</h1>
        <p className="lead">{content.subtitle}</p>
        <p className="meta-line">{content.updated}</p>
        {content.intro.map((block, i) =>
          block.kind === "list" ? (
            <ul key={i}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p key={i}>{block.text}</p>
          ),
        )}
      </section>

      {content.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.blocks.map((block, i) =>
            block.kind === "list" ? (
              <ul key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p key={i}>{block.text}</p>
            ),
          )}
        </section>
      ))}
    </div>
  );
}
