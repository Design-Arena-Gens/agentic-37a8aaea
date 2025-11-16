"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { chapters } from '@/data/gita';
import { SectionView } from '@/components/SectionView';
import { useI18n } from '@/lib/i18n';

export default function ChapterDetailPage() {
  const { chapter } = useParams();
  const num = Number(chapter);
  const c = chapters.find((x) => x.number === num);
  const t = useI18n();

  if (!c) {
    return (
      <div className="space-y-4">
        <p className="text-white/80">{t('notFound')}</p>
        <Link className="btn-ghost" href="/chapters">? {t('backToChapters')}</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t('chapter')} {c.number}: {c.titles.en}</h1>
        <Link className="btn-ghost" href="/chapters">? {t('backToChapters')}</Link>
      </div>
      <p className="text-white/80">{c.summary.en}</p>

      <div className="grid grid-cols-1 gap-4">
        {c.sections.map((s) => (
          <SectionView key={s.id} chapter={c.number} section={s} />
        ))}
      </div>
    </div>
  );
}
