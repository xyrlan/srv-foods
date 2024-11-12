import Navbar from "@/components/navBar";
import { Providers } from "../providers";
import Footer from "@/components/footer";


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
