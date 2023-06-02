import React from 'react';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Navbar } from '@/components/navbar/navbar';

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
        className={`${font.className} bg-blue-50 relative overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
