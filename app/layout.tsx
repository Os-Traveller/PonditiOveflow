import React from 'react';
import './globals.css';
import { Roboto } from 'next/font/google';
import { ClientOnly } from '@/components/shared/clientOnly';
import { TopBar } from '@/components/top_bar/topBar';

const font = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'Ponditi-Overflow',
  description: 'Ponditi-Overflow',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`${font.className} bg-white grid grid-cols-5 grid-rows-[auto_1fr] h-screen overflow-hidden`}
      >
        <header className='col-span-5'>
          <ClientOnly>
            <TopBar />
          </ClientOnly>
        </header>
        <section className=''>hi</section>
        <section className='col-span-3 pb-3'>
          <section className='bg-gray-100 rounded-lg h-full padding'>
            {children}
          </section>
        </section>
        <section className=''></section>
      </body>
    </html>
  );
}
