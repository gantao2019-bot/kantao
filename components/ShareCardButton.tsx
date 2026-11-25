"use client";

import { useState } from "react";
import type { Locale } from "../lib/content";

const LABELS = {
  "zh-hk": { share: "分享名片", copied: "已複製名片連結。" },
  en: { share: "Share card", copied: "Card link copied." },
} as const;

/** Share button for the digital business card (Web Share API with clipboard fallback). */
export default function ShareCardButton({ locale }: { locale: Locale }) {
  const t = LABELS[locale];
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url });
        return;
      } catch {
        // User dismissed the share sheet; fall through to clipboard.
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      // Clipboard unavailable; nothing further to do.
    }
  }

  return (
    <span>
      <button type="button" className="btn btn-ghost" onClick={share}>
        {t.share}
      </button>{" "}
      {copied && <span className="form-sent">{t.copied}</span>}
    </span>
  );
}
