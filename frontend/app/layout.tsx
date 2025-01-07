import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { IsMobileProvider } from "@/context/IsMobileProvider";

export const metadata: Metadata = {
  title: {
    default: "Cécile Lochus",
    template: "%s | Cécile Lochus",
  },
  description: "Portfolio de Cécile Lochus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`antialiased`}>
        <IsMobileProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </IsMobileProvider>
      </body>
    </html>
  );
}
