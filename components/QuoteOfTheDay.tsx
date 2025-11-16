"use client";
import { getQuoteForDate } from '@/data/quotes';
import { useI18n } from '@/lib/i18n';

export function QuoteOfTheDay() {
  const today = new Date();
  const t = useI18n();
  const quote = getQuoteForDate(today);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{t('todaysQuote')}</h3>
        <span className="badge">{today.toLocaleDateString()}</span>
      </div>
      <p className="text-lg">?{quote.text}?</p>
      <p className="text-sm text-white/70">? {quote.attrib}</p>
    </div>
  );
}
