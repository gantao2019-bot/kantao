import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { homeContent } from "../../lib/content";
import { metaFor, toLocale } from "../../lib/meta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return metaFor("", locale);
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toLocale(locale);
  const t = homeContent[loc];
  const titleLines = t.title.split(/(?<=[.，])\s/);

  return (
    <div className="container">
      <section className="hero">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1>
          {titleLines.map((line, i) => (
            <span key={i} className="hero-line">
              {line}
            </span>
          ))}
        </h1>
        <p className="lead">{t.intro}</p>
        <p className="hero-cta">
          <Link href={`/${loc}/solutions`} className="btn btn-primary">
            {t.ctaPrimary}
          </Link>{" "}
          <Link href={`/${loc}/contact`} className="btn btn-ghost">
            {t.ctaSecondary}
          </Link>
        </p>
        <figure className="hero-figure">
          <Image
            src="/images/earth-intelligence.png"
            alt={t.imageCaption}
            width={1821}
            height={864}
            priority
          />
          <figcaption>{t.imageCaption}</figcaption>
        </figure>
      </section>

      <section>
        <span className="eyebrow">{t.actionEyebrow}</span>
        <h2>{t.actionTitle}</h2>
        <p className="lead">{t.actionText}</p>
        <p>
          <Link href={`/${loc}/satellite-data`} className="btn btn-ghost">
            {t.dataLinkLabel}
          </Link>
        </p>
      </section>

      <section>
        <span className="eyebrow">{t.solutionsEyebrow}</span>
        <h2>{t.solutionsTitle}</h2>
        <div className="cards">
          {t.solutions.map((item) => (
            <div className="card" key={item.href}>
              <span className="card-number">{item.n}</span>
              <p className="card-category">{item.category}</p>
              <h3>
                <Link href={`/${loc}/${item.href}`}>{item.title}</Link>
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <span className="eyebrow">{t.processEyebrow}</span>
        <h2>{t.processTitle}</h2>
        <div className="cards">
          {t.process.map((step) => (
            <div className="card" key={step.n}>
              <span className="card-number">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>{t.ctaTitle}</h2>
        <p>
          <Link href={`/${loc}/contact`} className="btn btn-primary">
            {t.ctaButton}
          </Link>
        </p>
      </section>
    </div>
  );
}
