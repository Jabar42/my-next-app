import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 font-light pt-12">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full p-4 xl:mr-auto xl:w-4/12">
            <Link href="/" passHref className=" inline-block mb-6 mr-auto ">
                <Image src="/logo.png" alt="Logo" width={85} height={55} />
            </Link>
            <p className=" mb-4 text-sm">Duis pharetra venenatis felis, ut tincidunt ipsum consequat nec. Fusce et porttitor libero, eu aliquam nisi. Nam finibus ullamcorper semper.</p>
            <div className="mb-6">
              <a href="#" className="hover:text-blue-600">+57 234 567-890</a> <br />
              <a href="#" className="hover:text-blue-600">info@varsana.com</a>
            </div>
            <div className="flex-wrap inline-flex space-x-3">
              <a href="#" className="hover:text-blue-600" aria-label="facebook">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-600" aria-label="twitter">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-600" aria-label="instagram">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-600" aria-label="linkedin">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-600" aria-label="youtube">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full p-4 xl:w-2/12 sm:w-4/12">
            <h2 className="font-bold mb-8 text-lg uppercase">Acerca</h2>
            <ul>
              <li className="mb-4"><a href="#" className="hover:text-blue-600">Nosotros</a></li>
              <li className="mb-4"><a href="#" className="hover:text-blue-600">Instructores</a></li>
              <li className="mb-4"><a href="#" className="hover:text-blue-600">Voluntariado</a></li>
              <li className="mb-4"><a href="#" className="hover:text-blue-600">Vision</a></li>
            </ul>
          </div>
          <div className="w-full p-4 xl:w-2/12 sm:w-4/12">
            <h2 className="font-bold mb-8 text-lg uppercase">Servicios</h2>
            <ul>
              <li className="mb-4"><a href="#" className="hover:text-blue-600">Eventos</a></li>
              <li className="mb-4"><a href="#" className="hover:text-blue-600">Pasadias</a></li>
              <li className="mb-4"><a href="#" className="hover:text-blue-600">Hospedaje</a></li>
              <li className="mb-4"><a href="#" className="hover:text-blue-600">Alquilier para grupos</a></li>
              <li className="mb-4"><a href="#" className="hover:text-blue-600">Temazcales</a></li>
            </ul>
          </div>
          <div className="w-full p-4 xl:w-2/12 sm:w-4/12">
            <h2 className="font-bold mb-8 text-lg uppercase">Otros</h2>
            <ul>
              <li className="mb-4"><a href="#" className="hover:text-blue-600">Galeria</a></li>
              <li className="mb-4"><a href="#" className="hover:text-blue-600">Filosofia</a></li>
              <li className="mb-4"><a href="#" className="hover:text-blue-600">Blog</a></li>
              <li className="mb-4"><a href="#" className="hover:text-blue-600">Podcast</a></li>
              <li className="mb-4"><a href="#" className="hover:text-blue-600">Ashram Life</a></li>
            </ul>
          </div>
        </div>
        <div className="py-4 text-center">
          <hr className="border-gray-400 mb-4" />
          <p className="text-sm">Copyright &copy; 2025 Varsana</p>
        </div>
      </div>
    </footer>
  );
}
