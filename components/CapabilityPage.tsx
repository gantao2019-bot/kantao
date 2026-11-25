import Link from "next/link";
import type { CapabilityContent, Locale } from "../lib/content";
import CtaBand from "./CtaBand";

/** Shared renderer for /satellite-data and the eight /solutions/* pages. */
export default function CapabilityPage({
  locale,
  content,
}: {
  locale: Locale;
  content: CapabilityContent;
}) {
  return (
    <div className="container">
      <section>
        <span className="eyebrow">{content.eyebrow}</span>
        <h1>{content.title}</h1>
        <p className="lead">{content.intro}</p>
        <p>
          <Link href={`/${locale}/contact`} className="btn btn-primary">
            {locale === "zh-hk" ? "與我們聯絡" : "Contact our team"}
          </Link>
        </p>
      </section>

      <section>
        <span className="eyebrow">{content.capabilitiesTitle}</span>
        <h2>{content.capabilitiesLead}</h2>
        <div className="cards">
          {content.cards.map((card) => (
            <div className="card" key={card.n}>
              <span className="card-number">{card.n}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <span className="eyebrow">{content.deliverTitle}</span>
        <h2>{content.deliverLead}</h2>
        <ul className="check-list">
          {content.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <CtaBand locale={locale} />
    </div>
  );
}
