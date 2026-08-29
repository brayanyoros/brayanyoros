import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { OrganizationSchema } from "@/components/StructuredData";
import { clinic } from "@/lib/clinic-data";
import { SITE_URL } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${clinic.name} | Dentista em Teresópolis - RJ`,
    template: `%s | ${clinic.name}`,
  },
  description:
    "Odontologia estética e reabilitadora em Teresópolis, com o Dr. Luis Vieira (CRO-RJ 55611). Clareamento, restaurações em resina composta e prótese dentária. Agende sua avaliação.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: clinic.name,
    title: `${clinic.name} | Dentista em Teresópolis - RJ`,
    description:
      "Odontologia estética e reabilitadora em Teresópolis, com o Dr. Luis Vieira (CRO-RJ 55611). Agende sua avaliação.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinic.name} | Dentista em Teresópolis - RJ`,
    description:
      "Odontologia estética e reabilitadora em Teresópolis, com o Dr. Luis Vieira (CRO-RJ 55611).",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-cream"
        >
          Pular para o conteúdo
        </a>
        <OrganizationSchema />
        <Header />
        <main id="conteudo-principal" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
