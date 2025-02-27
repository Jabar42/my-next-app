import Hero from "@/components/hero";
import Footer from "@/components/footer";
import { Menu } from "lucide-react";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Menu/>
      <Hero/>
      <Footer/>
    </div>
  );
}
