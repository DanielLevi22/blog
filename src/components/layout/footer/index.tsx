import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
    return (
        <footer className="border-t border-white/10">
          <div className="max-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-6">
              <div className="flex md:flex-row  gap-8 py-8 justify-between">
                <Logo />

                <nav className="flex flex-col md:flex-row gap-4 items-center text-sm text-blue-100">
                  <Link href="/termos-de-uso" className=" hover:text-blue-200">Termos de uso</Link>
                  <Link href="/politica-de-privacidade" className=" hover:text-blue-200">Política de privacidade</Link>
                  <Link href="/feedback" className=" hover:text-blue-200">Feedback</Link>
                </nav>
              </div>
            </div>
          </div>
            
        </footer>
    )
}