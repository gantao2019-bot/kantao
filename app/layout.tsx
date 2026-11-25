import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KANTAO TECHNOLOGY (HK) LIMITED",
  description:
    "Satellite data and earth observation applications — KANTAO TECHNOLOGY (HK) LIMITED.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
