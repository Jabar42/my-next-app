import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col gap-4">
          <Link href="/" className="font-medium">
            Inicio
          </Link>
          <Link href="/docs" className="font-medium">
            Documentation
          </Link>
          <Link href="/nosotros" className="font-medium">
            Nosotros
          </Link>
          <Link href="/eventos" className="font-medium">
            Eventos
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 