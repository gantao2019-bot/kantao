import type { Metadata } from "next";
import { metaFor, toLocale } from "../../../lib/meta";
import Link from "next/link";
import { aiFacts } from "../../../lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return metaFor("ai-facts", locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toLocale(locale);
  const t = aiFacts[loc];
  return (
    <div className="container">
      <section>
        <span className="eyebrow">{t.eyebrow}</span>
        <h1>{t.title}</h1>
        <p className="lead">{t.intro}</p>
      </section>
      <section>
        <h2>{t.identityTitle}</h2>
        {t.identity.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>
      <section>
        <h2>{t.capabilitiesTitle}</h2>
        {t.capabilities.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>
      <section>
        <h2>{t.useCasesTitle}</h2>
        {t.useCases.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>
      <section>
        <span className="eyebrow">{t.crawlerTitle}</span>
        <p>{t.crawlerText}</p>
        <h3>{t.allowedLabel}</h3>
        <ul className="tag-list">
          {t.allowed.map((bot) => (
            <li key={bot}>{bot}</li>
          ))}
        </ul>
        <h3>{t.restrictedLabel}</h3>
        <ul className="tag-list">
          {t.restricted.map((bot) => (
            <li key={bot}>{bot}</li>
          ))}
        </ul>
      </section>
      <section>
        <span className="eyebrow">{t.boundaryTitle}</span>
        <p>{t.boundary}</p>
        <p>
          <Link href={`/${loc}/resources`} className="btn btn-ghost">
            {loc === "zh-hk" ? "查看資源中心" : "View resources"}
          </Link>{" "}
          <Link href={`/${loc}/contact`} className="btn btn-primary">
            {loc === "zh-hk" ? "與我們聯絡" : "Contact our team"}
          </Link>
        </p>
      </section>
    </div>
  );
}
