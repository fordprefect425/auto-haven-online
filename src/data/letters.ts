import type { KannadaLetter } from '@/types/kannada';

export const letters: KannadaLetter[] = [
  // ── BASIC VOWELS ──────────────────────────────────────────────
  {
    id: 'a', kannada: 'ಅ', romanization: 'a', type: 'vowel',
    groupId: 'vowels-basic', groupName: 'Basic Vowels (ಸ್ವರ)', orderInGroup: 1,
    pronunciationHint: "Short 'a' — like the 'u' in 'cup'",
    anchorWords: [
      { kannada: 'ಅಮ್ಮ', romanization: 'amma', meaning: 'mother', targetLetterIndex: 0, position: 'initial', imageEmoji: '👩' },
      { kannada: 'ಅಣ್ಣ', romanization: 'anna', meaning: 'elder brother', targetLetterIndex: 0, position: 'initial', imageEmoji: '👦' },
      { kannada: 'ಅಕ್ಕ', romanization: 'akka', meaning: 'elder sister', targetLetterIndex: 0, position: 'initial', imageEmoji: '👧' },
    ],
    exampleWords: [
      { kannada: 'ಅಮ್ಮ', romanization: 'amma', meaning: 'mother' },
      { kannada: 'ಅಕ್ಕ', romanization: 'akka', meaning: 'elder sister' },
    ],
  },
  {
    id: 'aa', kannada: 'ಆ', romanization: 'aa', type: 'vowel',
    groupId: 'vowels-basic', groupName: 'Basic Vowels (ಸ್ವರ)', orderInGroup: 2,
    pronunciationHint: "Long 'aa' — like 'a' in 'father', held longer",
    anchorWords: [
      { kannada: 'ಆನೆ', romanization: 'aane', meaning: 'elephant', targetLetterIndex: 0, position: 'initial', imageEmoji: '🐘' },
      { kannada: 'ಆಕಾಶ', romanization: 'aakaasha', meaning: 'sky', targetLetterIndex: 0, position: 'initial', imageEmoji: '🌤️' },
      { kannada: 'ಆಟ', romanization: 'aata', meaning: 'play / game', targetLetterIndex: 0, position: 'initial', imageEmoji: '🎮' },
    ],
    exampleWords: [
      { kannada: 'ಆನೆ', romanization: 'aane', meaning: 'elephant' },
      { kannada: 'ಆಕಾಶ', romanization: 'aakaasha', meaning: 'sky' },
    ],
  },
  {
    id: 'i', kannada: 'ಇ', romanization: 'i', type: 'vowel',
    groupId: 'vowels-basic', groupName: 'Basic Vowels (ಸ್ವರ)', orderInGroup: 3,
    pronunciationHint: "Short 'i' — like 'i' in 'bit'",
    anchorWords: [
      { kannada: 'ಇಲಿ', romanization: 'ili', meaning: 'mouse / rat', targetLetterIndex: 0, position: 'initial', imageEmoji: '🐭' },
      { kannada: 'ಇಲ್ಲ', romanization: 'illa', meaning: 'no / not there', targetLetterIndex: 0, position: 'initial', imageEmoji: '❌' },
      { kannada: 'ಇಂದು', romanization: 'indu', meaning: 'today', targetLetterIndex: 0, position: 'initial', imageEmoji: '📅' },
    ],
    exampleWords: [
      { kannada: 'ಇಲಿ', romanization: 'ili', meaning: 'mouse' },
      { kannada: 'ಇಂದು', romanization: 'indu', meaning: 'today' },
    ],
  },
  {
    id: 'ii', kannada: 'ಈ', romanization: 'ii', type: 'vowel',
    groupId: 'vowels-basic', groupName: 'Basic Vowels (ಸ್ವರ)', orderInGroup: 4,
    pronunciationHint: "Long 'ee' — like 'ee' in 'feet', held longer",
    anchorWords: [
      { kannada: 'ಈಜು', romanization: 'iiju', meaning: 'swimming', targetLetterIndex: 0, position: 'initial', imageEmoji: '🏊' },
      { kannada: 'ಈ', romanization: 'ii', meaning: 'this', targetLetterIndex: 0, position: 'initial', imageEmoji: '👆' },
      { kannada: 'ಈಗ', romanization: 'iiga', meaning: 'now', targetLetterIndex: 0, position: 'initial', imageEmoji: '⏰' },
    ],
    exampleWords: [
      { kannada: 'ಈಗ', romanization: 'iiga', meaning: 'now' },
      { kannada: 'ಈಜು', romanization: 'iiju', meaning: 'swimming' },
    ],
  },
  {
    id: 'u', kannada: 'ಉ', romanization: 'u', type: 'vowel',
    groupId: 'vowels-basic', groupName: 'Basic Vowels (ಸ್ವರ)', orderInGroup: 5,
    pronunciationHint: "Short 'u' — like 'oo' in 'book', short",
    anchorWords: [
      { kannada: 'ಉಪ್ಪು', romanization: 'uppu', meaning: 'salt', targetLetterIndex: 0, position: 'initial', imageEmoji: '🧂' },
      { kannada: 'ಉಪ್ಪಿಟ್ಟು', romanization: 'uppittu', meaning: 'upma (dish)', targetLetterIndex: 0, position: 'initial', imageEmoji: '🍲' },
      { kannada: 'ಉಗುರು', romanization: 'uguru', meaning: 'nail (finger)', targetLetterIndex: 0, position: 'initial', imageEmoji: '💅' },
    ],
    exampleWords: [
      { kannada: 'ಉಪ್ಪು', romanization: 'uppu', meaning: 'salt' },
      { kannada: 'ಉಗುರು', romanization: 'uguru', meaning: 'fingernail' },
    ],
  },
  {
    id: 'uu', kannada: 'ಊ', romanization: 'uu', type: 'vowel',
    groupId: 'vowels-basic', groupName: 'Basic Vowels (ಸ್ವರ)', orderInGroup: 6,
    pronunciationHint: "Long 'oo' — like 'oo' in 'food', held longer",
    anchorWords: [
      { kannada: 'ಊರು', romanization: 'uuru', meaning: 'village / hometown', targetLetterIndex: 0, position: 'initial', imageEmoji: '🏡' },
      { kannada: 'ಊಟ', romanization: 'uuta', meaning: 'meal / food', targetLetterIndex: 0, position: 'initial', imageEmoji: '🍽️' },
      { kannada: 'ಊದು', romanization: 'uudu', meaning: 'to blow', targetLetterIndex: 0, position: 'initial', imageEmoji: '💨' },
    ],
    exampleWords: [
      { kannada: 'ಊರು', romanization: 'uuru', meaning: 'village / hometown' },
      { kannada: 'ಊಟ', romanization: 'uuta', meaning: 'meal' },
    ],
  },

  // ── EXTENDED VOWELS ───────────────────────────────────────────
  {
    id: 'ru', kannada: 'ಋ', romanization: 'ru', type: 'vowel',
    groupId: 'vowels-extended', groupName: 'Extended Vowels', orderInGroup: 1,
    pronunciationHint: "Vocalic 'r' — a rolled r sound that acts as a vowel",
    anchorWords: [
      { kannada: 'ಋಷಿ', romanization: 'rushi', meaning: 'sage / saint', targetLetterIndex: 0, position: 'initial', imageEmoji: '🧘' },
      { kannada: 'ಋಣ', romanization: 'runa', meaning: 'debt / gratitude', targetLetterIndex: 0, position: 'initial', imageEmoji: '🙏' },
      { kannada: 'ಋತು', romanization: 'rutu', meaning: 'season', targetLetterIndex: 0, position: 'initial', imageEmoji: '🌸' },
    ],
    exampleWords: [
      { kannada: 'ಋಷಿ', romanization: 'rushi', meaning: 'sage' },
      { kannada: 'ಋತು', romanization: 'rutu', meaning: 'season' },
    ],
  },
  {
    id: 'e', kannada: 'ಎ', romanization: 'e', type: 'vowel',
    groupId: 'vowels-extended', groupName: 'Extended Vowels', orderInGroup: 2,
    pronunciationHint: "Short 'e' — like 'e' in 'bed'",
    anchorWords: [
      { kannada: 'ಎಲೆ', romanization: 'ele', meaning: 'leaf', targetLetterIndex: 0, position: 'initial', imageEmoji: '🍃' },
      { kannada: 'ಎಲ್ಲಿ', romanization: 'elli', meaning: 'where?', targetLetterIndex: 0, position: 'initial', imageEmoji: '❓' },
      { kannada: 'ಎಣ್ಣೆ', romanization: 'enne', meaning: 'oil', targetLetterIndex: 0, position: 'initial', imageEmoji: '🫙' },
    ],
    exampleWords: [
      { kannada: 'ಎಲೆ', romanization: 'ele', meaning: 'leaf' },
      { kannada: 'ಎಣ್ಣೆ', romanization: 'enne', meaning: 'oil' },
    ],
  },
  {
    id: 'ee', kannada: 'ಏ', romanization: 'ee', type: 'vowel',
    groupId: 'vowels-extended', groupName: 'Extended Vowels', orderInGroup: 3,
    pronunciationHint: "Long 'ay' — like 'a' in 'late'",
    anchorWords: [
      { kannada: 'ಏನು', romanization: 'eenu', meaning: 'what?', targetLetterIndex: 0, position: 'initial', imageEmoji: '❓' },
      { kannada: 'ಏಳು', romanization: 'eelu', meaning: 'seven / get up', targetLetterIndex: 0, position: 'initial', imageEmoji: '7️⃣' },
      { kannada: 'ಏಕೆ', romanization: 'eeke', meaning: 'why?', targetLetterIndex: 0, position: 'initial', imageEmoji: '🤔' },
    ],
    exampleWords: [
      { kannada: 'ಏನು', romanization: 'eenu', meaning: 'what?' },
      { kannada: 'ಏಳು', romanization: 'eelu', meaning: 'seven' },
    ],
  },
  {
    id: 'ai', kannada: 'ಐ', romanization: 'ai', type: 'vowel',
    groupId: 'vowels-extended', groupName: 'Extended Vowels', orderInGroup: 4,
    pronunciationHint: "Diphthong — like 'i' in 'kite'",
    anchorWords: [
      { kannada: 'ಐದು', romanization: 'aidu', meaning: 'five', targetLetterIndex: 0, position: 'initial', imageEmoji: '5️⃣' },
      { kannada: 'ಐಸ್ ಕ್ರೀಂ', romanization: 'ice cream', meaning: 'ice cream', targetLetterIndex: 0, position: 'initial', imageEmoji: '🍦' },
      { kannada: 'ಐಶ್ವರ್ಯ', romanization: 'aishwarya', meaning: 'wealth / prosperity', targetLetterIndex: 0, position: 'initial', imageEmoji: '✨' },
    ],
    exampleWords: [
      { kannada: 'ಐದು', romanization: 'aidu', meaning: 'five' },
      { kannada: 'ಐಶ್ವರ್ಯ', romanization: 'aishwarya', meaning: 'wealth' },
    ],
  },
  {
    id: 'o', kannada: 'ಒ', romanization: 'o', type: 'vowel',
    groupId: 'vowels-extended', groupName: 'Extended Vowels', orderInGroup: 5,
    pronunciationHint: "Short 'o' — like 'o' in 'hot'",
    anchorWords: [
      { kannada: 'ಒಳ್ಳೆ', romanization: 'olle', meaning: 'good', targetLetterIndex: 0, position: 'initial', imageEmoji: '👍' },
      { kannada: 'ಒಂದು', romanization: 'ondu', meaning: 'one', targetLetterIndex: 0, position: 'initial', imageEmoji: '1️⃣' },
      { kannada: 'ಒಡಲು', romanization: 'odalu', meaning: 'body / belly', targetLetterIndex: 0, position: 'initial', imageEmoji: '🫀' },
    ],
    exampleWords: [
      { kannada: 'ಒಂದು', romanization: 'ondu', meaning: 'one' },
      { kannada: 'ಒಳ್ಳೆ', romanization: 'olle', meaning: 'good' },
    ],
  },
  {
    id: 'oo', kannada: 'ಓ', romanization: 'oo', type: 'vowel',
    groupId: 'vowels-extended', groupName: 'Extended Vowels', orderInGroup: 6,
    pronunciationHint: "Long 'oo' — like 'o' in 'go'",
    anchorWords: [
      { kannada: 'ಓಡು', romanization: 'oodu', meaning: 'to run', targetLetterIndex: 0, position: 'initial', imageEmoji: '🏃' },
      { kannada: 'ಓದು', romanization: 'oodu', meaning: 'to read', targetLetterIndex: 0, position: 'initial', imageEmoji: '📖' },
      { kannada: 'ಓಣಿ', romanization: 'ooni', meaning: 'lane / street', targetLetterIndex: 0, position: 'initial', imageEmoji: '🏘️' },
    ],
    exampleWords: [
      { kannada: 'ಓದು', romanization: 'oodu', meaning: 'to read' },
      { kannada: 'ಓಡು', romanization: 'oodu', meaning: 'to run' },
    ],
  },
  {
    id: 'au', kannada: 'ಔ', romanization: 'au', type: 'vowel',
    groupId: 'vowels-extended', groupName: 'Extended Vowels', orderInGroup: 7,
    pronunciationHint: "Diphthong — like 'ow' in 'cow'",
    anchorWords: [
      { kannada: 'ಔಷಧ', romanization: 'aushadha', meaning: 'medicine', targetLetterIndex: 0, position: 'initial', imageEmoji: '💊' },
      { kannada: 'ಔತಣ', romanization: 'autana', meaning: 'feast / banquet', targetLetterIndex: 0, position: 'initial', imageEmoji: '🍱' },
      { kannada: 'ಔದಾರ್ಯ', romanization: 'audaarya', meaning: 'generosity', targetLetterIndex: 0, position: 'initial', imageEmoji: '🎁' },
    ],
    exampleWords: [
      { kannada: 'ಔಷಧ', romanization: 'aushadha', meaning: 'medicine' },
      { kannada: 'ಔತಣ', romanization: 'autana', meaning: 'feast' },
    ],
  },
  {
    id: 'am', kannada: 'ಅಂ', romanization: 'am', type: 'vowel',
    groupId: 'vowels-extended', groupName: 'Extended Vowels', orderInGroup: 8,
    pronunciationHint: "Anusvara — nasal 'am', like humming 'ng' at end",
    anchorWords: [
      { kannada: 'ಅಂಗಡಿ', romanization: 'angadi', meaning: 'shop', targetLetterIndex: 0, position: 'initial', imageEmoji: '🏪' },
      { kannada: 'ಅಂಬ', romanization: 'amba', meaning: 'mother (reverential)', targetLetterIndex: 0, position: 'initial', imageEmoji: '🙏' },
      { kannada: 'ಅಂಗ', romanization: 'anga', meaning: 'body part / organ', targetLetterIndex: 0, position: 'initial', imageEmoji: '🫀' },
    ],
    exampleWords: [
      { kannada: 'ಅಂಗಡಿ', romanization: 'angadi', meaning: 'shop' },
      { kannada: 'ಅಂಬ', romanization: 'amba', meaning: 'mother' },
    ],
  },
  {
    id: 'ah', kannada: 'ಅಃ', romanization: 'ah', type: 'vowel',
    groupId: 'vowels-extended', groupName: 'Extended Vowels', orderInGroup: 9,
    pronunciationHint: "Visarga — a breathy release at end, like a soft 'h'",
    anchorWords: [
      { kannada: 'ದುಃಖ', romanization: 'dukkha', meaning: 'sorrow / sadness', targetLetterIndex: 1, position: 'medial', imageEmoji: '😢' },
      { kannada: 'ಸ್ವಃ', romanization: 'svah', meaning: 'heaven (Vedic)', targetLetterIndex: 1, position: 'final', imageEmoji: '✨' },
      { kannada: 'ಅಃ', romanization: 'ah', meaning: 'visarga vowel', targetLetterIndex: 0, position: 'initial', imageEmoji: '🔤' },
    ],
    exampleWords: [
      { kannada: 'ದುಃಖ', romanization: 'dukkha', meaning: 'sorrow' },
      { kannada: 'ಅಃ', romanization: 'ah', meaning: 'visarga marker' },
    ],
  },

  // ── VELAR STOPS (ಕ ವರ್ಗ) ────────────────────────────────────
  {
    id: 'ka', kannada: 'ಕ', romanization: 'ka', type: 'consonant',
    groupId: 'velar', groupName: 'Velar Stops (ಕ ವರ್ಗ)', orderInGroup: 1,
    pronunciationHint: "Like 'k' in 'skip' — unaspirated",
    anchorWords: [
      { kannada: 'ಕಮಲ', romanization: 'kamala', meaning: 'lotus', targetLetterIndex: 0, position: 'initial', imageEmoji: '🌸' },
      { kannada: 'ಕಾಲು', romanization: 'kaalu', meaning: 'leg / foot', targetLetterIndex: 0, position: 'initial', imageEmoji: '🦵' },
      { kannada: 'ಅಕ್ಕ', romanization: 'akka', meaning: 'elder sister', targetLetterIndex: 1, position: 'medial', imageEmoji: '👧' },
    ],
    exampleWords: [
      { kannada: 'ಕಮಲ', romanization: 'kamala', meaning: 'lotus' },
      { kannada: 'ಕಾಲು', romanization: 'kaalu', meaning: 'leg' },
    ],
    matras: ['ಕ', 'ಕಾ', 'ಕಿ', 'ಕೀ', 'ಕು', 'ಕೂ', 'ಕೆ', 'ಕೇ', 'ಕೈ', 'ಕೊ', 'ಕೋ', 'ಕೌ'],
  },
  {
    id: 'kha', kannada: 'ಖ', romanization: 'kha', type: 'consonant',
    groupId: 'velar', groupName: 'Velar Stops (ಕ ವರ್ಗ)', orderInGroup: 2,
    pronunciationHint: "Like 'k' with a puff of air — aspirated k",
    anchorWords: [
      { kannada: 'ಖಾಲಿ', romanization: 'khaali', meaning: 'empty / vacant', targetLetterIndex: 0, position: 'initial', imageEmoji: '📭' },
      { kannada: 'ಖಂಡ', romanization: 'khanda', meaning: 'piece / portion', targetLetterIndex: 0, position: 'initial', imageEmoji: '🍫' },
      { kannada: 'ಖುಷಿ', romanization: 'khushi', meaning: 'happiness', targetLetterIndex: 0, position: 'initial', imageEmoji: '😊' },
    ],
    exampleWords: [
      { kannada: 'ಖಾಲಿ', romanization: 'khaali', meaning: 'empty' },
      { kannada: 'ಖುಷಿ', romanization: 'khushi', meaning: 'happiness' },
    ],
  },
  {
    id: 'ga', kannada: 'ಗ', romanization: 'ga', type: 'consonant',
    groupId: 'velar', groupName: 'Velar Stops (ಕ ವರ್ಗ)', orderInGroup: 3,
    pronunciationHint: "Like 'g' in 'go' — voiced",
    anchorWords: [
      { kannada: 'ಗಾಳಿ', romanization: 'gaali', meaning: 'wind / air', targetLetterIndex: 0, position: 'initial', imageEmoji: '💨' },
      { kannada: 'ಗಿಡ', romanization: 'gida', meaning: 'plant / tree', targetLetterIndex: 0, position: 'initial', imageEmoji: '🌱' },
      { kannada: 'ಮಗ', romanization: 'maga', meaning: 'son', targetLetterIndex: 1, position: 'medial', imageEmoji: '👦' },
    ],
    exampleWords: [
      { kannada: 'ಗಾಳಿ', romanization: 'gaali', meaning: 'wind' },
      { kannada: 'ಗಿಡ', romanization: 'gida', meaning: 'plant' },
    ],
  },
  {
    id: 'gha', kannada: 'ಘ', romanization: 'gha', type: 'consonant',
    groupId: 'velar', groupName: 'Velar Stops (ಕ ವರ್ಗ)', orderInGroup: 4,
    pronunciationHint: "Like 'g' with a breathy release — voiced aspirated",
    anchorWords: [
      { kannada: 'ಘಂಟೆ', romanization: 'ghante', meaning: 'bell / hour', targetLetterIndex: 0, position: 'initial', imageEmoji: '🔔' },
      { kannada: 'ಘನ', romanization: 'ghana', meaning: 'solid / great', targetLetterIndex: 0, position: 'initial', imageEmoji: '🪨' },
      { kannada: 'ಘರ್ಜನೆ', romanization: 'gharjane', meaning: 'roar', targetLetterIndex: 0, position: 'initial', imageEmoji: '🦁' },
    ],
    exampleWords: [
      { kannada: 'ಘಂಟೆ', romanization: 'ghante', meaning: 'bell / hour' },
      { kannada: 'ಘನ', romanization: 'ghana', meaning: 'solid' },
    ],
  },
  {
    id: 'nga', kannada: 'ಙ', romanization: 'nga', type: 'consonant',
    groupId: 'velar', groupName: 'Velar Stops (ಕ ವರ್ಗ)', orderInGroup: 5,
    pronunciationHint: "Nasal at back of throat — like 'ng' in 'sing'",
    anchorWords: [
      { kannada: 'ಅಙ', romanization: 'anga', meaning: 'body (archaic)', targetLetterIndex: 1, position: 'final', imageEmoji: '🫀' },
      { kannada: 'ಸಂಙ', romanization: 'sanga', meaning: 'group (archaic)', targetLetterIndex: 1, position: 'final', imageEmoji: '👥' },
      { kannada: 'ಲಂಙ', romanization: 'langa', meaning: 'tail (archaic)', targetLetterIndex: 1, position: 'final', imageEmoji: '🐾' },
    ],
    exampleWords: [
      { kannada: 'ಅಙ', romanization: 'anga', meaning: 'body (archaic)' },
      { kannada: 'ಲಂಙ', romanization: 'langa', meaning: 'tail (archaic)' },
    ],
  },

  // ── PALATAL STOPS (ಚ ವರ್ಗ) ──────────────────────────────────
  {
    id: 'cha', kannada: 'ಚ', romanization: 'cha', type: 'consonant',
    groupId: 'palatal', groupName: 'Palatal Stops (ಚ ವರ್ಗ)', orderInGroup: 1,
    pronunciationHint: "Like 'ch' in 'chair' — unaspirated",
    anchorWords: [
      { kannada: 'ಚಂದ್ರ', romanization: 'chandra', meaning: 'moon', targetLetterIndex: 0, position: 'initial', imageEmoji: '🌙' },
      { kannada: 'ಚಹಾ', romanization: 'chaha', meaning: 'tea', targetLetterIndex: 0, position: 'initial', imageEmoji: '☕' },
      { kannada: 'ಚಾಕು', romanization: 'chaaku', meaning: 'knife', targetLetterIndex: 0, position: 'initial', imageEmoji: '🔪' },
    ],
    exampleWords: [
      { kannada: 'ಚಂದ್ರ', romanization: 'chandra', meaning: 'moon' },
      { kannada: 'ಚಹಾ', romanization: 'chaha', meaning: 'tea' },
    ],
  },
  {
    id: 'chha', kannada: 'ಛ', romanization: 'chha', type: 'consonant',
    groupId: 'palatal', groupName: 'Palatal Stops (ಚ ವರ್ಗ)', orderInGroup: 2,
    pronunciationHint: "Like 'ch' with a strong puff — aspirated ch",
    anchorWords: [
      { kannada: 'ಛತ್ರಿ', romanization: 'chhatri', meaning: 'umbrella', targetLetterIndex: 0, position: 'initial', imageEmoji: '☂️' },
      { kannada: 'ಛಾಯೆ', romanization: 'chhaaye', meaning: 'shadow / shade', targetLetterIndex: 0, position: 'initial', imageEmoji: '🌫️' },
      { kannada: 'ಛಲ', romanization: 'chhala', meaning: 'trick / deception', targetLetterIndex: 0, position: 'initial', imageEmoji: '🃏' },
    ],
    exampleWords: [
      { kannada: 'ಛತ್ರಿ', romanization: 'chhatri', meaning: 'umbrella' },
      { kannada: 'ಛಾಯೆ', romanization: 'chhaaye', meaning: 'shadow' },
    ],
  },
  {
    id: 'ja', kannada: 'ಜ', romanization: 'ja', type: 'consonant',
    groupId: 'palatal', groupName: 'Palatal Stops (ಚ ವರ್ಗ)', orderInGroup: 3,
    pronunciationHint: "Like 'j' in 'jump' — voiced",
    anchorWords: [
      { kannada: 'ಜಲ', romanization: 'jala', meaning: 'water', targetLetterIndex: 0, position: 'initial', imageEmoji: '💧' },
      { kannada: 'ಜನ', romanization: 'jana', meaning: 'people', targetLetterIndex: 0, position: 'initial', imageEmoji: '👥' },
      { kannada: 'ಮಜ', romanization: 'maja', meaning: 'fun / enjoyment', targetLetterIndex: 1, position: 'medial', imageEmoji: '🎉' },
    ],
    exampleWords: [
      { kannada: 'ಜಲ', romanization: 'jala', meaning: 'water' },
      { kannada: 'ಜನ', romanization: 'jana', meaning: 'people' },
    ],
  },
  {
    id: 'jha', kannada: 'ಝ', romanization: 'jha', type: 'consonant',
    groupId: 'palatal', groupName: 'Palatal Stops (ಚ ವರ್ಗ)', orderInGroup: 4,
    pronunciationHint: "Like 'j' with breathy release — voiced aspirated",
    anchorWords: [
      { kannada: 'ಝರಿ', romanization: 'jhari', meaning: 'stream / brook', targetLetterIndex: 0, position: 'initial', imageEmoji: '🏞️' },
      { kannada: 'ಝಣ', romanization: 'jhana', meaning: 'jingling sound', targetLetterIndex: 0, position: 'initial', imageEmoji: '🔔' },
      { kannada: 'ಝಂಕಾರ', romanization: 'jhankara', meaning: 'resonance / hum', targetLetterIndex: 0, position: 'initial', imageEmoji: '🎶' },
    ],
    exampleWords: [
      { kannada: 'ಝರಿ', romanization: 'jhari', meaning: 'stream' },
      { kannada: 'ಝಂಕಾರ', romanization: 'jhankara', meaning: 'resonance' },
    ],
  },
  {
    id: 'nya', kannada: 'ಞ', romanization: 'nya', type: 'consonant',
    groupId: 'palatal', groupName: 'Palatal Stops (ಚ ವರ್ಗ)', orderInGroup: 5,
    pronunciationHint: "Palatal nasal — like 'ny' in 'canyon'",
    anchorWords: [
      { kannada: 'ಜ್ಞಾನ', romanization: 'jnaana', meaning: 'knowledge / wisdom', targetLetterIndex: 1, position: 'medial', imageEmoji: '📚' },
      { kannada: 'ವಿಜ್ಞಾನ', romanization: 'vijnaana', meaning: 'science', targetLetterIndex: 2, position: 'medial', imageEmoji: '🔬' },
      { kannada: 'ಸಂಞ', romanization: 'sanya', meaning: 'sign (archaic)', targetLetterIndex: 1, position: 'final', imageEmoji: '✍️' },
    ],
    exampleWords: [
      { kannada: 'ಜ್ಞಾನ', romanization: 'jnaana', meaning: 'knowledge' },
      { kannada: 'ವಿಜ್ಞಾನ', romanization: 'vijnaana', meaning: 'science' },
    ],
  },

  // ── RETROFLEX STOPS (ಟ ವರ್ಗ) ────────────────────────────────
  {
    id: 'ta_retro', kannada: 'ಟ', romanization: 'ṭa', type: 'consonant',
    groupId: 'retroflex', groupName: 'Retroflex Stops (ಟ ವರ್ಗ)', orderInGroup: 1,
    pronunciationHint: "Tongue tip curled back, touching roof — retroflex 't'",
    anchorWords: [
      { kannada: 'ಟೊಮೇಟೊ', romanization: 'tometo', meaning: 'tomato', targetLetterIndex: 0, position: 'initial', imageEmoji: '🍅' },
      { kannada: 'ಟವಲು', romanization: 'tavalu', meaning: 'towel', targetLetterIndex: 0, position: 'initial', imageEmoji: '🏊' },
      { kannada: 'ಮಾಟ', romanization: 'maata', meaning: 'magic / sorcery', targetLetterIndex: 1, position: 'final', imageEmoji: '🪄' },
    ],
    exampleWords: [
      { kannada: 'ಟೊಮೇಟೊ', romanization: 'tometo', meaning: 'tomato' },
      { kannada: 'ಟವಲು', romanization: 'tavalu', meaning: 'towel' },
    ],
  },
  {
    id: 'tha_retro', kannada: 'ಠ', romanization: 'ṭha', type: 'consonant',
    groupId: 'retroflex', groupName: 'Retroflex Stops (ಟ ವರ್ಗ)', orderInGroup: 2,
    pronunciationHint: "Retroflex 't' with puff of air — aspirated retroflex",
    anchorWords: [
      { kannada: 'ಠೀಕ', romanization: 'theeka', meaning: 'fine / okay (colloquial)', targetLetterIndex: 0, position: 'initial', imageEmoji: '👌' },
      { kannada: 'ಠಾಕೂರ', romanization: 'thaakura', meaning: 'lord / master', targetLetterIndex: 0, position: 'initial', imageEmoji: '👑' },
      { kannada: 'ಠಳ', romanization: 'thala', meaning: 'bald / top', targetLetterIndex: 0, position: 'initial', imageEmoji: '🔝' },
    ],
    exampleWords: [
      { kannada: 'ಠೀಕ', romanization: 'theeka', meaning: 'okay / fine' },
      { kannada: 'ಠಾಕೂರ', romanization: 'thaakura', meaning: 'lord' },
    ],
  },
  {
    id: 'da_retro', kannada: 'ಡ', romanization: 'ḍa', type: 'consonant',
    groupId: 'retroflex', groupName: 'Retroflex Stops (ಟ ವರ್ಗ)', orderInGroup: 3,
    pronunciationHint: "Tongue tip curled back — voiced retroflex 'd'",
    anchorWords: [
      { kannada: 'ಡಬ್ಬ', romanization: 'dabba', meaning: 'box / container', targetLetterIndex: 0, position: 'initial', imageEmoji: '📦' },
      { kannada: 'ಡಾಕ್ಟರ್', romanization: 'daaktar', meaning: 'doctor', targetLetterIndex: 0, position: 'initial', imageEmoji: '👨‍⚕️' },
      { kannada: 'ಮೊಡ', romanization: 'moda', meaning: 'face / head', targetLetterIndex: 1, position: 'medial', imageEmoji: '😊' },
    ],
    exampleWords: [
      { kannada: 'ಡಬ್ಬ', romanization: 'dabba', meaning: 'box' },
      { kannada: 'ಡಾಕ್ಟರ್', romanization: 'daaktar', meaning: 'doctor' },
    ],
  },
  {
    id: 'dha_retro', kannada: 'ಢ', romanization: 'ḍha', type: 'consonant',
    groupId: 'retroflex', groupName: 'Retroflex Stops (ಟ ವರ್ಗ)', orderInGroup: 4,
    pronunciationHint: "Voiced retroflex with breathy release",
    anchorWords: [
      { kannada: 'ಢಕ್ಕೆ', romanization: 'dhakke', meaning: 'drum (type)', targetLetterIndex: 0, position: 'initial', imageEmoji: '🥁' },
      { kannada: 'ಢಾಳ', romanization: 'dhaala', meaning: 'excessive / abundant', targetLetterIndex: 0, position: 'initial', imageEmoji: '📈' },
      { kannada: 'ಢೇ', romanization: 'dhe', meaning: 'hey! (call)', targetLetterIndex: 0, position: 'initial', imageEmoji: '👋' },
    ],
    exampleWords: [
      { kannada: 'ಢಕ್ಕೆ', romanization: 'dhakke', meaning: 'type of drum' },
      { kannada: 'ಢಾಳ', romanization: 'dhaala', meaning: 'excessive' },
    ],
  },
  {
    id: 'na_retro', kannada: 'ಣ', romanization: 'ṇa', type: 'consonant',
    groupId: 'retroflex', groupName: 'Retroflex Stops (ಟ ವರ್ಗ)', orderInGroup: 5,
    pronunciationHint: "Retroflex nasal — tongue curled back, nasal sound",
    anchorWords: [
      { kannada: 'ಕಣ್ಣು', romanization: 'kannu', meaning: 'eye', targetLetterIndex: 1, position: 'medial', imageEmoji: '👁️' },
      { kannada: 'ಮಣ್ಣು', romanization: 'mannu', meaning: 'soil / earth', targetLetterIndex: 1, position: 'medial', imageEmoji: '🌍' },
      { kannada: 'ರಣ', romanization: 'rana', meaning: 'battle / war', targetLetterIndex: 1, position: 'final', imageEmoji: '⚔️' },
    ],
    exampleWords: [
      { kannada: 'ಕಣ್ಣು', romanization: 'kannu', meaning: 'eye' },
      { kannada: 'ಮಣ್ಣು', romanization: 'mannu', meaning: 'soil' },
    ],
  },

  // ── DENTAL STOPS (ತ ವರ್ಗ) ────────────────────────────────────
  {
    id: 'ta', kannada: 'ತ', romanization: 'ta', type: 'consonant',
    groupId: 'dental', groupName: 'Dental Stops (ತ ವರ್ಗ)', orderInGroup: 1,
    pronunciationHint: "Tongue touches back of upper teeth — dental 't', softer than English",
    anchorWords: [
      { kannada: 'ತಂದೆ', romanization: 'tande', meaning: 'father', targetLetterIndex: 0, position: 'initial', imageEmoji: '👨' },
      { kannada: 'ತಾಯಿ', romanization: 'taayi', meaning: 'mother', targetLetterIndex: 0, position: 'initial', imageEmoji: '👩' },
      { kannada: 'ತಲೆ', romanization: 'tale', meaning: 'head', targetLetterIndex: 0, position: 'initial', imageEmoji: '🗣️' },
    ],
    exampleWords: [
      { kannada: 'ತಂದೆ', romanization: 'tande', meaning: 'father' },
      { kannada: 'ತಲೆ', romanization: 'tale', meaning: 'head' },
    ],
  },
  {
    id: 'tha', kannada: 'ಥ', romanization: 'tha', type: 'consonant',
    groupId: 'dental', groupName: 'Dental Stops (ತ ವರ್ಗ)', orderInGroup: 2,
    pronunciationHint: "Dental 't' with puff of air — aspirated dental",
    anchorWords: [
      { kannada: 'ಥಳಕು', romanization: 'thalaku', meaning: 'shining / glittering', targetLetterIndex: 0, position: 'initial', imageEmoji: '✨' },
      { kannada: 'ಥಟ್', romanization: 'that', meaning: 'immediately / at once', targetLetterIndex: 0, position: 'initial', imageEmoji: '⚡' },
      { kannada: 'ಥಟ್ಟನೆ', romanization: 'thattane', meaning: 'suddenly', targetLetterIndex: 0, position: 'initial', imageEmoji: '💥' },
    ],
    exampleWords: [
      { kannada: 'ಥಳಕು', romanization: 'thalaku', meaning: 'shining' },
      { kannada: 'ಥಟ್ಟನೆ', romanization: 'thattane', meaning: 'suddenly' },
    ],
  },
  {
    id: 'da', kannada: 'ದ', romanization: 'da', type: 'consonant',
    groupId: 'dental', groupName: 'Dental Stops (ತ ವರ್ಗ)', orderInGroup: 3,
    pronunciationHint: "Tongue at upper teeth — voiced dental 'd'",
    anchorWords: [
      { kannada: 'ದಿನ', romanization: 'dina', meaning: 'day', targetLetterIndex: 0, position: 'initial', imageEmoji: '☀️' },
      { kannada: 'ದೇವರು', romanization: 'devaru', meaning: 'God', targetLetterIndex: 0, position: 'initial', imageEmoji: '🙏' },
      { kannada: 'ಸದ', romanization: 'sada', meaning: 'always', targetLetterIndex: 1, position: 'medial', imageEmoji: '♾️' },
    ],
    exampleWords: [
      { kannada: 'ದಿನ', romanization: 'dina', meaning: 'day' },
      { kannada: 'ದೇವರು', romanization: 'devaru', meaning: 'God' },
    ],
  },
  {
    id: 'dha', kannada: 'ಧ', romanization: 'dha', type: 'consonant',
    groupId: 'dental', groupName: 'Dental Stops (ತ ವರ್ಗ)', orderInGroup: 4,
    pronunciationHint: "Voiced dental with breathy release — aspirated dental d",
    anchorWords: [
      { kannada: 'ಧರ್ಮ', romanization: 'dharma', meaning: 'righteousness / duty', targetLetterIndex: 0, position: 'initial', imageEmoji: '⚖️' },
      { kannada: 'ಧ್ಯಾನ', romanization: 'dhyaana', meaning: 'meditation', targetLetterIndex: 0, position: 'initial', imageEmoji: '🧘' },
      { kannada: 'ಸಾಧನ', romanization: 'saadhana', meaning: 'practice / tool', targetLetterIndex: 2, position: 'medial', imageEmoji: '🛠️' },
    ],
    exampleWords: [
      { kannada: 'ಧರ್ಮ', romanization: 'dharma', meaning: 'duty / righteousness' },
      { kannada: 'ಧ್ಯಾನ', romanization: 'dhyaana', meaning: 'meditation' },
    ],
  },
  {
    id: 'na', kannada: 'ನ', romanization: 'na', type: 'consonant',
    groupId: 'dental', groupName: 'Dental Stops (ತ ವರ್ಗ)', orderInGroup: 5,
    pronunciationHint: "Dental nasal — like 'n' in 'note', tongue at teeth",
    anchorWords: [
      { kannada: 'ನೀರು', romanization: 'neeru', meaning: 'water', targetLetterIndex: 0, position: 'initial', imageEmoji: '💧' },
      { kannada: 'ನಾಯಿ', romanization: 'naayi', meaning: 'dog', targetLetterIndex: 0, position: 'initial', imageEmoji: '🐕' },
      { kannada: 'ಮನೆ', romanization: 'mane', meaning: 'house', targetLetterIndex: 1, position: 'medial', imageEmoji: '🏠' },
    ],
    exampleWords: [
      { kannada: 'ನೀರು', romanization: 'neeru', meaning: 'water' },
      { kannada: 'ನಾಯಿ', romanization: 'naayi', meaning: 'dog' },
    ],
  },

  // ── LABIAL STOPS (ಪ ವರ್ಗ) ────────────────────────────────────
  {
    id: 'pa', kannada: 'ಪ', romanization: 'pa', type: 'consonant',
    groupId: 'labial', groupName: 'Labial Stops (ಪ ವರ್ಗ)', orderInGroup: 1,
    pronunciationHint: "Lips together, unaspirated — like 'p' in 'spot'",
    anchorWords: [
      { kannada: 'ಪಕ್ಷಿ', romanization: 'pakshi', meaning: 'bird', targetLetterIndex: 0, position: 'initial', imageEmoji: '🐦' },
      { kannada: 'ಪೆನ್ನು', romanization: 'pennu', meaning: 'pen', targetLetterIndex: 0, position: 'initial', imageEmoji: '✒️' },
      { kannada: 'ತಪ್ಪು', romanization: 'tappu', meaning: 'mistake / wrong', targetLetterIndex: 1, position: 'medial', imageEmoji: '❌' },
    ],
    exampleWords: [
      { kannada: 'ಪಕ್ಷಿ', romanization: 'pakshi', meaning: 'bird' },
      { kannada: 'ಪೆನ್ನು', romanization: 'pennu', meaning: 'pen' },
    ],
  },
  {
    id: 'pha', kannada: 'ಫ', romanization: 'pha', type: 'consonant',
    groupId: 'labial', groupName: 'Labial Stops (ಪ ವರ್ಗ)', orderInGroup: 2,
    pronunciationHint: "Lips together with puff of air — aspirated p",
    anchorWords: [
      { kannada: 'ಫಲ', romanization: 'phala', meaning: 'fruit / result', targetLetterIndex: 0, position: 'initial', imageEmoji: '🍎' },
      { kannada: 'ಫೋಟೊ', romanization: 'photo', meaning: 'photo / picture', targetLetterIndex: 0, position: 'initial', imageEmoji: '📸' },
      { kannada: 'ಫಟಿಕ', romanization: 'phatika', meaning: 'crystal', targetLetterIndex: 0, position: 'initial', imageEmoji: '💎' },
    ],
    exampleWords: [
      { kannada: 'ಫಲ', romanization: 'phala', meaning: 'fruit / result' },
      { kannada: 'ಫೋಟೊ', romanization: 'photo', meaning: 'photo' },
    ],
  },
  {
    id: 'ba', kannada: 'ಬ', romanization: 'ba', type: 'consonant',
    groupId: 'labial', groupName: 'Labial Stops (ಪ ವರ್ಗ)', orderInGroup: 3,
    pronunciationHint: "Like 'b' in 'ball' — voiced labial",
    anchorWords: [
      { kannada: 'ಬಾಯಿ', romanization: 'baayi', meaning: 'mouth', targetLetterIndex: 0, position: 'initial', imageEmoji: '👄' },
      { kannada: 'ಬೆಳೆ', romanization: 'bele', meaning: 'crop / plant growth', targetLetterIndex: 0, position: 'initial', imageEmoji: '🌾' },
      { kannada: 'ಸಬ', romanization: 'saba', meaning: 'soap (colloquial)', targetLetterIndex: 1, position: 'medial', imageEmoji: '🧼' },
    ],
    exampleWords: [
      { kannada: 'ಬಾಯಿ', romanization: 'baayi', meaning: 'mouth' },
      { kannada: 'ಬೆಳೆ', romanization: 'bele', meaning: 'crop' },
    ],
  },
  {
    id: 'bha', kannada: 'ಭ', romanization: 'bha', type: 'consonant',
    groupId: 'labial', groupName: 'Labial Stops (ಪ ವರ್ಗ)', orderInGroup: 4,
    pronunciationHint: "Voiced 'b' with breathy release — aspirated b",
    anchorWords: [
      { kannada: 'ಭೂಮಿ', romanization: 'bhuumi', meaning: 'earth / land', targetLetterIndex: 0, position: 'initial', imageEmoji: '🌍' },
      { kannada: 'ಭಾಷೆ', romanization: 'bhaashe', meaning: 'language', targetLetterIndex: 0, position: 'initial', imageEmoji: '🗣️' },
      { kannada: 'ಪ್ರಭ', romanization: 'prabha', meaning: 'light / radiance', targetLetterIndex: 2, position: 'final', imageEmoji: '✨' },
    ],
    exampleWords: [
      { kannada: 'ಭೂಮಿ', romanization: 'bhuumi', meaning: 'earth' },
      { kannada: 'ಭಾಷೆ', romanization: 'bhaashe', meaning: 'language' },
    ],
  },
  {
    id: 'ma', kannada: 'ಮ', romanization: 'ma', type: 'consonant',
    groupId: 'labial', groupName: 'Labial Stops (ಪ ವರ್ಗ)', orderInGroup: 5,
    pronunciationHint: "Like 'm' in 'mother' — labial nasal",
    anchorWords: [
      { kannada: 'ಮನೆ', romanization: 'mane', meaning: 'house', targetLetterIndex: 0, position: 'initial', imageEmoji: '🏠' },
      { kannada: 'ಮರ', romanization: 'mara', meaning: 'tree', targetLetterIndex: 0, position: 'initial', imageEmoji: '🌳' },
      { kannada: 'ಅಮ್ಮ', romanization: 'amma', meaning: 'mother', targetLetterIndex: 1, position: 'medial', imageEmoji: '👩' },
    ],
    exampleWords: [
      { kannada: 'ಮನೆ', romanization: 'mane', meaning: 'house' },
      { kannada: 'ಮರ', romanization: 'mara', meaning: 'tree' },
    ],
  },

  // ── SEMIVOWELS & SIBILANTS ────────────────────────────────────
  {
    id: 'ya', kannada: 'ಯ', romanization: 'ya', type: 'consonant',
    groupId: 'semivowel-sibilant', groupName: 'Semivowels & Sibilants', orderInGroup: 1,
    pronunciationHint: "Like 'y' in 'yes'",
    anchorWords: [
      { kannada: 'ಯಾರು', romanization: 'yaaru', meaning: 'who?', targetLetterIndex: 0, position: 'initial', imageEmoji: '❓' },
      { kannada: 'ಯಾವಾಗ', romanization: 'yaavaaga', meaning: 'when?', targetLetterIndex: 0, position: 'initial', imageEmoji: '⏰' },
      { kannada: 'ರಾಯ', romanization: 'raaya', meaning: 'king / ruler', targetLetterIndex: 2, position: 'final', imageEmoji: '👑' },
    ],
    exampleWords: [
      { kannada: 'ಯಾರು', romanization: 'yaaru', meaning: 'who?' },
      { kannada: 'ಯಾವಾಗ', romanization: 'yaavaaga', meaning: 'when?' },
    ],
  },
  {
    id: 'ra', kannada: 'ರ', romanization: 'ra', type: 'consonant',
    groupId: 'semivowel-sibilant', groupName: 'Semivowels & Sibilants', orderInGroup: 2,
    pronunciationHint: "Rolled/flapped 'r' — tongue tap on the roof of the mouth",
    anchorWords: [
      { kannada: 'ರಸ್ತೆ', romanization: 'raste', meaning: 'road / street', targetLetterIndex: 0, position: 'initial', imageEmoji: '🛣️' },
      { kannada: 'ರಾತ್ರಿ', romanization: 'raatri', meaning: 'night', targetLetterIndex: 0, position: 'initial', imageEmoji: '🌙' },
      { kannada: 'ಮರ', romanization: 'mara', meaning: 'tree', targetLetterIndex: 1, position: 'final', imageEmoji: '🌳' },
    ],
    exampleWords: [
      { kannada: 'ರಸ್ತೆ', romanization: 'raste', meaning: 'road' },
      { kannada: 'ರಾತ್ರಿ', romanization: 'raatri', meaning: 'night' },
    ],
  },
  {
    id: 'la', kannada: 'ಲ', romanization: 'la', type: 'consonant',
    groupId: 'semivowel-sibilant', groupName: 'Semivowels & Sibilants', orderInGroup: 3,
    pronunciationHint: "Like 'l' in 'lake' — dental lateral",
    anchorWords: [
      { kannada: 'ಲೋಟ', romanization: 'loota', meaning: 'cup / tumbler', targetLetterIndex: 0, position: 'initial', imageEmoji: '🥤' },
      { kannada: 'ಲಗ್ನ', romanization: 'lagna', meaning: 'wedding / marriage', targetLetterIndex: 0, position: 'initial', imageEmoji: '💍' },
      { kannada: 'ಕಾಲು', romanization: 'kaalu', meaning: 'leg / foot', targetLetterIndex: 2, position: 'final', imageEmoji: '🦵' },
    ],
    exampleWords: [
      { kannada: 'ಲೋಟ', romanization: 'loota', meaning: 'cup / tumbler' },
      { kannada: 'ಲಗ್ನ', romanization: 'lagna', meaning: 'wedding' },
    ],
  },
  {
    id: 'va', kannada: 'ವ', romanization: 'va', type: 'consonant',
    groupId: 'semivowel-sibilant', groupName: 'Semivowels & Sibilants', orderInGroup: 4,
    pronunciationHint: "Like 'v' in 'very' but softer — labio-dental semivowel",
    anchorWords: [
      { kannada: 'ವರ್ಷ', romanization: 'varsha', meaning: 'year / rain', targetLetterIndex: 0, position: 'initial', imageEmoji: '🌧️' },
      { kannada: 'ವಿದ್ಯಾರ್ಥಿ', romanization: 'vidyaarthi', meaning: 'student', targetLetterIndex: 0, position: 'initial', imageEmoji: '📚' },
      { kannada: 'ಸಾವ', romanization: 'saava', meaning: 'death', targetLetterIndex: 2, position: 'medial', imageEmoji: '💀' },
    ],
    exampleWords: [
      { kannada: 'ವರ್ಷ', romanization: 'varsha', meaning: 'year / rain' },
      { kannada: 'ವಿದ್ಯಾರ್ಥಿ', romanization: 'vidyaarthi', meaning: 'student' },
    ],
  },
  {
    id: 'sha', kannada: 'ಶ', romanization: 'sha', type: 'consonant',
    groupId: 'semivowel-sibilant', groupName: 'Semivowels & Sibilants', orderInGroup: 5,
    pronunciationHint: "Like 'sh' in 'shoe' — palatal sibilant",
    anchorWords: [
      { kannada: 'ಶಾಲೆ', romanization: 'shaale', meaning: 'school', targetLetterIndex: 0, position: 'initial', imageEmoji: '🏫' },
      { kannada: 'ಶರೀರ', romanization: 'shareera', meaning: 'body', targetLetterIndex: 0, position: 'initial', imageEmoji: '🧍' },
      { kannada: 'ಆಕಾಶ', romanization: 'aakaasha', meaning: 'sky', targetLetterIndex: 3, position: 'final', imageEmoji: '🌤️' },
    ],
    exampleWords: [
      { kannada: 'ಶಾಲೆ', romanization: 'shaale', meaning: 'school' },
      { kannada: 'ಶರೀರ', romanization: 'shareera', meaning: 'body' },
    ],
  },
  {
    id: 'sha_retro', kannada: 'ಷ', romanization: 'ṣha', type: 'consonant',
    groupId: 'semivowel-sibilant', groupName: 'Semivowels & Sibilants', orderInGroup: 6,
    pronunciationHint: "Retroflex 'sh' — tongue curled back while saying 'sh'",
    anchorWords: [
      { kannada: 'ಷಡ್ರಸ', romanization: 'shadhrasa', meaning: 'six tastes', targetLetterIndex: 0, position: 'initial', imageEmoji: '🍽️' },
      { kannada: 'ವಿಷ', romanization: 'visha', meaning: 'poison', targetLetterIndex: 2, position: 'final', imageEmoji: '☠️' },
      { kannada: 'ಭೀಷ್ಣ', romanization: 'bheeshna', meaning: 'fierce / terrible', targetLetterIndex: 2, position: 'medial', imageEmoji: '⚡' },
    ],
    exampleWords: [
      { kannada: 'ವಿಷ', romanization: 'visha', meaning: 'poison' },
      { kannada: 'ಷಡ್ರಸ', romanization: 'shadhrasa', meaning: 'six tastes' },
    ],
  },
  {
    id: 'sa', kannada: 'ಸ', romanization: 'sa', type: 'consonant',
    groupId: 'semivowel-sibilant', groupName: 'Semivowels & Sibilants', orderInGroup: 7,
    pronunciationHint: "Like 's' in 'sun' — dental sibilant",
    anchorWords: [
      { kannada: 'ಸಮಯ', romanization: 'samaya', meaning: 'time', targetLetterIndex: 0, position: 'initial', imageEmoji: '⏰' },
      { kannada: 'ಸ್ನೇಹಿತ', romanization: 'snehita', meaning: 'friend', targetLetterIndex: 0, position: 'initial', imageEmoji: '🤝' },
      { kannada: 'ರಸ', romanization: 'rasa', meaning: 'juice / taste', targetLetterIndex: 1, position: 'final', imageEmoji: '🥤' },
    ],
    exampleWords: [
      { kannada: 'ಸಮಯ', romanization: 'samaya', meaning: 'time' },
      { kannada: 'ಸ್ನೇಹಿತ', romanization: 'snehita', meaning: 'friend' },
    ],
  },
  {
    id: 'ha', kannada: 'ಹ', romanization: 'ha', type: 'consonant',
    groupId: 'semivowel-sibilant', groupName: 'Semivowels & Sibilants', orderInGroup: 8,
    pronunciationHint: "Like 'h' in 'house' — glottal fricative",
    anchorWords: [
      { kannada: 'ಹಾಲು', romanization: 'haalu', meaning: 'milk', targetLetterIndex: 0, position: 'initial', imageEmoji: '🥛' },
      { kannada: 'ಹೂವು', romanization: 'huuvu', meaning: 'flower', targetLetterIndex: 0, position: 'initial', imageEmoji: '🌸' },
      { kannada: 'ಮಹಾ', romanization: 'mahaa', meaning: 'great / big', targetLetterIndex: 1, position: 'medial', imageEmoji: '👑' },
    ],
    exampleWords: [
      { kannada: 'ಹಾಲು', romanization: 'haalu', meaning: 'milk' },
      { kannada: 'ಹೂವು', romanization: 'huuvu', meaning: 'flower' },
    ],
  },
  {
    id: 'la_retro', kannada: 'ಳ', romanization: 'ḷa', type: 'consonant',
    groupId: 'semivowel-sibilant', groupName: 'Semivowels & Sibilants', orderInGroup: 9,
    pronunciationHint: "Retroflex lateral — tongue curled back while saying 'l'",
    anchorWords: [
      { kannada: 'ಹಳ್ಳಿ', romanization: 'halli', meaning: 'village', targetLetterIndex: 1, position: 'medial', imageEmoji: '🏡' },
      { kannada: 'ಕಾಳು', romanization: 'kaalu', meaning: 'grain / pulse', targetLetterIndex: 2, position: 'final', imageEmoji: '🫘' },
      { kannada: 'ಬೆಳ್ಳಿ', romanization: 'belli', meaning: 'silver', targetLetterIndex: 1, position: 'medial', imageEmoji: '🥈' },
    ],
    exampleWords: [
      { kannada: 'ಹಳ್ಳಿ', romanization: 'halli', meaning: 'village' },
      { kannada: 'ಬೆಳ್ಳಿ', romanization: 'belli', meaning: 'silver' },
    ],
  },
];

export const letterMap: Map<string, KannadaLetter> = new Map(
  letters.map(l => [l.id, l])
);

export function getLetterById(id: string): KannadaLetter | undefined {
  return letterMap.get(id);
}

export function getLettersByGroup(groupId: string): KannadaLetter[] {
  return letters.filter(l => l.groupId === groupId);
}
