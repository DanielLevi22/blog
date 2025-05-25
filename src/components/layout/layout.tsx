import { Inter, PT_Sans_Caption } from 'next/font/google';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CallToAction } from '@/templates/landing-page/sections';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-sans',
});

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
    className={`${ptSansCaption.className} ${inter.className} relative flex min-h-screen flex-col bg-gray-700 font-inter`}
    >
      <Header />
      <main className="flex-1 flex flex-col mt-10 mb-12">
        {children}
      </main>
      <CallToAction />
      <Footer />
  
    </div>
  );
}