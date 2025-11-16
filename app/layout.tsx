import './globals.css';
import type { Metadata } from 'next';
import { LanguageProvider } from '@/lib/i18n';
import { clsx } from 'clsx';

export const metadata: Metadata = {
  title: 'Gita Essence ? Multilingual Read & Listen',
  description: 'Bhagavad Gita, chapter-wise, brief + narration with scenarios, images, and tanpura drone. Multilingual.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx('min-h-screen antialiased')}>        
        <LanguageProvider>
          <header className="border-b border-white/10">
            <div className="container flex items-center justify-between py-4">
              <a href="/" className="text-lg font-semibold">Gita Essence</a>
              <nav className="flex items-center gap-2 text-sm">
                <a className="btn-ghost" href="/chapters">Chapters</a>
                <a className="btn-ghost" href="/about">About</a>
              </nav>
            </div>
          </header>
          <main className="container py-8">{children}</main>
          <footer className="border-t border-white/10 mt-8">
            <div className="container text-xs text-white/60 py-6">
              ? {new Date().getFullYear()} Gita Essence. For educational and literary appreciation.
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
