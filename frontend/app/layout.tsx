import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { IsMobileProvider } from "@/context/IsMobileProvider";
import LenisProvider from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: {
    default: "Cécile Lochus",
    template: "%s | Cécile Lochus",
  },
  description: "Portfolio de Cécile Lochus",
};

async function getSocials() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/reseaux-sociaux?populate=*"
  );
  const socials = await res.json();

  return socials.data.lien;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const socials = await getSocials();

  return (
    <html lang="fr" className="scroll-smooth">
      <body id="top" className={`antialiased`}>
        <IsMobileProvider>
          <LenisProvider>
            <Header />
            <main>{children}</main>
            <Footer socials={socials} />
            <Analytics />
          </LenisProvider>
        </IsMobileProvider>
      </body>
    </html>
  );
}
