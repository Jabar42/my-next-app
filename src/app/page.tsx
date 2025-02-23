import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold">Hola Mundo</h1>
      </div>
      <Footer />
    </div>
  );
}
