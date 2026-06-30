// Frames pre-computed from TrieFusion.cpp: {38,27,43,3,9,82,10}, n=7
// Merge sort: triFusion(T, 0, 6) — recursive divide + fusion in-place.
// Array state at each key fusion call, described as one flat array.
// Merge tree: fusion(0,0,1)→[27,38,...], fusion(2,2,3)→[...,3,43,...],
//   fusion(0,1,3)→[3,27,38,43,...], fusion(4,4,5) no-op,
//   fusion(4,5,6)→[...,9,10,82], fusion(0,3,6)→[3,9,10,27,38,43,82].

export const triFusionExample = {
  id: 'tri-fusion',
  title: 'Tri fusion — diviser pour régner',
  badge: 'Exemple interactif • Tri fusion',
  intro:
    "Observe comment le tableau est divisé en petits morceaux, puis fusionné dans l'ordre. Algorithme fidèle à TrieFusion.cpp sur [38, 27, 43, 3, 9, 82, 10].",
  source: 'TrieFusion.cpp',
  frames: [
    // Frame 0 — état initial
    {
      arr: [38, 27, 43, 3, 9, 82, 10],
      comparing: [],
      sorted: [],
      description: 'État initial : [38, 27, 43, 3, 9, 82, 10]',
    },

    // Division
    {
      arr: [38, 27, 43, 3, 9, 82, 10],
      comparing: [],
      sorted: [],
      description: 'Division : [38,27,43,3] à gauche | [9,82,10] à droite',
    },
    {
      arr: [38, 27, 43, 3, 9, 82, 10],
      comparing: [],
      sorted: [],
      description: 'Division gauche : [38,27] | [43,3]',
    },

    // fusion(0, 0, 1) : [38] + [27] → [27, 38]
    {
      arr: [38, 27, 43, 3, 9, 82, 10],
      comparing: [0, 1],
      sorted: [],
      description: 'Fusion de [38] et [27] : 27 < 38 → 27 passe en premier',
    },
    {
      arr: [27, 38, 43, 3, 9, 82, 10],
      comparing: [],
      sorted: [0, 1],
      description: 'Résultat : [27, 38] — paire gauche triée',
    },

    // fusion(2, 2, 3) : [43] + [3] → [3, 43]
    {
      arr: [27, 38, 43, 3, 9, 82, 10],
      comparing: [2, 3],
      sorted: [0, 1],
      description: 'Fusion de [43] et [3] : 3 < 43 → 3 passe en premier',
    },
    {
      arr: [27, 38, 3, 43, 9, 82, 10],
      comparing: [],
      sorted: [0, 1, 2, 3],
      description: 'Résultat : [3, 43] — paire droite triée',
    },

    // fusion(0, 1, 3) : [27,38] + [3,43] → [3,27,38,43]
    {
      arr: [27, 38, 3, 43, 9, 82, 10],
      comparing: [0, 1, 2, 3],
      sorted: [],
      description: 'Fusion de [27,38] et [3,43] — on compare et intercale',
    },
    {
      arr: [3, 27, 38, 43, 9, 82, 10],
      comparing: [],
      sorted: [0, 1, 2, 3],
      description: 'Résultat gauche : [3, 27, 38, 43] — moitié gauche triée !',
    },

    // Division droite
    {
      arr: [3, 27, 38, 43, 9, 82, 10],
      comparing: [],
      sorted: [0, 1, 2, 3],
      description: 'Division droite : [9,82] | [10]',
    },

    // fusion(4, 4, 5) : [9] + [82] → [9, 82] (déjà en ordre)
    {
      arr: [3, 27, 38, 43, 9, 82, 10],
      comparing: [4, 5],
      sorted: [0, 1, 2, 3],
      description: 'Fusion de [9] et [82] : 9 < 82 → ordre déjà correct',
    },

    // fusion(4, 5, 6) : [9,82] + [10] → [9,10,82]
    {
      arr: [3, 27, 38, 43, 9, 82, 10],
      comparing: [4, 5, 6],
      sorted: [0, 1, 2, 3],
      description: 'Fusion de [9,82] et [10] : 9, puis 10 < 82, puis 82',
    },
    {
      arr: [3, 27, 38, 43, 9, 10, 82],
      comparing: [],
      sorted: [0, 1, 2, 3],
      description: 'Résultat droit : [9, 10, 82] — moitié droite triée !',
    },

    // fusion(0, 3, 6) : [3,27,38,43] + [9,10,82] → [3,9,10,27,38,43,82]
    {
      arr: [3, 27, 38, 43, 9, 10, 82],
      comparing: [0, 1, 2, 3, 4, 5, 6],
      sorted: [],
      description: 'Fusion finale de [3,27,38,43] et [9,10,82] — on assemble tout !',
    },

    // Final frame
    {
      arr: [3, 9, 10, 27, 38, 43, 82],
      comparing: [],
      sorted: [0, 1, 2, 3, 4, 5, 6],
      description: 'Tableau trié : [3, 9, 10, 27, 38, 43, 82] — diviser pour régner !',
    },
  ],
}
