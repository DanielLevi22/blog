import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants/nav-links";
import { ActiveLink } from "./active-link";
import { Logo } from "@/components/logo";

export function Header() {

    return (
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 ls:px-8">              
            <div className="flex h-16 items-center justify-between">
                <Logo />
                <nav className="flex items-center gap-6">
                    {NAV_LINKS.map((link) => (
                      <ActiveLink key={link.href} href={link.href} label={link.label} />
                    ))}
                  <Button asChild variant="secondary">
                    <Link href="/comecar">Começar</Link>
                  </Button>
                </nav>
              </div>
            </div>
        </header>
    )
}