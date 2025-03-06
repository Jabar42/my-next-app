import Link from "next/link"
import { MyNav } from "./myNav"
import Image from "next/image"
import { MobileNav } from "./mobile-nav"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo de Varsana"
            width={58}
            height={20}
            priority
          />
        </Link>
        <div className="hidden md:block">
          <MyNav />
        </div>
        <MobileNav />
      </div>
    </header>
  )
}
