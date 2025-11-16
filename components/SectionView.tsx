"use client";
import { useMemo, useRef, useState } from 'react';
import type { GitaSection } from '@/data/gita';
import { speakText, stopSpeech, pickVoiceForLang } from '@/lib/tts';
import { useI18n } from '@/lib/i18n';

export function SectionView({ chapter, section }: { chapter: number; section: GitaSection }) {
  const t = useI18n();
  const [playing, setPlaying] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  const narration = useMemo(() => {
    const lang = t.lang();
    const brief = section.brief[lang] ?? section.brief.en;
    const scenario = section.scenario[lang] ?? section.scenario.en;
    return `${brief}\n\n${t('scenario')}: ${scenario}`;
  }, [section, t]);

  const onPlay = () => {
    if (playing) {
      stopSpeech();
      setPlaying(false);
      return;
    }
    const voice = pickVoiceForLang(t.lang());
    utterRef.current = speakText(narration, voice, t.lang());
    setPlaying(true);
    utterRef.current.onend = () => setPlaying(false);
    utterRef.current.onerror = () => setPlaying(false);
  };

  const lang = t.lang();
  const title = section.title[lang] ?? section.title.en;

  return (
    <article className="card">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">{t('section')} {section.id}: {title}</h3>
        <button onClick={onPlay} className={playing ? 'btn-primary' : 'btn-ghost'}>
          {playing ? t('stopNarration') : t('playNarration')}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:col-span-2 space-y-2">
          <p className="text-white/90">
            <strong>{t('brief')}:</strong> {section.brief[lang] ?? section.brief.en}
          </p>
          <p className="text-white/80 text-sm leading-relaxed">
            <strong>{t('scenario')}:</strong> {section.scenario[lang] ?? section.scenario.en}
          </p>
          <div className="space-y-1">
            {section.verses.map((v) => (
              <div key={v.num} className="text-sm">
                <span className="badge mr-2">{t('verse')} {v.num}</span>
                <span>{v.text[lang] ?? v.text.en}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <img src={section.image ?? '/images/battlefield.svg'} alt="illustration" className="rounded-lg border border-white/10" />
        </div>
      </div>
    </article>
  );
}
