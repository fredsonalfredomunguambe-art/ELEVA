import type {Metadata} from 'next';
import { Manrope, Fraunces } from "next/font/google";
import './globals.css';

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: 'Eleva | O Motor do Seu Website',
  description: 'Transformamos websites fracos em ativos digitais profissionais através de design metódico, motion sofisticado e copy de conversão.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={`${manrope.variable} ${fraunces.variable} bg-[#121110] font-sans antialiased overflow-x-hidden`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
