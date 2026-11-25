import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cardContent } from "../../../../lib/content";
import { metaFor, toLocale } from "../../../../lib/meta";
import EnquiryForm from "../../../../components/EnquiryForm";
import ShareCardButton from "../../../../components/ShareCardButton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return metaFor("card/eason-lian", locale);
}

export default async function CardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toLocale(locale);
  const t = cardContent[loc];
  const isZh = loc === "zh-hk";
  const actions = {
    call: isZh ? "致電" : "Call",
    website: isZh ? "官網" : "Website",
    submit: isZh ? "提交衛星應用需求" : "Submit a satellite requirement",
    explore: isZh ? "查看 8 類應用場景" : "Explore eight application areas",
  };

  return (
    <div className="container">
      <section className="hero">
        <figure className="hero-figure">
          <Image
            src="/images/earth-intelligence.png"
            alt={t.companyName}
            width={1821}
            height={864}
            priority
          />
        </figure>
        <span className="eyebrow">{t.eyebrow}</span>
        <h1>
          {t.nameMain}{" "}
          <span className="name-alt">{t.nameAlt}</span>
        </h1>
        <p className="lead">{t.role}</p>
        <p>{t.bio}</p>
        <p className="card-actions">
          <a href="tel:+85295258666" className="btn btn-primary">
            {actions.call}
          </a>{" "}
          <Link href={`/${loc}`} className="btn btn-ghost">
            {actions.website}
          </Link>{" "}
          <ShareCardButton locale={loc} />{" "}
          <a href="#enquiry-form" className="btn btn-ghost">
            {actions.submit}
          </a>
        </p>
        <p className="contact-lines">
          <a href="tel:+85295258666">+852 9525 8666</a>
          <br />
          <a href="tel:+8618650228181">+86 186 5022 8181</a>
          <br />
          <a href="mailto:info@kantao.space">info@kantao.space</a>
          <br />
          <a href="https://www.kantao.space">www.kantao.space</a>
          <br />
          {t.address}
        </p>
        <p className="caption">{t.shareNote}</p>
      </section>

      <section>
        <span className="eyebrow">{t.profileLabel}</span>
        <h2>{t.companyName}</h2>
        <p className="lead">{t.companyDesc}</p>
        <ol className="numbered-list">
          {t.capabilities.map((cap) => (
            <li key={cap}>{cap}</li>
          ))}
        </ol>
      </section>

      <section>
        <span className="eyebrow">{t.appsLabel}</span>
        <p className="caption">{actions.explore}</p>
        <h2>{t.appsTitle}</h2>
        <p className="lead">{t.appsIntro}</p>
        <ol className="numbered-list">
          {t.apps.map((app) => (
            <li key={app.href}>
              <Link href={`/${loc}/${app.href}`}>{app.title}</Link>
            </li>
          ))}
        </ol>
      </section>

      <section id="enquiry-form">
        <span className="eyebrow">{t.reqLabel}</span>
        <h2>{t.reqTitle}</h2>
        <p className="lead">{t.reqIntro}</p>
        {t.reqNote && <p>{t.reqNote}</p>}
        <EnquiryForm locale={loc} />
        <p>
          <strong>{t.companyName}</strong>
          <br />
          {t.address}
        </p>
      </section>
    </div>
  );
}
