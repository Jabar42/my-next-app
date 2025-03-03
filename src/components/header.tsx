import Link from "next/link"
import { MyNav } from "./myNav"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-xl font-bold">Logo</span>
      </Link>
      <MyNav />
    </header>
  )
}
