import AboutSection from "@/components/sections/aboutSection";
import CustomersSection from "@/components/sections/customersSection";
import HeroSection from "@/components/sections/heroSection";
import ProductsSection from "@/components/sections/productsSection";
import { fetchAllDocuments } from "@/sanity/lib/queries";

export default async function Home() {
  const data = await fetchAllDocuments();
  console.log(data)
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CustomersSection />
    </>
  );
}
