import Hero from "@/components/hero";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import Services from "@/components/Services";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero/>
      <Services/>
      <VideoSection/>
      <Footer/>
    </div>
  );
}

