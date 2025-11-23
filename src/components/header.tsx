'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { MyNav } from "./myNav"
import Image from "next/image"
import { MobileNav } from "./mobile-nav"
import { LanguageSwitcher } from "./LanguageSwitcher"

export function Header() {
  const t = useTranslations('common');
  
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt={t('logoAlt')}
            width={58}
            height={20}
            priority
          />
        </Link>
        <div className="hidden md:block">
          <MyNav />
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
