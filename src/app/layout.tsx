import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Karam Azmy Media → KATechnologies",
    template: "%s · KATechnologies",
  },
  description: "Wir sind umgezogen: Du findest uns ab sofort unter katechnologies.de.",
  metadataBase: new URL("https://katechnologies.de"),
  alternates: {
    canonical: "https://katechnologies.de",
  },
  openGraph: {
    title: "Wir sind umgezogen",
    description:
      "Karam Azmy Media ist jetzt unter katechnologies.de erreichbar. Klick hier, um direkt weiterzugehen.",
    url: "https://katechnologies.de",
    siteName: "KATechnologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
