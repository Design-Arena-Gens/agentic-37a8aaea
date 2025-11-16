"use client";
import Link from 'next/link';
import { chapters } from '@/data/gita';
import { useI18n } from '@/lib/i18n';

export default function ChaptersPage() {
  const t = useI18n();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('chapters')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {chapters.map((c) => (
          <Link key={c.number} href={`/chapters/${c.number}`} className="card hover:bg-white/10 transition-colors">
            <div className="flex items-start gap-3">
              <div className="badge">{t('chapter')} {c.number}</div>
              <div>
                <h3 className="font-semibold">{c.titles.en}</h3>
                <p className="text-sm text-white/80 mt-1 line-clamp-3">{c.summary.en}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
