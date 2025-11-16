"use client";
import { useEffect, useRef, useState } from 'react';
import { createTanpura, Tanpura } from '@/lib/tanpura';
import { useI18n } from '@/lib/i18n';

export function TanpuraControls() {
  const t = useI18n();
  const tanpuraRef = useRef<Tanpura | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [pitch, setPitch] = useState(220); // A3 as Sa
  const [volume, setVolume] = useState(0.08);

  useEffect(() => {
    return () => {
      tanpuraRef.current?.stop();
    };
  }, []);

  const toggle = async () => {
    if (!enabled) {
      tanpuraRef.current = await createTanpura({ baseHz: pitch, volume });
      tanpuraRef.current.start();
      setEnabled(true);
    } else {
      tanpuraRef.current?.stop();
      tanpuraRef.current = null;
      setEnabled(false);
    }
  };

  useEffect(() => {
    tanpuraRef.current?.setBaseHz(pitch);
  }, [pitch]);
  useEffect(() => {
    tanpuraRef.current?.setVolume(volume);
  }, [volume]);

  return (
    <div className="flex items-center gap-2">
      <button onClick={toggle} className={enabled ? 'btn-primary' : 'btn-ghost'}>
        {enabled ? t('tanpuraOn') : t('tanpuraOff')}
      </button>
      <label className="text-xs opacity-70">{t('pitch')}: {pitch}Hz</label>
      <input type="range" min={170} max={300} value={pitch} onChange={(e) => setPitch(Number(e.target.value))} />
      <label className="text-xs opacity-70">{t('volume')}</label>
      <input type="range" min={0} max={0.2} step={0.005} value={volume} onChange={(e) => setVolume(Number(e.target.value))} />
    </div>
  );
}
