import type { Metadata } from "next";
import { metaFor, toLocale } from "../../../lib/meta";
import { aboutContent } from "../../../lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return metaFor("about", locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toLocale(locale);
  const t = aboutContent[loc];
  return (
    <div className="container">
      <section>
        <span className="eyebrow">{t.eyebrow}</span>
        <h1>{t.title}</h1>
        <p className="lead">{t.intro}</p>
        <p className="caption">{t.caption}</p>
      </section>
      <section>
        <span className="eyebrow">{t.principlesTitle}</span>
        <h2>{t.principlesLead}</h2>
        <div className="cards">
          {t.principles.map((item) => (
            <div className="card" key={item.n}>
              <span className="card-number">{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
