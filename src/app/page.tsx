import Hero from "@/components/hero";
import Prueba from "../components/prueba";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Prueba/>
      <Hero/>
      <Footer/>
    </div>
  );
}
