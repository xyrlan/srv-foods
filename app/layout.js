import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeSwitch } from "@/components/themeSwitch";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";

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
  title: "Hisa Distribuidora",
  description: "Sua conexão global para importação, exportação e distribuição de diversos produtos. Com a SRV, você tem acesso a qualidade, confiabilidade e excelência em serviços logísticos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative dark:bg-stone-900 bg-white`}
      >
          {children}
      </body>
    </html>
  );
}
