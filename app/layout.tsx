import type { Metadata } from 'next';
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'S. Lee Ward | Portfolio',
  description: 'Portfolio of S. Lee Ward, a tech executive with businesses in AI/ML, cyber security, and teaching programming.',
};

export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <body className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </body>
        </html>
      );
}