import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Hisa Distribuidora - Distribuidora Exclusiva do Franuí e Bacio di Latte",
  description: "Sua conexão global para importação, exportação e distribuição de diversos produtos. Com a SRV, você tem acesso a qualidade, confiabilidade e excelência em serviços logísticos.",
  applicationName: "Hisa Distribuidora",
  alternates: {
    canonical: "https://comprecomhisa.com.br",
  },
  category: "Distribuidora e Logística",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://comprecomhisa.com.br",
    site_name: "Hisa Distribuidora",
    title: "Hisa Distribuidora",
    description: "Sua conexão global para importação, exportação e distribuição de diversos produtos. Com a Hisa, você tem acesso a qualidade, confiabilidade e excelência em serviços logísticos.",
    images: [
      {
        url: "https://comprecomhisa.com.br/ativo3.svg",
        width: 1200,
        height: 630,
        alt: "Hisa Distribuidora",
      },
    ],
    site_name: "Hisa Distribuidora",
    locale: "pt_BR",
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative dark:bg-stone-900 bg-white`}
      >
          {children}
      </body>
    </html>
  );
}
