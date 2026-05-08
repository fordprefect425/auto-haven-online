import type { KannadaLetterGroup } from '@/types/kannada';
import { letters } from './letters';

export const letterGroups: KannadaLetterGroup[] = [
  {
    id: 'vowels-basic',
    name: 'Basic Vowels',
    nameKannada: 'ಮೂಲ ಸ್ವರಗಳು',
    description: 'The 6 core vowels — the foundation of every Kannada syllable',
    stageOrder: 1,
    letterIds: ['a', 'aa', 'i', 'ii', 'u', 'uu'],
  },
  {
    id: 'vowels-extended',
    name: 'Extended Vowels',
    nameKannada: 'ವಿಸ್ತೃತ ಸ್ವರಗಳು',
    description: 'The remaining vowels including diphthongs and special markers',
    stageOrder: 2,
    letterIds: ['ru', 'e', 'ee', 'ai', 'o', 'oo', 'au', 'am', 'ah'],
  },
  {
    id: 'velar',
    name: 'Velar Stops',
    nameKannada: 'ಕ ವರ್ಗ',
    description: 'Sounds made at the back of the throat — ka, kha, ga, gha, nga',
    stageOrder: 3,
    letterIds: ['ka', 'kha', 'ga', 'gha', 'nga'],
  },
  {
    id: 'palatal',
    name: 'Palatal Stops',
    nameKannada: 'ಚ ವರ್ಗ',
    description: 'Sounds made at the palate — cha, chha, ja, jha, nya',
    stageOrder: 4,
    letterIds: ['cha', 'chha', 'ja', 'jha', 'nya'],
  },
  {
    id: 'retroflex',
    name: 'Retroflex Stops',
    nameKannada: 'ಟ ವರ್ಗ',
    description: 'Tongue curled back to the roof — ṭa, ṭha, ḍa, ḍha, ṇa',
    stageOrder: 5,
    letterIds: ['ta_retro', 'tha_retro', 'da_retro', 'dha_retro', 'na_retro'],
  },
  {
    id: 'dental',
    name: 'Dental Stops',
    nameKannada: 'ತ ವರ್ಗ',
    description: 'Tongue touching upper teeth — ta, tha, da, dha, na',
    stageOrder: 6,
    letterIds: ['ta', 'tha', 'da', 'dha', 'na'],
  },
  {
    id: 'labial',
    name: 'Labial Stops',
    nameKannada: 'ಪ ವರ್ಗ',
    description: 'Sounds from the lips — pa, pha, ba, bha, ma',
    stageOrder: 7,
    letterIds: ['pa', 'pha', 'ba', 'bha', 'ma'],
  },
  {
    id: 'semivowel-sibilant',
    name: 'Semivowels & Sibilants',
    nameKannada: 'ಯ ರ ಲ ವ ಶ ಷ ಸ ಹ ಳ',
    description: 'Glides, liquids, and hissing sounds — ya, ra, la, va, sha, ṣha, sa, ha, ḷa',
    stageOrder: 8,
    letterIds: ['ya', 'ra', 'la', 'va', 'sha', 'sha_retro', 'sa', 'ha', 'la_retro'],
  },
];

export const groupMap: Map<string, KannadaLetterGroup> = new Map(
  letterGroups.map(g => [g.id, g])
);

export function getGroupById(id: string): KannadaLetterGroup | undefined {
  return groupMap.get(id);
}

// Returns the group that should unlock after the given group is completed
export function getNextGroupId(currentGroupId: string): string | null {
  const current = groupMap.get(currentGroupId);
  if (!current) return null;
  const next = letterGroups.find(g => g.stageOrder === current.stageOrder + 1);
  return next?.id ?? null;
}

// Get all letter IDs across all groups (for reference)
export const allLetterIds = letters.map(l => l.id);
