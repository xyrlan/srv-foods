import "../globals.css";
import { Providers } from "../providers";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Hisa Distribuidora",
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

export default function MainLayout({ children }) {
  return (
        <Providers>
          <Navbar alwaysShown={false} />
          {/* <ThemeSwitch /> */}
          {children}
          <Footer />
        </Providers>
  );
}
