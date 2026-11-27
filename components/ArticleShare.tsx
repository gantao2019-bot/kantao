"use client";

import { useState } from "react";
import type { Locale } from "../lib/content";

const LABELS = {
  "zh-hk": {
    heading: "分享這篇文章",
    share: "分享",
    copy: "複製連結",
    copied: "已複製連結。",
  },
  en: {
    heading: "Share this article",
    share: "Share",
    copy: "Copy link",
    copied: "Link copied.",
  },
} as const;

/** Inline brand marks (monochrome, currentColor). No third-party SDKs. */
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

/**
 * One-click article sharing. Primary action is the native Web Share API
 * where supported; platform share-intent links and copy-link are the
 * fallback. No third-party SDKs, no tracking.
 */
export default function ArticleShare({
  locale,
  title,
  url,
}: {
  locale: Locale;
  title: string;
  url: string;
}) {
  const t = LABELS[locale];
  const [copied, setCopied] = useState(false);

  // Canonical URL is passed from the server; fall back to the live page URL.
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const encUrl = encodeURIComponent(shareUrl);
  const encTitle = encodeURIComponent(title);

  const targets = [
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?text=${encTitle}&url=${encUrl}`,
      Icon: XIcon,
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encUrl}`,
      Icon: LinkedInIcon,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encUrl}`,
      Icon: FacebookIcon,
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${title} ${shareUrl}`)}`,
      Icon: WhatsAppIcon,
    },
    {
      name: "Telegram",
      href: `https://t.me/share/url?url=${encUrl}&text=${encTitle}`,
      Icon: TelegramIcon,
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      return;
    } catch {
      // Clipboard API unavailable (e.g. non-secure context); legacy fallback.
    }
    try {
      const ta = document.createElement("textarea");
      ta.value = shareUrl;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
    } catch {
      // Nothing further to do.
    }
  }

  async function shareNative() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url: shareUrl });
        return;
      } catch {
        // User dismissed the sheet; fall through to copy-link.
      }
    }
    await copyLink();
  }

  return (
    <div className="article-share">
      <h2>{t.heading}</h2>
      <div className="share-buttons">
        <button type="button" className="btn btn-primary" onClick={shareNative}>
          {t.share}
        </button>
        {targets.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="share-icon-btn"
            aria-label={`${t.share} — ${name}`}
            title={name}
          >
            <Icon />
          </a>
        ))}
        <button type="button" className="btn btn-ghost" onClick={copyLink}>
          {t.copy}
        </button>
        {copied && <span className="share-copied">{t.copied}</span>}
      </div>
    </div>
  );
}
