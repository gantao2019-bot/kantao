import type { Metadata } from "next";
import { metaFor, toLocale } from "../../../lib/meta";
import Link from "next/link";
import { resourcesIndex } from "../../../lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return metaFor("resources", locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toLocale(locale);
  const t = resourcesIndex[loc];
  return (
    <div className="container">
      <section>
        <span className="eyebrow">{t.eyebrow}</span>
        <h1>{t.title}</h1>
        <p className="lead">{t.intro}</p>
      </section>
      <section>
        <div className="cards">
          {t.items.map((item) => (
            <div className="card" key={item.href}>
              <span className="card-number">{item.type}</span>
              <p className="meta-line">
                {item.date} / {item.readTime}
              </p>
              <p className="card-category">{item.category}</p>
              <h3>
                <Link href={`/${loc}/${item.href}`}>{item.title}</Link>
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
