// Frames pre-computed from TrieSelection.cpp: triSelection({1,5,3,9,0})
// Selection sort: find min in unsorted portion, swap to position i.
// Source always swaps even if minInd == i (no guard in original C++).
// Real exchanges: 3 (i=0, i=1, i=3). i=2 is a self-swap (no-op).

export const triSelectionExample = {
  id: 'tri-selection',
  title: 'Tri sélection — le minimum part en mission',
  badge: 'Exemple interactif • Tri sélection',
  intro:
    "Observe comment le tri sélection cherche le plus petit élément dans la partie non triée, puis l'échange avec la position courante. Algorithme fidèle à TrieSelection.cpp sur [1, 5, 3, 9, 0].",
  source: 'TrieSelection.cpp',
  frames: [
    // Frame 0 — initial state
    {
      arr: [1, 5, 3, 9, 0],
      comparing: [],
      sorted: [],
      description: 'État initial : [1, 5, 3, 9, 0]',
    },

    // Pass i=0 — find min in [1,5,3,9,0]
    {
      arr: [1, 5, 3, 9, 0],
      comparing: [0],
      sorted: [],
      description: 'i=0 : minimum provisoire → arr[0] = 1',
    },
    {
      arr: [1, 5, 3, 9, 0],
      comparing: [0, 1],
      sorted: [],
      description: 'j=1 : 5 > 1, le minimum reste arr[0] = 1',
    },
    {
      arr: [1, 5, 3, 9, 0],
      comparing: [0, 2],
      sorted: [],
      description: 'j=2 : 3 > 1, le minimum reste arr[0] = 1',
    },
    {
      arr: [1, 5, 3, 9, 0],
      comparing: [0, 3],
      sorted: [],
      description: 'j=3 : 9 > 1, le minimum reste arr[0] = 1',
    },
    {
      arr: [1, 5, 3, 9, 0],
      comparing: [0, 4],
      sorted: [],
      description: 'j=4 : 0 < 1 → nouveau minimum trouvé à arr[4] = 0 !',
    },
    {
      arr: [0, 5, 3, 9, 1],
      comparing: [0, 4],
      sorted: [0],
      description: 'Échange arr[0] ↔ arr[4] → 0 est maintenant à sa place définitive',
    },

    // Pass i=1 — find min in [5,3,9,1]
    {
      arr: [0, 5, 3, 9, 1],
      comparing: [1],
      sorted: [0],
      description: 'i=1 : minimum provisoire → arr[1] = 5',
    },
    {
      arr: [0, 5, 3, 9, 1],
      comparing: [1, 2],
      sorted: [0],
      description: 'j=2 : 3 < 5 → nouveau minimum à arr[2] = 3',
    },
    {
      arr: [0, 5, 3, 9, 1],
      comparing: [2, 3],
      sorted: [0],
      description: 'j=3 : 9 > 3, le minimum reste arr[2] = 3',
    },
    {
      arr: [0, 5, 3, 9, 1],
      comparing: [2, 4],
      sorted: [0],
      description: 'j=4 : 1 < 3 → nouveau minimum trouvé à arr[4] = 1 !',
    },
    {
      arr: [0, 1, 3, 9, 5],
      comparing: [1, 4],
      sorted: [0, 1],
      description: 'Échange arr[1] ↔ arr[4] → 1 est maintenant à sa place définitive',
    },

    // Pass i=2 — find min in [3,9,5]
    {
      arr: [0, 1, 3, 9, 5],
      comparing: [2],
      sorted: [0, 1],
      description: 'i=2 : minimum provisoire → arr[2] = 3',
    },
    {
      arr: [0, 1, 3, 9, 5],
      comparing: [2, 3],
      sorted: [0, 1],
      description: 'j=3 : 9 > 3, le minimum reste arr[2] = 3',
    },
    {
      arr: [0, 1, 3, 9, 5],
      comparing: [2, 4],
      sorted: [0, 1],
      description: 'j=4 : 5 > 3, le minimum reste arr[2] = 3 — déjà à sa place !',
    },
    {
      arr: [0, 1, 3, 9, 5],
      comparing: [],
      sorted: [0, 1, 2],
      description: "Pas d'échange nécessaire : 3 est déjà à sa place définitive",
    },

    // Pass i=3 — find min in [9,5]
    {
      arr: [0, 1, 3, 9, 5],
      comparing: [3],
      sorted: [0, 1, 2],
      description: 'i=3 : minimum provisoire → arr[3] = 9',
    },
    {
      arr: [0, 1, 3, 9, 5],
      comparing: [3, 4],
      sorted: [0, 1, 2],
      description: 'j=4 : 5 < 9 → nouveau minimum trouvé à arr[4] = 5 !',
    },
    {
      arr: [0, 1, 3, 5, 9],
      comparing: [3, 4],
      sorted: [0, 1, 2, 3],
      description: 'Échange arr[3] ↔ arr[4] → 5 et 9 prennent leur place définitive',
    },

    // Final frame
    {
      arr: [0, 1, 3, 5, 9],
      comparing: [],
      sorted: [0, 1, 2, 3, 4],
      description: 'Tableau trié : [0, 1, 3, 5, 9] — 3 échanges effectués',
    },
  ],
}
