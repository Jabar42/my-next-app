'use client';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Link } from "@/i18n/routing"
import { useTranslations } from 'next-intl'

export function MobileNav() {
  const t = useTranslations('nav');
  
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col gap-4">
          <Link href="/" className="font-medium">
            {t('inicio')}
          </Link>
          <Link href="/docs" className="font-medium">
            {t('documentation')}
          </Link>
          <Link href="/nosotros" className="font-medium">
            {t('nosotros')}
          </Link>
          <Link href="/eventos" className="font-medium">
            {t('eventos')}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 