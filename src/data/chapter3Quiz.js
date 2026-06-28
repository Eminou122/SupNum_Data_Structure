export const chapter3Quiz = {
  title: 'Quiz — Algorithmes de tri',
  questions: [
    {
      question: "Qu'est-ce que trier un tableau signifie ?",
      choices: [
        "Supprimer les doublons",
        "Réordonner les éléments selon un critère (ex. ordre croissant)",
        "Chercher un élément rapidement",
        "Diviser le tableau en deux",
      ],
      answerIndex: 1,
      explanation:
        "Trier, c'est réordonner les éléments selon un critère de comparaison. L'entrée est une séquence non ordonnée, la sortie est la même séquence dans le bon ordre.",
    },
    {
      question: "Quelle est la différence entre tri interne et tri externe ?",
      choices: [
        "Le tri interne utilise des boucles, le tri externe utilise la récursion",
        "Le tri interne trie par ordre croissant, le tri externe par ordre décroissant",
        "Le tri interne travaille en RAM, le tri externe gère des données trop grandes pour la mémoire",
        "Il n'y a aucune différence, ce sont des synonymes",
      ],
      answerIndex: 2,
      explanation:
        "Le tri interne s'effectue entièrement en RAM. Le tri externe est utilisé quand les données sont trop volumineuses pour tenir en mémoire (ex. fichier de 500 Go) et nécessite des fusions sur disque.",
    },
    {
      question: "Quel est le principe du tri par sélection ?",
      choices: [
        "Comparer chaque paire d'éléments adjacents et les échanger si nécessaire",
        "Insérer chaque élément à sa place parmi les éléments déjà triés",
        "Chercher le minimum dans la partie non triée et l'échanger avec le premier élément",
        "Diviser le tableau en deux, trier chaque moitié, puis fusionner",
      ],
      answerIndex: 2,
      explanation:
        "Le tri par sélection cherche à chaque étape le minimum dans la partie non triée et l'échange avec le premier élément de cette partie. Il effectue au plus n−1 échanges.",
    },
    {
      question: "Quelle est la complexité du tri par sélection dans tous les cas ?",
      choices: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      answerIndex: 2,
      explanation:
        "Le tri par sélection est toujours O(n²), même si le tableau est déjà trié — il continue de chercher le minimum sans s'arrêter. C'est environ n(n−1)/2 comparaisons.",
    },
    {
      question: "À quelle analogie ressemble le tri par insertion ?",
      choices: [
        "Des bulles qui remontent dans un aquarium",
        "Trier des cartes à jouer dans sa main",
        "Chercher la plus petite chaussette dans un tiroir",
        "Diviser un tas de documents en deux piles",
      ],
      answerIndex: 1,
      explanation:
        "Le tri par insertion ressemble à trier ses cartes à jouer : on prend une carte et on la glisse à la bonne place parmi celles déjà triées. La main gauche est toujours ordonnée.",
    },
    {
      question: "Quel est le principe du tri à bulles ?",
      choices: [
        "Chercher le minimum et l'amener en tête",
        "Insérer chaque élément dans la bonne position",
        "Comparer les éléments adjacents et les échanger si le gauche est plus grand que le droit",
        "Diviser récursivement le tableau jusqu'aux éléments individuels",
      ],
      answerIndex: 2,
      explanation:
        "Le tri à bulles compare les voisins et les échange si nécessaire. Les grands éléments « remontent » vers la droite comme des bulles dans un aquarium.",
    },
    {
      question: "Quelle est la complexité dans le meilleur cas du tri à bulles optimisé ?",
      choices: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
      answerIndex: 2,
      explanation:
        "Avec l'optimisation (arrêt si aucun échange), le tri à bulles détecte un tableau déjà trié en un seul passage : O(n). C'est son unique avantage face au tri par sélection.",
    },
    {
      question: "Quel algorithme utilise l'approche « diviser pour régner » ?",
      choices: [
        "Tri par sélection",
        "Tri par insertion",
        "Tri à bulles",
        "Tri par fusion",
      ],
      answerIndex: 3,
      explanation:
        "Le tri par fusion (Merge Sort) divise le tableau en deux moitiés, trie chaque moitié récursivement, puis les fusionne. C'est le principe diviser-pour-régner.",
    },
    {
      question: "Quelle est la complexité du tri par fusion ?",
      choices: ["O(n²) dans tous les cas", "O(n log n) dans tous les cas", "O(n) dans le meilleur cas", "O(log n)"],
      answerIndex: 1,
      explanation:
        "Le tri par fusion est garanti O(n log n) dans tous les cas : meilleur, moyen et pire. C'est son grand avantage sur les tris O(n²).",
    },
    {
      question: "Quel est le principal inconvénient du tri par fusion ?",
      choices: [
        "Il est instable (les éléments égaux peuvent changer d'ordre)",
        "Il nécessite O(n) mémoire supplémentaire pour les tableaux temporaires",
        "Il est O(n²) dans le pire cas",
        "Il ne fonctionne pas sur les tableaux de taille impaire",
      ],
      answerIndex: 1,
      explanation:
        "Le tri par fusion nécessite O(n) mémoire supplémentaire pour stocker les tableaux temporaires lors de la fusion. C'est son principal inconvénient face au tri rapide (QuickSort).",
    },
  ],
}
