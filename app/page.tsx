"use client";
import Link from 'next/link';
import { LanguageSelector, useI18n } from '@/lib/i18n';
import { QuoteOfTheDay } from '@/components/QuoteOfTheDay';
import { TanpuraControls } from '@/components/TanpuraControls';

export default function HomePage() {
  const t = useI18n();
  return (
    <div className="space-y-8">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">{t('title')}</h1>
          <p className="text-white/80 leading-relaxed">{t('subtitle')}</p>
          <div className="flex gap-3">
            <Link href="/chapters" className="btn-primary">{t('browseChapters')}</Link>
            <a href="#daily-quote" className="btn-ghost">{t('todaysQuote')}</a>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <LanguageSelector />
            <TanpuraControls />
          </div>
        </div>
        <div className="card">
          <img src="/images/krishna-arjuna.svg" alt="Krishna and Arjuna" className="w-full h-auto" />
        </div>
      </section>

      <section id="daily-quote" className="card">
        <QuoteOfTheDay />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <h3 className="font-semibold mb-1">{t('readable')}</h3>
          <p className="text-sm text-white/80">{t('readableDesc')}</p>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-1">{t('audio')}</h3>
          <p className="text-sm text-white/80">{t('audioDesc')}</p>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-1">{t('secular')}</h3>
          <p className="text-sm text-white/80">{t('secularDesc')}</p>
        </div>
      </section>
    </div>
  );
}
