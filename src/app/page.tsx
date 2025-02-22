import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
