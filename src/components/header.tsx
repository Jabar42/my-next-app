export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-extrabold">Mi Sitio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:underline">Inicio</a></li>
            <li><a href="#" className="hover:underline">Acerca de</a></li>
            <li><a href="#" className="hover:underline">Servicios</a></li>
            <li><a href="#" className="hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
