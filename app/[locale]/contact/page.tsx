import type { Metadata } from "next";
import { metaFor, toLocale } from "../../../lib/meta";
import { contactContent } from "../../../lib/content";
import EnquiryForm from "../../../components/EnquiryForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return metaFor("contact", locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = toLocale(locale);
  const t = contactContent[loc];
  const address =
    loc === "zh-hk"
      ? "香港九龍尖沙咀麼地道62號永安廣場9樓3-4室"
      : "FLAT/RM 3-4, 9/F, WING ON PLAZA, 62 MODY ROAD, TSIM SHA TSUI, KOWLOON, HONG KONG";
  return (
    <div className="container">
      <section>
        <span className="eyebrow">{t.eyebrow}</span>
        <h1>{t.title}</h1>
        <p className="lead">{t.intro}</p>
      </section>
      <section>
        <h2>{loc === "zh-hk" ? "公司資料" : "Company details"}</h2>
        <p>
          <strong>
            {loc === "zh-hk"
              ? "趕淘科技（香港）有限公司"
              : "KANTAO TECHNOLOGY (HK) LIMITED"}
          </strong>
          <br />
          {loc === "zh-hk" ? "電郵" : "Email"}:{" "}
          <a href="mailto:info@kantao.space">info@kantao.space</a>
          <br />
          {loc === "zh-hk" ? "地址" : "Address"}: {address}
        </p>
      </section>
      <section>
        <EnquiryForm locale={loc} />
      </section>
    </div>
  );
}
