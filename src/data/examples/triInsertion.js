// Frames pre-computed from TrieInsertion.cpp: {1,5,3,9,0}, n=5
// Insertion sort: for i=1..n-1, take temp=T[i], shift right while temp<T[j] && j>=0, insert.

export const triInsertionExample = {
  id: 'tri-insertion',
  title: 'Tri insertion — la carte qui trouve sa place',
  badge: 'Exemple interactif • Tri insertion',
  intro:
    "Observe comment chaque élément est pris comme une carte et glissé vers sa bonne position dans la partie déjà triée. Algorithme fidèle à TrieInsertion.cpp sur [1, 5, 3, 9, 0].",
  source: 'TrieInsertion.cpp',
  frames: [
    // Frame 0 — état initial
    {
      arr: [1, 5, 3, 9, 0],
      comparing: [],
      sorted: [],
      description: 'État initial : [1, 5, 3, 9, 0]',
    },

    // i=1 : temp=5
    {
      arr: [1, 5, 3, 9, 0],
      comparing: [1],
      sorted: [0],
      description: 'i=1 : on prend la carte 5',
    },
    {
      arr: [1, 5, 3, 9, 0],
      comparing: [0, 1],
      sorted: [0],
      description: '5 ≥ 1 → aucun décalage, 5 reste à sa place',
    },
    {
      arr: [1, 5, 3, 9, 0],
      comparing: [],
      sorted: [0, 1],
      description: 'Préfixe trié : [1, 5]',
    },

    // i=2 : temp=3
    {
      arr: [1, 5, 3, 9, 0],
      comparing: [2],
      sorted: [0, 1],
      description: 'i=2 : on prend la carte 3',
    },
    {
      arr: [1, 5, 5, 9, 0],
      comparing: [1, 2],
      sorted: [0],
      description: '3 < 5 → décalage : 5 recule d\'un cran',
    },
    {
      arr: [1, 3, 5, 9, 0],
      comparing: [0, 1],
      sorted: [],
      description: '3 ≥ 1 → insertion à la position 1',
    },
    {
      arr: [1, 3, 5, 9, 0],
      comparing: [],
      sorted: [0, 1, 2],
      description: 'Préfixe trié : [1, 3, 5]',
    },

    // i=3 : temp=9
    {
      arr: [1, 3, 5, 9, 0],
      comparing: [3],
      sorted: [0, 1, 2],
      description: 'i=3 : on prend la carte 9',
    },
    {
      arr: [1, 3, 5, 9, 0],
      comparing: [2, 3],
      sorted: [0, 1, 2],
      description: '9 ≥ 5 → aucun décalage, 9 reste à sa place',
    },
    {
      arr: [1, 3, 5, 9, 0],
      comparing: [],
      sorted: [0, 1, 2, 3],
      description: 'Préfixe trié : [1, 3, 5, 9]',
    },

    // i=4 : temp=0 — le grand voyage
    {
      arr: [1, 3, 5, 9, 0],
      comparing: [4],
      sorted: [0, 1, 2, 3],
      description: 'i=4 : on prend la carte 0 — le grand voyage commence !',
    },
    {
      arr: [1, 3, 5, 9, 9],
      comparing: [3, 4],
      sorted: [0, 1, 2],
      description: '0 < 9 → décalage : 9 recule d\'un cran',
    },
    {
      arr: [1, 3, 5, 5, 9],
      comparing: [2, 3],
      sorted: [0, 1],
      description: '0 < 5 → décalage : 5 recule d\'un cran',
    },
    {
      arr: [1, 3, 3, 5, 9],
      comparing: [1, 2],
      sorted: [0],
      description: '0 < 3 → décalage : 3 recule d\'un cran',
    },
    {
      arr: [1, 1, 3, 5, 9],
      comparing: [0, 1],
      sorted: [],
      description: '0 < 1 → décalage : 1 recule d\'un cran',
    },
    {
      arr: [0, 1, 3, 5, 9],
      comparing: [],
      sorted: [0, 1, 2, 3, 4],
      description: 'j=-1 → 0 insérée à la position 0, traversée complète !',
    },

    // Final frame
    {
      arr: [0, 1, 3, 5, 9],
      comparing: [],
      sorted: [0, 1, 2, 3, 4],
      description: 'Tableau trié : [0, 1, 3, 5, 9] — carte par carte !',
    },
  ],
}
