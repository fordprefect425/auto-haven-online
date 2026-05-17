import { useCallback, useEffect, useState } from 'react';

// Picks the best available voice for Kannada, falling back to Hindi, then default.
function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  if (voices.length === 0) return null;
  const kn = voices.find(v => v.lang === 'kn-IN') ?? voices.find(v => v.lang.startsWith('kn'));
  if (kn) return kn;
  const hi = voices.find(v => v.lang === 'hi-IN') ?? voices.find(v => v.lang.startsWith('hi'));
  if (hi) return hi;
  return null;
}

export function useTTS() {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if (!supported) return;
    const loadVoices = () => setVoice(pickVoice(window.speechSynthesis.getVoices()));
    loadVoices();
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
  }, [supported]);

  const speak = useCallback((text: string) => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = voice?.lang ?? 'kn-IN';
    if (voice) u.voice = voice;
    u.rate = 0.85;
    u.pitch = 1;
    window.speechSynthesis.speak(u);
  }, [supported, voice]);

  return { speak, supported };
}
