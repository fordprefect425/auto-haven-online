import type { KannadaWord } from '@/types/kannada';

export const words: KannadaWord[] = [
  // Difficulty 1 — uses basic vowels + common consonants
  { id: 'word-mane', kannada: 'ಮನೆ', romanization: 'mane', meaning: 'house', letterIds: ['ma', 'na', 'e'], groupIds: ['labial', 'dental', 'vowels-extended'], difficulty: 1, imageEmoji: '🏠' },
  { id: 'word-neeru', kannada: 'ನೀರು', romanization: 'neeru', meaning: 'water', letterIds: ['na', 'ii', 'ra', 'u'], groupIds: ['dental', 'vowels-basic', 'semivowel-sibilant'], difficulty: 1, imageEmoji: '💧' },
  { id: 'word-haalu', kannada: 'ಹಾಲು', romanization: 'haalu', meaning: 'milk', letterIds: ['ha', 'aa', 'la', 'u'], groupIds: ['semivowel-sibilant', 'vowels-basic'], difficulty: 1, imageEmoji: '🥛' },
  { id: 'word-mara', kannada: 'ಮರ', romanization: 'mara', meaning: 'tree', letterIds: ['ma', 'ra', 'a'], groupIds: ['labial', 'semivowel-sibilant', 'vowels-basic'], difficulty: 1, imageEmoji: '🌳' },
  { id: 'word-kannu', kannada: 'ಕಣ್ಣು', romanization: 'kannu', meaning: 'eye', letterIds: ['ka', 'na_retro', 'u'], groupIds: ['velar', 'retroflex', 'vowels-basic'], difficulty: 1, imageEmoji: '👁️' },
  { id: 'word-kaalu', kannada: 'ಕಾಲು', romanization: 'kaalu', meaning: 'leg / foot', letterIds: ['ka', 'aa', 'la', 'u'], groupIds: ['velar', 'vowels-basic', 'semivowel-sibilant'], difficulty: 1, imageEmoji: '🦵' },
  { id: 'word-tande', kannada: 'ತಂದೆ', romanization: 'tande', meaning: 'father', letterIds: ['ta', 'da', 'e'], groupIds: ['dental', 'vowels-extended'], difficulty: 1, imageEmoji: '👨' },
  { id: 'word-amma', kannada: 'ಅಮ್ಮ', romanization: 'amma', meaning: 'mother', letterIds: ['a', 'ma'], groupIds: ['vowels-basic', 'labial'], difficulty: 1, imageEmoji: '👩' },
  { id: 'word-naayi', kannada: 'ನಾಯಿ', romanization: 'naayi', meaning: 'dog', letterIds: ['na', 'aa', 'ya', 'i'], groupIds: ['dental', 'vowels-basic', 'semivowel-sibilant'], difficulty: 1, imageEmoji: '🐕' },
  { id: 'word-pakshi', kannada: 'ಪಕ್ಷಿ', romanization: 'pakshi', meaning: 'bird', letterIds: ['pa', 'ka', 'sha_retro', 'i'], groupIds: ['labial', 'velar', 'semivowel-sibilant', 'vowels-basic'], difficulty: 1, imageEmoji: '🐦' },

  // Difficulty 2 — slightly more complex
  { id: 'word-moggu', kannada: 'ಮೊಗ್ಗು', romanization: 'moggu', meaning: 'flower bud', letterIds: ['ma', 'o', 'ga', 'u'], groupIds: ['labial', 'vowels-extended', 'velar', 'vowels-basic'], difficulty: 2, imageEmoji: '🌸' },
  { id: 'word-huuvu', kannada: 'ಹೂವು', romanization: 'huuvu', meaning: 'flower', letterIds: ['ha', 'uu', 'va', 'u'], groupIds: ['semivowel-sibilant', 'vowels-basic'], difficulty: 2, imageEmoji: '🌺' },
  { id: 'word-raste', kannada: 'ರಸ್ತೆ', romanization: 'raste', meaning: 'road', letterIds: ['ra', 'sa', 'ta', 'e'], groupIds: ['semivowel-sibilant', 'dental', 'vowels-extended'], difficulty: 2, imageEmoji: '🛣️' },
  { id: 'word-kaaya', kannada: 'ಕಾಯಿ', romanization: 'kaayi', meaning: 'raw fruit / vegetable', letterIds: ['ka', 'aa', 'ya', 'i'], groupIds: ['velar', 'vowels-basic', 'semivowel-sibilant'], difficulty: 2, imageEmoji: '🥦' },
  { id: 'word-shaale', kannada: 'ಶಾಲೆ', romanization: 'shaale', meaning: 'school', letterIds: ['sha', 'aa', 'la', 'e'], groupIds: ['semivowel-sibilant', 'vowels-basic', 'vowels-extended'], difficulty: 2, imageEmoji: '🏫' },
  { id: 'word-mannu', kannada: 'ಮಣ್ಣು', romanization: 'mannu', meaning: 'soil / earth', letterIds: ['ma', 'na_retro', 'u'], groupIds: ['labial', 'retroflex', 'vowels-basic'], difficulty: 2, imageEmoji: '🌍' },
  { id: 'word-gaali', kannada: 'ಗಾಳಿ', romanization: 'gaali', meaning: 'wind / air', letterIds: ['ga', 'aa', 'la_retro', 'i'], groupIds: ['velar', 'vowels-basic', 'semivowel-sibilant'], difficulty: 2, imageEmoji: '💨' },
  { id: 'word-dina', kannada: 'ದಿನ', romanization: 'dina', meaning: 'day', letterIds: ['da', 'i', 'na'], groupIds: ['dental', 'vowels-basic'], difficulty: 2, imageEmoji: '☀️' },
  { id: 'word-raatri', kannada: 'ರಾತ್ರಿ', romanization: 'raatri', meaning: 'night', letterIds: ['ra', 'aa', 'ta', 'ra', 'i'], groupIds: ['semivowel-sibilant', 'vowels-basic', 'dental'], difficulty: 2, imageEmoji: '🌙' },
  { id: 'word-halli', kannada: 'ಹಳ್ಳಿ', romanization: 'halli', meaning: 'village', letterIds: ['ha', 'la_retro', 'i'], groupIds: ['semivowel-sibilant', 'vowels-basic'], difficulty: 2, imageEmoji: '🏡' },

  // Difficulty 3 — more complex vocabulary
  { id: 'word-samaya', kannada: 'ಸಮಯ', romanization: 'samaya', meaning: 'time', letterIds: ['sa', 'ma', 'ya', 'a'], groupIds: ['semivowel-sibilant', 'labial', 'vowels-basic'], difficulty: 3, imageEmoji: '⏰' },
  { id: 'word-varsha', kannada: 'ವರ್ಷ', romanization: 'varsha', meaning: 'year / rain', letterIds: ['va', 'ra', 'sha_retro', 'a'], groupIds: ['semivowel-sibilant', 'vowels-basic'], difficulty: 3, imageEmoji: '🌧️' },
  { id: 'word-dharma', kannada: 'ಧರ್ಮ', romanization: 'dharma', meaning: 'duty / righteousness', letterIds: ['dha', 'ra', 'ma', 'a'], groupIds: ['dental', 'semivowel-sibilant', 'labial', 'vowels-basic'], difficulty: 3, imageEmoji: '⚖️' },
  { id: 'word-bhaashe', kannada: 'ಭಾಷೆ', romanization: 'bhaashe', meaning: 'language', letterIds: ['bha', 'aa', 'sha_retro', 'e'], groupIds: ['labial', 'vowels-basic', 'semivowel-sibilant', 'vowels-extended'], difficulty: 3, imageEmoji: '🗣️' },
  { id: 'word-jnaana', kannada: 'ಜ್ಞಾನ', romanization: 'jnaana', meaning: 'knowledge', letterIds: ['ja', 'nya', 'aa', 'na'], groupIds: ['palatal', 'vowels-basic', 'dental'], difficulty: 3, imageEmoji: '📚' },
  { id: 'word-snehita', kannada: 'ಸ್ನೇಹಿತ', romanization: 'snehita', meaning: 'friend', letterIds: ['sa', 'na', 'ha', 'i', 'ta'], groupIds: ['semivowel-sibilant', 'dental', 'labial', 'vowels-basic'], difficulty: 3, imageEmoji: '🤝' },
  { id: 'word-bhuumi', kannada: 'ಭೂಮಿ', romanization: 'bhuumi', meaning: 'earth / land', letterIds: ['bha', 'uu', 'ma', 'i'], groupIds: ['labial', 'vowels-basic'], difficulty: 3, imageEmoji: '🌍' },
  { id: 'word-chandra', kannada: 'ಚಂದ್ರ', romanization: 'chandra', meaning: 'moon', letterIds: ['cha', 'da', 'ra', 'a'], groupIds: ['palatal', 'dental', 'semivowel-sibilant', 'vowels-basic'], difficulty: 3, imageEmoji: '🌙' },
  { id: 'word-devaru', kannada: 'ದೇವರು', romanization: 'devaru', meaning: 'God', letterIds: ['da', 'ee', 'va', 'ra', 'u'], groupIds: ['dental', 'vowels-extended', 'semivowel-sibilant', 'vowels-basic'], difficulty: 3, imageEmoji: '🙏' },
  { id: 'word-aane', kannada: 'ಆನೆ', romanization: 'aane', meaning: 'elephant', letterIds: ['aa', 'na', 'e'], groupIds: ['vowels-basic', 'dental', 'vowels-extended'], difficulty: 1, imageEmoji: '🐘' },
];

export const wordMap = new Map(words.map(w => [w.id, w]));

export function getWordById(id: string) {
  return wordMap.get(id);
}

export function getWordsByDifficulty(difficulty: 1 | 2 | 3) {
  return words.filter(w => w.difficulty === difficulty);
}
