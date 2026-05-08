import type { KannadaParagraph } from '@/types/kannada';

export const paragraphs: KannadaParagraph[] = [
  {
    id: 'para-1',
    title: 'ನಮ್ಮ ಮನೆ',
    theme: 'Home & Family',
    difficulty: 1,
    kannada: 'ನಮ್ಮ ಮನೆ ತುಂಬಾ ಚೆಂದ ಇದೆ. ಮನೆಯ ಮುಂದೆ ಒಂದು ದೊಡ್ಡ ಮರ ಇದೆ. ಆ ಮರದ ಮೇಲೆ ಪಕ್ಷಿಗಳು ಕೂರುತ್ತವೆ. ನಮ್ಮ ನಾಯಿ ಮರದ ಕೆಳಗೆ ಆಡುತ್ತದೆ.',
    romanization: 'namma mane tumba chenda ide. maneya munde ondu dodda mara ide. aa marada meele pakshigalu kuuruttave. namma naayi marada kelage aaduttade.',
    meaning: 'Our house is very beautiful. In front of the house, there is a big tree. Birds sit on that tree. Our dog plays under the tree.',
    sentenceIds: ['sent-3', 'sent-4'],
  },
  {
    id: 'para-2',
    title: 'ನದಿ ಮತ್ತು ನೀರು',
    theme: 'Nature',
    difficulty: 1,
    kannada: 'ನದಿಯಲ್ಲಿ ತಾಜಾ ನೀರು ಹರಿಯುತ್ತದೆ. ನೀರು ನಮ್ಮ ಜೀವನಕ್ಕೆ ಬೇಕು. ಮಕ್ಕಳು ನದಿಯ ಬಳಿ ಆಡುತ್ತಾರೆ. ಪಕ್ಷಿಗಳು ನೀರು ಕುಡಿಯಲು ಬರುತ್ತವೆ.',
    romanization: 'nadiyalli taajaa neeru hariyuttade. neeru namma jeevanakke beeku. makkalu nadiya bali aaduttaare. pakshigalu neeru kudiyalu baruttave.',
    meaning: 'Fresh water flows in the river. Water is essential for our life. Children play near the river. Birds come to drink water.',
    sentenceIds: ['sent-2', 'sent-3'],
  },
  {
    id: 'para-3',
    title: 'ಹಳ್ಳಿ ಜೀವನ',
    theme: 'Village Life',
    difficulty: 2,
    kannada: 'ಹಳ್ಳಿಯಲ್ಲಿ ಮರಗಳು ತುಂಬಾ ಇವೆ. ಬೆಳಿಗ್ಗೆ ಗಾಳಿ ತಂಪಾಗಿರುತ್ತದೆ. ತಂದೆ ಹೊಲಕ್ಕೆ ಹೋಗುತ್ತಾರೆ. ಅಮ್ಮ ಮನೆಯಲ್ಲಿ ಊಟ ಮಾಡುತ್ತಾರೆ. ಮಕ್ಕಳು ಶಾಲೆಗೆ ಹೋಗುತ್ತಾರೆ.',
    romanization: 'halliyalli maragalu tumba ive. beligge gaali tampaagiruttade. tande holakke hooguttaare. amma maneyalli uuta maaduttaare. makkalu shaalege hooguttaare.',
    meaning: 'There are many trees in the village. In the morning the wind is cool. Father goes to the fields. Mother cooks food at home. Children go to school.',
    sentenceIds: ['sent-6', 'sent-7', 'sent-9'],
  },
  {
    id: 'para-4',
    title: 'ರಾತ್ರಿ ಆಕಾಶ',
    theme: 'Night Sky',
    difficulty: 2,
    kannada: 'ರಾತ್ರಿ ಆಕಾಶ ತುಂಬಾ ಚೆಂದ. ಚಂದ್ರ ಬೆಳ್ಳಗೆ ಹೊಳೆಯುತ್ತದೆ. ನಕ್ಷತ್ರಗಳು ಮಿಣಮಿಣ ಮಾಡುತ್ತವೆ. ಮಕ್ಕಳು ಬಾನನ್ನು ನೋಡಿ ಖುಷಿ ಪಡುತ್ತಾರೆ.',
    romanization: 'raatri aakaasha tumba chenda. chandra bellaage holeyuttade. nakshathragalu minamina maaduttave. makkalu baanunnu noodi khushi paduttaare.',
    meaning: 'The night sky is very beautiful. The moon shines brightly. The stars twinkle. Children happily gaze at the sky.',
    sentenceIds: ['sent-8'],
  },
  {
    id: 'para-5',
    title: 'ಕನ್ನಡ ಭಾಷೆ',
    theme: 'Language & Learning',
    difficulty: 3,
    kannada: 'ಕನ್ನಡ ತುಂಬಾ ಹಳೆಯ ಭಾಷೆ. ಇದರಲ್ಲಿ ಅನೇಕ ಒಳ್ಳೆ ಕಾವ್ಯಗಳಿವೆ. ಕನ್ನಡ ಕಲಿಯುವುದು ನಮ್ಮ ಕರ್ತವ್ಯ. ಭಾಷೆ ಕಲಿತರೆ ಜ್ಞಾನ ಬೆಳೆಯುತ್ತದೆ. ನಮ್ಮ ಊರಿನ ಭಾಷೆಯನ್ನು ಪ್ರೀತಿಸೋಣ.',
    romanization: 'kannada tumba haleya bhaashe. idaralli aneka olle kaavyagalive. kannada kaliyuvudu namma kartavya. bhaashe kalitare jnaana beleyuttade. namma uurina bhaasheyanu preetisona.',
    meaning: 'Kannada is a very ancient language. It has many great poems. Learning Kannada is our duty. If we learn language, knowledge grows. Let us love our hometown\'s language.',
    sentenceIds: ['sent-10', 'sent-11', 'sent-12'],
  },
];

export const paragraphMap = new Map(paragraphs.map(p => [p.id, p]));
