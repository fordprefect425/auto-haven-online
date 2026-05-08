---
name: kannada-reading-app
description: >
  Use this skill whenever the user wants to build, design, or generate content
  for an app that teaches Kannada reading — especially using real-world brand
  recognition, sign-board reading, logo literacy, or environmental print to
  teach Kannada letters (aksharagalu). Trigger when the user mentions: teaching
  Kannada letters through pictures/logos, Kannada literacy app, Kannada
  alphabet with real-world examples, sign-based Kannada learning, or any
  request to help someone learn to read Kannada using familiar brand names
  (KFC, KSRTC, Nandini, Darshini, etc.). Also trigger when the user wants
  lesson plans, letter-to-word mappings, UI screens, or content curricula for
  a Kannada reading app targeted at beginners or non-readers.
---

# Kannada Reading App — Teaching Skill

A comprehensive guide for building or generating content for a Kannada
literacy app that leverages **real-world brand/sign recognition** and
**pattern recognition theory** to teach the Kannada script.

---

## Core Teaching Philosophy

### 1. Environmental Print First (Real-World Word Recognition)
Learners — especially adult beginners and children raised in Karnataka —
already *know* brands and signs by sight. They see ಕೆಎಫ್‌ಸಿ (KFC),
ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ (KSRTC), ನಂದಿನಿ (Nandini), ದರ್ಶಿನಿ (Darshini) every day.
The app uses that familiarity as an entry point into the script.

**Why it works:** Humans are wired for logo/sign recognition long before
formal reading. By anchoring abstract letters to a logo the learner already
trusts, the brain makes a semantic connection, not just a visual one.

### 2. Pattern Recognition Theory
The Kannada script is highly systematic (an abugida). The same base consonant
shape reappears across vowel-forms (matras). The app should:
- Highlight the **core consonant shape** in every word
- Show the pattern: consonant → consonant + vowel sign → full syllable
- Use color-coding to make the repeating shape "pop" visually
- Repeat the same letter across 3–5 different real-world words before moving on

### 3. Spaced Repetition & Micro-Lessons
Each letter gets a "card" that cycles back at increasing intervals. A single
session teaches 1–3 letters only. Depth > breadth.

### 4. Multimodal Reinforcement
Every letter card must contain:
- The **Kannada letter** (large, high contrast)
- A **real-world image** (photo of the actual sign/logo/product)
- The **word in Kannada script** with the target letter highlighted
- The **word in transliteration** (for pronunciation scaffolding)
- An **audio clip** of the letter sound and the full word
- A **tracing/recognition quiz** at the end of each card

---

## Kannada Script Basics (For App Content Generation)

Kannada has **49 base characters** (varnamale): 13 vowels + 34 consonants +
2 special characters (anusvara ಂ and visarga ಃ).

### Vowels (Swaras)
| Letter | Sound | Transliteration |
|--------|-------|-----------------|
| ಅ | a | a |
| ಆ | aa | aa |
| ಇ | i | i |
| ಈ | ee | ee |
| ಉ | u | u |
| ಊ | oo | oo |
| ಋ | ru | ru |
| ಎ | e | e |
| ಏ | ae | ae |
| ಐ | ai | ai |
| ಒ | o | o |
| ಓ | oa | oa |
| ಔ | au | au |

### Key Consonants (teach in this real-world-anchored order)
See `references/letter-to-brand-mapping.md` for the full 34-consonant table
with real-world word suggestions for each.

---

## Real-World Brand Mapping — Core Examples

These are the **highest-impact** anchors. Each brand/sign should be used in
the app with an actual photograph (see image sourcing notes below).

| Target Letter | Kannada Word | Brand / Sign | Why It Works |
|---------------|-------------|--------------|--------------|
| ಕ (ka) | ಕೆಎಫ್‌ಸಿ | KFC | Ubiquitous in Karnataka cities; the 'ಕ' is the first letter |
| ಕ (ka) | ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ | KSRTC | Government bus — every Karnataka resident knows it |
| ನ (na) | ನಂದಿನಿ | Nandini Milk | Seen on milk packets in every household |
| ದ (da) | ದರ್ಶಿನಿ | Darshini restaurants | Common restaurant sign across Bengaluru |
| ಬ (ba) | ಬೆಂಗಳೂರು | Bengaluru city signs | Their own city name — deeply familiar |
| ಮ (ma) | ಮೈಸೂರು | Mysuru / Mysore Palace | Famous city, heavily signed |
| ಅ (a) | ಅಂಚೆ ಕಚೇರಿ | Post Office signs | Seen in every town |
| ಸ (sa) | ಸರ್ಕಾರಿ | Government office signs | On all public buildings |
| ಪ (pa) | ಪೊಲೀಸ್ | Police signboards | Very recognizable |
| ಹ (ha) | ಹಾಲು | Nandini / Aavin milk signs | Product label the learner buys |
| ರ (ra) | ರಸ್ತೆ | Road signs | Seen daily while commuting |
| ಆ (aa) | ಆಸ್ಪತ್ರೆ | Hospital signs | Important survival literacy |
| ಶ (sha) | ಶಾಲೆ | School name boards | Relevant for parents & children |
| ಟ (ṭa) | ಟಾಟಾ | Tata brand logo | Pan-India recognition |
| ವ (va) | ವಿಧಾನಸೌಧ | Vidhana Soudha sign | Iconic Bengaluru landmark |

> **Content Tip:** Always prefer photographs of *actual Karnataka signs* over
> illustrations. Real images carry emotional recognition weight.

---

## Lesson Structure (Per Letter)

Each letter lesson follows this exact sequence:

```
STEP 1 — RECOGNITION HOOK (5 sec)
  Show the real-world image (e.g., a photo of a KSRTC bus)
  Text: "You see this every day. Can you spot the Kannada letter?"

STEP 2 — REVEAL (5 sec)
  Zoom in + highlight the target letter in the sign/logo
  Play audio: letter sound (e.g., "ಕ — ka")

STEP 3 — ISOLATE (10 sec)
  Show just the letter, large, centered
  Play audio again
  Show stroke order animation (how to write it)

STEP 4 — PATTERN CARDS (3 × 10 sec)
  Show 3 more real-world words containing the same letter
  Each card: image + word + highlighted letter
  Build the "I've seen this letter EVERYWHERE" feeling

STEP 5 — VOWEL FORMS (optional, advanced mode)
  Show: ಕ → ಕಾ → ಕಿ → ಕೀ → ಕು ...
  Use color: base consonant in one color, vowel mark in another
  This teaches the abugida pattern

STEP 6 — MINI QUIZ (3 questions)
  Q1: "Tap the letter ಕ" (letter grid, tap correct one)
  Q2: "Which sign contains ಕ?" (3 sign photos, pick one)
  Q3: "Trace ಕ" (finger-tracing on screen)

STEP 7 — BADGE + NEXT
  Celebrate + show what letter comes next
```

---

## App UI/UX Principles

### Screen Architecture
```
Home Screen
├── Today's Letters (1–3, based on spaced repetition schedule)
├── My Letters (all learned letters with mastery bars)
├── Explore Signs (camera feature — point at Kannada text → identify letters)
└── Practice Mode (quiz only, random letters)

Letter Lesson Screen
├── Hero image (full-bleed real-world photo)
├── Highlighted letter overlay
├── Audio button (auto-plays on entry)
├── Swipe right → next card in lesson
└── Progress bar at top

Quiz Screen
├── Large question text
├── 2–4 tap options (big touch targets, min 60×60dp)
├── Immediate audio+visual feedback
└── Streak counter
```

### Design Tokens for the App
- **Primary color:** Deep saffron `#E87722` (Karnataka connection)
- **Accent:** Kannada red `#C0392B`
- **Background:** Warm white `#FDF6EC`
- **Letter display font:** Noto Sans Kannada (Google Fonts, free)
- **Letter size on card:** minimum 96sp / 72pt
- **Real-world image:** 16:9 hero, full-bleed, real photograph preferred
- **Highlight color for target letter:** Bright yellow `#FFD700` with slight
  drop shadow so it "glows" on the sign

### Accessibility
- All audio is mandatory (many learners may have low literacy in any script)
- Minimum touch target: 60×60dp
- High contrast mode available
- Support for screen readers on letter name

---

## Content Generation Instructions (for Claude when using this skill)

When asked to generate lesson content for a specific letter:

1. **Identify 4–6 real-world Karnataka/India brands or signs** that prominently
   feature that letter. Prefer: government signs, daily-use products,
   restaurants, bus/transport names, hospital/school signs.

2. **Write the word in Kannada script** — confirm the correct Unicode
   codepoints. Do NOT guess; use the reference table in
   `references/letter-to-brand-mapping.md`.

3. **Provide transliteration** using the ISO 15919 standard or a simplified
   phonetic spelling (e.g., "ka" not "c").

4. **Write the 6-step lesson script** (as defined above) for that letter,
   filling in the specific brand names and words.

5. **Suggest quiz questions** (3 per lesson): one tap-the-letter, one
   spot-the-sign, one trace.

6. **Flag vowel forms** if in advanced mode: list the 8 most common vowel
   combinations for that consonant.

7. **Image sourcing note:** Specify the search query to find a real photo
   (e.g., "KSRTC bus front Bengaluru" for Unsplash/Google Images).

---

## Curriculum Sequence (Recommended Teaching Order)

Teach in this order — prioritizing letters that appear in the most
high-frequency real-world signs AND are visually distinctive:

**Phase 1 — Survival Signs (lessons 1–8)**
ಕ, ನ, ಬ, ಮ, ಅ, ಸ, ಪ, ಹ

**Phase 2 — City & Transport (lessons 9–16)**
ರ, ದ, ಟ, ವ, ಶ, ತ, ಆ, ಲ

**Phase 3 — Common Vowel Signs (lessons 17–22)**
ಾ (aa matra), ಿ (i matra), ಿ (ee matra), ು (u matra), ೆ (e matra), ೊ (o matra)

**Phase 4 — Remaining Consonants (lessons 23–49)**
Alphabetical order (ಗ, ಘ, ಙ, ಚ, ...)

> See `references/curriculum-full.md` for the complete 49-lesson sequence
> with brand anchors, audio notes, and quiz templates for every letter.

---

## Image Sourcing Guide

| Source | Use Case | Notes |
|--------|----------|-------|
| Wikimedia Commons | Government signs, landmarks | Free, attribution required |
| Unsplash | Street scenes, signboards | Free, no attribution required |
| Google Street View | Specific Karnataka locations | Screenshot with attribution |
| User-generated (in-app camera) | Advanced "spot it" feature | Store locally only |
| Product packaging photos | Nandini, MTR, etc. | Check brand usage rights |

For an MVP, use **Unsplash + Wikimedia** for all hero images. Budget for
licensed Karnataka sign photography if going to production.

---

## Technical Implementation Notes

### Stack Recommendations
| Component | Recommendation | Reason |
|-----------|---------------|--------|
| Mobile | Flutter or React Native | Cross-platform, good Kannada font support |
| Kannada font | Noto Sans Kannada | Full Unicode, Google Fonts, free |
| Audio | Pre-recorded MP3 clips | More accurate than TTS for Kannada |
| Spaced Repetition | SM-2 algorithm | Standard, well-understood |
| Image storage | CDN + local cache | Offline support for low-connectivity areas |
| Analytics | Firebase (free tier) | Track letter mastery per user |

### Kannada Unicode Range
Kannada block: `U+0C80` to `U+0CFF`
Always use Unicode, never images of text (for accessibility + searchability).

### TTS Note
As of 2025, Google Cloud TTS supports Kannada (`kn-IN`). It is acceptable for
letter-level sounds but may mispronounce some compound consonants. Pre-record
a native speaker for all 49 base letters and the 10 most common matras.

---

## Reference Files

| File | Contents |
|------|----------|
| `references/letter-to-brand-mapping.md` | Full 49-letter table with 3–5 brand anchors each |
| `references/curriculum-full.md` | Complete lesson sequence, quiz templates |
| `references/kannada-unicode-table.md` | All Unicode codepoints, vowel forms, compound chars |

Read the relevant reference file when generating content for a specific letter
or when building a full curriculum export.
