import { chapter2Quiz } from './chapter2Quiz.js'

export const chapter2 = {
  number: 'Chapitre 2',
  title: 'Complexité algorithmique',
  badge: 'Chapitre 2 • Actif',
  intro:
    "Un algorithme peut être correct mais lent. Ce chapitre explique comment mesurer et comparer le coût d'un algorithme selon la taille des données : O(1), O(log n), O(n) et O(n²).",
  resourceFile: '/resources/courses/Chapitre2_Complexite_Khadhraoui.pdf',
  sections: [
    {
      id: 'pourquoi',
      heading: 'Pourquoi mesurer la complexité ?',
      explanation:
        "La complexité estime combien de temps ou de mémoire un algorithme nécessite quand la taille des données grandit. On s'intéresse à la croissance, pas aux secondes exactes.",
      analogy:
        "Comme comparer deux routes : l'une reste courte, l'autre devient catastrophique quand la ville s'agrandit.",
      keyPoints: [
        'Comparer des algorithmes indépendamment de la machine',
        'Prédire le comportement sur de grandes données',
        'Ignorer les détails spécifiques à la machine',
      ],
    },
    {
      id: 'compter',
      heading: 'Compter les opérations',
      explanation:
        "On compte les opérations importantes répétées. On simplifie les constantes : ce qui compte, c'est la tendance de croissance.",
      pseudoCode: `s ← 0\npour i ← 1 à n faire\n  s ← s + i\nfin pour`,
      keyPoints: [
        'La boucle tourne n fois',
        'Chaque itération fait une opération constante',
        'Complexité totale : O(n)',
      ],
    },
    {
      id: 'o1',
      heading: 'O(1) — temps constant',
      explanation:
        "Le nombre d'opérations ne grandit pas avec n. L'accès direct à un élément d'un tableau coûte toujours le même effort.",
      pseudoCode: `afficher T[0]`,
      keyPoints: [
        'Accès direct, coût fixe',
        'Même coût pour un petit ou un grand tableau',
        'Catégorie de croissance la plus rapide',
      ],
    },
    {
      id: 'on',
      heading: 'O(n) — linéaire',
      explanation:
        'Le travail grandit proportionnellement à n. Doubler n double environ le travail.',
      pseudoCode: `pour i ← 0 à n-1 faire\n  afficher T[i]\nfin pour`,
      keyPoints: [
        'Une seule boucle simple',
        'Doubler n double environ le travail',
      ],
    },
    {
      id: 'on2',
      heading: 'O(n²) — quadratique',
      explanation:
        'Apparaît souvent avec deux boucles imbriquées parcourant toutes les deux n éléments.',
      pseudoCode: `pour i ← 0 à n-1 faire\n  pour j ← 0 à n-1 faire\n    afficher T[i], T[j]\n  fin pour\nfin pour`,
      keyPoints: [
        'Boucles imbriquées toutes les deux en n',
        'Doubler n peut multiplier le travail par 4',
        'Dangereux pour de grands n',
      ],
    },
    {
      id: 'ologn',
      heading: 'O(log n) — logarithmique',
      explanation:
        'La taille du problème est divisée par 2 à chaque étape. Même pour n très grand, le nombre d\'étapes reste petit.',
      analogy:
        'Chercher un mot dans un dictionnaire en l\'ouvrant toujours au milieu de la partie restante.',
      pseudoCode: `tant que debut <= fin faire\n  milieu ← (debut + fin) / 2\n  si T[milieu] = x alors\n    retourner milieu\n  sinon si T[milieu] < x alors\n    debut ← milieu + 1\n  sinon\n    fin ← milieu - 1\n  fin si\nfin tant que`,
    },
    {
      id: 'imbriquees',
      heading: 'Boucles imbriquées',
      explanation:
        'Toutes les boucles imbriquées ne sont pas automatiquement O(n²). On obtient O(n²) seulement si les deux boucles dépendent de n.',
      pseudoCode: `pour i ← 1 à n faire\n  pour j ← 1 à n faire\n    compteur ← compteur + 1\n  fin pour\nfin pour`,
      keyPoints: [
        'Boucle externe : n fois',
        'Boucle interne : n fois pour chaque itération externe',
        'Total : n × n opérations',
      ],
    },
    {
      id: 'dichotomie',
      heading: 'Recherche dichotomique',
      explanation:
        "Fonctionne uniquement sur des données triées. À chaque étape, on élimine la moitié de l'espace de recherche restant.",
      keyPoints: [
        'Nécessite un tableau trié',
        'Très rapide pour de grands n',
        'Complexité typique : O(log n)',
      ],
    },
    {
      id: 'courbes',
      heading: 'Comparer les croissances',
      explanation:
        'Le visualiseur ci-dessous compare comment les fonctions grandissent quand n augmente.',
      isCallout: true,
      calloutText:
        'Déplace le curseur : tu verras pourquoi O(n²) devient vite beaucoup plus grand que O(n).',
    },
    {
      id: 'erreurs',
      heading: 'Erreurs classiques',
      warning: 'Ces erreurs apparaissent souvent dans les exercices de complexité.',
      keyPoints: [
        'Garder les constantes comme O(2n) au lieu de simplifier en O(n)',
        'Confondre O(n) et O(n²)',
        'Oublier que la recherche dichotomique nécessite un tableau trié',
        'Compter des secondes exactes au lieu de mesurer la croissance',
        'Supposer que toute boucle imbriquée est automatiquement O(n²) sans vérifier les bornes',
      ],
    },
    {
      id: 'suite',
      heading: 'La suite',
      isCallout: true,
      calloutText:
        'Tu sais maintenant comparer le coût des algorithmes. La suite logique est de comprendre les pointeurs et les structures pour construire des listes, piles et files.',
    },
  ],
  quiz: {
    title: 'Quiz — Complexité algorithmique',
    questions: chapter2Quiz,
  },
  hasComplexityViz: true,
}
