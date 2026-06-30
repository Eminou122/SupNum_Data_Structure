// Frames pre-computed from TrieBulle.cpp: {7,3,1,5,2}, n=5
// Bubble sort: two nested loops, swap T[j] and T[j+1] when T[j]>T[j+1].
// 4 passes × 4 comparisons; each pass fixes the largest unsorted element.

export const triBulleExample = {
  id: 'tri-bulle',
  title: 'Tri à bulles — les grands montent à droite',
  badge: 'Exemple interactif • Tri à bulles',
  intro:
    "Observe comment deux voisins se comparent, puis le plus grand « bulle » progressivement vers la fin du tableau. Algorithme fidèle à TrieBulle.cpp sur [7, 3, 1, 5, 2].",
  source: 'TrieBulle.cpp',
  frames: [
    // Frame 0 — état initial
    {
      arr: [7, 3, 1, 5, 2],
      comparing: [],
      sorted: [],
      description: 'État initial : [7, 3, 1, 5, 2]',
    },

    // Passe i=0 — 7 remonte jusqu\'en bout
    {
      arr: [7, 3, 1, 5, 2],
      comparing: [0, 1],
      sorted: [],
      description: 'Passe 1, j=0 : 7 > 3 → échange !',
    },
    {
      arr: [3, 7, 1, 5, 2],
      comparing: [1, 2],
      sorted: [],
      description: 'j=1 : 7 > 1 → échange !',
    },
    {
      arr: [3, 1, 7, 5, 2],
      comparing: [2, 3],
      sorted: [],
      description: 'j=2 : 7 > 5 → échange !',
    },
    {
      arr: [3, 1, 5, 7, 2],
      comparing: [3, 4],
      sorted: [],
      description: 'j=3 : 7 > 2 → échange ! Le 7 "bulle" jusqu\'à la fin',
    },
    {
      arr: [3, 1, 5, 2, 7],
      comparing: [],
      sorted: [4],
      description: 'Passe 1 terminée : 7 est à sa place définitive',
    },

    // Passe i=1 — 5 remonte
    {
      arr: [3, 1, 5, 2, 7],
      comparing: [0, 1],
      sorted: [4],
      description: 'Passe 2, j=0 : 3 > 1 → échange !',
    },
    {
      arr: [1, 3, 5, 2, 7],
      comparing: [1, 2],
      sorted: [4],
      description: 'j=1 : 3 < 5 → pas d\'échange',
    },
    {
      arr: [1, 3, 5, 2, 7],
      comparing: [2, 3],
      sorted: [4],
      description: 'j=2 : 5 > 2 → échange !',
    },
    {
      arr: [1, 3, 2, 5, 7],
      comparing: [3, 4],
      sorted: [4],
      description: 'j=3 : 5 < 7 → pas d\'échange',
    },
    {
      arr: [1, 3, 2, 5, 7],
      comparing: [],
      sorted: [3, 4],
      description: 'Passe 2 terminée : 5 et 7 sont fixés',
    },

    // Passe i=2
    {
      arr: [1, 3, 2, 5, 7],
      comparing: [0, 1],
      sorted: [3, 4],
      description: 'Passe 3, j=0 : 1 < 3 → pas d\'échange',
    },
    {
      arr: [1, 3, 2, 5, 7],
      comparing: [1, 2],
      sorted: [3, 4],
      description: 'j=1 : 3 > 2 → échange !',
    },
    {
      arr: [1, 2, 3, 5, 7],
      comparing: [2, 3],
      sorted: [3, 4],
      description: 'j=2 : 3 < 5 → pas d\'échange',
    },
    {
      arr: [1, 2, 3, 5, 7],
      comparing: [3, 4],
      sorted: [3, 4],
      description: 'j=3 : 5 < 7 → pas d\'échange',
    },
    {
      arr: [1, 2, 3, 5, 7],
      comparing: [],
      sorted: [2, 3, 4],
      description: 'Passe 3 terminée : 3, 5 et 7 sont fixés',
    },

    // Passe i=3 — aucun échange
    {
      arr: [1, 2, 3, 5, 7],
      comparing: [0, 1],
      sorted: [2, 3, 4],
      description: 'Passe 4 : 1 < 2, 2 < 3, 3 < 5, 5 < 7 — aucun échange !',
    },

    // Final frame
    {
      arr: [1, 2, 3, 5, 7],
      comparing: [],
      sorted: [0, 1, 2, 3, 4],
      description: 'Tableau trié : [1, 2, 3, 5, 7] — les bulles ont fait leur boulot !',
    },
  ],
}
