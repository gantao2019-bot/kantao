"use client";

import { useState } from "react";
import type { Locale } from "../lib/content";

const INTERESTS: { zh: string; en: string }[] = [
  { zh: "衛星數據", en: "Satellite Data" },
  { zh: "應急與災害管理", en: "Emergency & Disaster" },
  { zh: "環境保護", en: "Environment" },
  { zh: "農業", en: "Agriculture" },
  { zh: "水利", en: "Water" },
  { zh: "自然資源", en: "Natural Resources" },
  { zh: "電網", en: "Power Grid" },
  { zh: "銀行及保險", en: "Banking & Insurance" },
  { zh: "金融情報", en: "Financial Intelligence" },
];

const COPY = {
  "zh-hk": {
    name: "姓名",
    organization: "機構 / 公司",
    email: "電郵",
    phone: "電話（選填）",
    region: "國家或地區",
    interest: "關注方案",
    message: "項目需要或查詢",
    consent: "我同意趕淘科技按私隱政策處理以上資料。",
    submit: "提交查詢",
    mailtoNote:
      "提交後將開啟您的電郵程式，查詢將以電郵發送至 info@kantao.space。本網站不設伺服器端發送。",
    notifyNote: "確認提交後，查詢將通知 info@kantao.space。",
    sent: "已開啟您的電郵程式 — 請在電郵程式中按「發送」完成查詢。",
    required: "請填寫此欄。",
  },
  en: {
    name: "Name",
    organization: "Organisation",
    email: "Email",
    phone: "Phone (optional)",
    region: "Country or region",
    interest: "Solution of interest",
    message: "Project needs or enquiry",
    consent:
      "I agree that Kantao Technology may process this information under its privacy policy.",
    submit: "Submit enquiry",
    mailtoNote:
      "Submitting opens your email app — the enquiry is sent to info@kantao.space from your email. This site has no server-side sending.",
    notifyNote:
      "After you confirm submission, this enquiry will notify info@kantao.space.",
    sent: "Your email app should now be open — press send there to complete your enquiry.",
    required: "Please fill in this field.",
  },
} as const;

/**
 * Enquiry form (identical on /contact and /card/eason-lian).
 * There is no server backend, so submission opens the visitor's own mail
 * client with a pre-filled email to info@kantao.space (mailto fallback).
 * The `website` field is a honeypot kept hidden from human visitors.
 */
export default function EnquiryForm({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // Honeypot: silently drop bot submissions.
    if ((data.get("website") as string | null)?.trim()) return;
    const name = (data.get("name") as string) || "";
    const organization = (data.get("organization") as string) || "";
    const email = (data.get("email") as string) || "";
    const phone = (data.get("phone") as string) || "";
    const region = (data.get("region") as string) || "";
    const interest = (data.get("interest") as string) || "";
    const message = (data.get("message") as string) || "";
    const subject =
      locale === "zh-hk"
        ? `查詢：${name}${interest ? ` — ${interest}` : ""}`
        : `Enquiry: ${name}${interest ? ` — ${interest}` : ""}`;
    const lines: [string, string][] = [
      [t.name, name],
      [t.organization, organization],
      [t.email, email],
      [t.phone, phone],
      [t.region, region],
      [t.interest, interest],
      [t.message, message],
    ];
    const body = lines
      .filter(([, v]) => v.trim() !== "")
      .map(([label, v]) => `${label}: ${v}`)
      .join("\n");
    window.location.href = `mailto:info@kantao.space?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="enquiry-name">{t.name}</label>
          <input id="enquiry-name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="enquiry-organization">{t.organization}</label>
          <input
            id="enquiry-organization"
            name="organization"
            type="text"
            required
            autoComplete="organization"
          />
        </div>
        <div className="field">
          <label htmlFor="enquiry-email">{t.email}</label>
          <input id="enquiry-email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="enquiry-phone">{t.phone}</label>
          <input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="enquiry-region">{t.region}</label>
          <input id="enquiry-region" name="region" type="text" required autoComplete="country-name" />
        </div>
        <div className="field">
          <label htmlFor="enquiry-interest">{t.interest}</label>
          <select id="enquiry-interest" name="interest" required defaultValue="">
            <option value="" disabled>
              —
            </option>
            {INTERESTS.map((opt) => (
              <option key={opt.en} value={locale === "zh-hk" ? opt.zh : opt.en}>
                {locale === "zh-hk" ? opt.zh : opt.en}
              </option>
            ))}
          </select>
        </div>
        <div className="field field-full">
          <label htmlFor="enquiry-message">{t.message}</label>
          <textarea id="enquiry-message" name="message" rows={6} required />
        </div>
      </div>

      {/* Honeypot — no visible label, hidden from human visitors. */}
      <div className="hp" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="field checkbox-row">
        <input id="enquiry-consent" name="privacyConsent" type="checkbox" required />
        <label htmlFor="enquiry-consent">{t.consent}</label>
      </div>

      <p className="form-note">{t.mailtoNote}</p>
      <p className="form-note">{t.notifyNote}</p>

      <p>
        <button type="submit" className="btn btn-primary">
          {t.submit}
        </button>
      </p>
      {sent && (
        <p className="form-sent" role="status">
          {t.sent}
        </p>
      )}
    </form>
  );
}
