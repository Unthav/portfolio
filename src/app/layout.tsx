import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/instrument-sans";
import "./globals.css";
import { site } from "@/data/site";

const title = `${site.name} | ${site.status}`;
const description =
  "Portfolio of Bishal Deka, a third-year BCA student at Mangaldai College (Gauhati University) learning Machine Learning with Python and building practical projects.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  authors: [{ name: site.name }],
  keywords: ["Bishal Deka", "BCA student", "Machine Learning", "Python", "Portfolio", "Mangaldai College"],
  openGraph: { title, description, type: "website", url: site.url, siteName: site.name },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0d1220", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
