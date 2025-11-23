'use client';

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { Link } from "@/i18n/routing"
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { cn } from "@/lib/utils"

export function MobileNav() {
  const t = useTranslations('nav');
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  
  const toggleDropdown = (key: string) => {
    setOpenDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const components = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description: "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description: "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];
  
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetTitle className="sr-only">{t('inicio')}</SheetTitle>
        <nav className="flex flex-col gap-2">
          {/* Getting Started Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('gettingStarted')}
              className="flex w-full items-center justify-between font-medium py-2 px-2 rounded-md hover:bg-accent"
            >
              <span>{t('gettingStarted')}</span>
              <ChevronDown 
                className={cn(
                  "h-4 w-4 transition-transform",
                  openDropdowns.gettingStarted && "rotate-180"
                )}
              />
            </button>
            {openDropdowns.gettingStarted && (
              <div className="pl-4 mt-2 space-y-2">
                <Link 
                  href="/" 
                  className="block py-2 px-2 rounded-md hover:bg-accent text-sm"
                >
                  <div className="font-medium">shadcn/ui</div>
                  <p className="text-xs text-muted-foreground">
                    Beautifully designed components built with Radix UI and Tailwind CSS.
                  </p>
                </Link>
                <Link 
                  href="/docs" 
                  className="block py-2 px-2 rounded-md hover:bg-accent text-sm"
                >
                  <div className="font-medium">Introduction</div>
                  <p className="text-xs text-muted-foreground">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </p>
                </Link>
                <Link 
                  href="/docs/installation" 
                  className="block py-2 px-2 rounded-md hover:bg-accent text-sm"
                >
                  <div className="font-medium">Installation</div>
                  <p className="text-xs text-muted-foreground">
                    How to install dependencies and structure your app.
                  </p>
                </Link>
                <Link 
                  href="/docs/primitives/typography" 
                  className="block py-2 px-2 rounded-md hover:bg-accent text-sm"
                >
                  <div className="font-medium">Typography</div>
                  <p className="text-xs text-muted-foreground">
                    Styles for headings, paragraphs, lists...etc
                  </p>
                </Link>
              </div>
            )}
          </div>

          {/* Components Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('components')}
              className="flex w-full items-center justify-between font-medium py-2 px-2 rounded-md hover:bg-accent"
            >
              <span>{t('components')}</span>
              <ChevronDown 
                className={cn(
                  "h-4 w-4 transition-transform",
                  openDropdowns.components && "rotate-180"
                )}
              />
            </button>
            {openDropdowns.components && (
              <div className="pl-4 mt-2 space-y-2">
                {components.map((component) => (
                  <Link
                    key={component.title}
                    href={component.href}
                    className="block py-2 px-2 rounded-md hover:bg-accent text-sm"
                  >
                    <div className="font-medium">{component.title}</div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {component.description}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Simple Links */}
          <Link href="/docs" className="font-medium py-2 px-2 rounded-md hover:bg-accent">
            {t('documentation')}
          </Link>
          <Link href="/nosotros" className="font-medium py-2 px-2 rounded-md hover:bg-accent">
            {t('nosotros')}
          </Link>
          <Link href="/eventos" className="font-medium py-2 px-2 rounded-md hover:bg-accent">
            {t('eventos')}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 