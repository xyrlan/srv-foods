import AboutSection from "@/components/sections/aboutSection";
import CustomersSection from "@/components/sections/customersSection";
import HeroSection from "@/components/sections/heroSection";
import ProductsSection from "@/components/sections/productsSection";
import { fetchCatalogo, fetchClients, fetchProducts } from "@/sanity/lib/queries";

export default async function Home() {
  const products = await fetchProducts();
  const clients = await fetchClients();
  // const catalogo = await fetchCatalogo();
  
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsSection products={products} />
      <CustomersSection clients={clients} />
    </main>
  );
}
