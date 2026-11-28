import type { MetadataRoute } from "next";

const BASE_URL = "https://www.kantao.space";

const LOCALES = ["zh-hk", "en"] as const;

const PATHS = [
  "",
  "/satellite-data",
  "/solutions",
  "/solutions/agriculture",
  "/solutions/banking-insurance",
  "/solutions/emergency-disaster",
  "/solutions/environment",
  "/solutions/financial-intelligence",
  "/solutions/natural-resources",
  "/solutions/power-grid",
  "/solutions/water",
  "/about",
  "/resources",
  "/resources/earth-observation-methodology",
  "/resources/hong-kong-insurance-banking-whitepaper",
  "/resources/north-metropolis-construction-monitoring",
  "/resources/procurement-faq",
  "/resources/sar-disaster-sample-report",
  "/resources/typhoon-sar-claims-triage",
  "/resources/agentic-ai-in-orbit",
  "/resources/strix-14-night-owls-never-sleep",
  "/resources/yaogan-49-01-remote-sensing-group",
  "/resources/adaspace-in-orbit-ai-training",
  "/ai-facts",
  "/contact",
  "/card/eason-lian",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of LOCALES) {
    for (const path of PATHS) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date("2026-11-28"),
      });
    }
  }
  return entries;
}
