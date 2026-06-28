export const chapter2Quiz = [
  {
    question: 'Pourquoi mesure-t-on la complexité d\'un algorithme ?',
    choices: [
      'Pour comparer des algorithmes et prédire leur comportement sur de grandes données',
      'Pour mesurer le temps exact en secondes sur une machine donnée',
      'Pour compter le nombre de lignes de code',
      'Pour vérifier que le code est correctement indenté',
    ],
    answerIndex: 0,
    explanation:
      'La complexité mesure la croissance du coût selon la taille de l\'entrée. On veut comparer des algorithmes indépendamment de la machine utilisée.',
  },
  {
    question: 'La complexité mesure-t-elle le temps exact en secondes ?',
    choices: [
      'Oui, elle donne le temps précis sur n\'importe quelle machine',
      'Non, elle mesure la croissance du coût quand n augmente, pas des secondes',
      'Oui, mais seulement sur les ordinateurs modernes',
      'Non, elle mesure uniquement la mémoire utilisée',
    ],
    answerIndex: 1,
    explanation:
      'La complexité s\'intéresse à la croissance, pas aux secondes. Un algorithme O(n) reste O(n) quelle que soit la vitesse de la machine.',
  },
  {
    question: 'Quelle est la complexité d\'un accès direct à un élément d\'un tableau (ex: afficher T[0]) ?',
    choices: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
    answerIndex: 3,
    explanation:
      'Accéder à T[0] coûte le même effort peu importe la taille du tableau. C\'est O(1) : temps constant.',
  },
  {
    question: 'Un algorithme parcourt un tableau de taille n avec une seule boucle simple. Quelle est sa complexité ?',
    choices: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    answerIndex: 2,
    explanation:
      'Une boucle simple qui répète n fois une opération constante donne O(n) : le coût grandit proportionnellement à n.',
  },
  {
    question: 'Deux boucles imbriquées parcourent chacune un tableau de taille n. Quelle est la complexité typique ?',
    choices: ['O(n)', 'O(2n)', 'O(n²)', 'O(log n)'],
    answerIndex: 2,
    explanation:
      'Quand deux boucles dépendent toutes les deux de n, on effectue n × n opérations, soit O(n²).',
  },
  {
    question: 'Quelle complexité est associée à la recherche dichotomique ?',
    choices: ['O(n)', 'O(n²)', 'O(1)', 'O(log n)'],
    answerIndex: 3,
    explanation:
      'La recherche dichotomique divise l\'espace de recherche par 2 à chaque étape. Cela donne O(log n).',
  },
  {
    question: 'Combien de fois la boucle s\'exécute-t-elle dans ce pseudo-code ?\npour i ← 1 à n faire\n  s ← s + i\nfin pour',
    choices: ['1 fois', 'n fois', 'n² fois', 'log n fois'],
    answerIndex: 1,
    explanation:
      'La boucle tourne exactement n fois. Chaque itération fait une opération constante, donc la complexité est O(n).',
  },
  {
    question: 'Deux boucles imbriquées donnent toujours O(n²). Est-ce vrai ?',
    choices: [
      'Oui, toujours',
      'Non, seulement si les deux boucles dépendent de n',
      'Oui, car deux boucles multiplient toujours leur coût',
      'Non, les boucles imbriquées donnent toujours O(2n)',
    ],
    answerIndex: 1,
    explanation:
      'Si une boucle interne a une borne fixe (par exemple jusqu\'à 10), la complexité reste O(n). On obtient O(n²) seulement si les deux boucles dépendent de n.',
  },
  {
    question: 'La recherche dichotomique peut-elle s\'appliquer à n\'importe quel tableau ?',
    choices: [
      'Oui, sur tout type de tableau',
      'Non, le tableau doit être trié au préalable',
      'Oui, mais seulement sur des tableaux de nombres',
      'Non, elle ne fonctionne que sur les listes chaînées',
    ],
    answerIndex: 1,
    explanation:
      'La recherche dichotomique exige un tableau trié. Sans cela, couper en deux ne garantit pas que l\'élément cherché est d\'un côté ou de l\'autre.',
  },
  {
    question: 'Peut-on simplifier O(2n) en O(n) ?',
    choices: [
      'Non, O(2n) est deux fois plus lent donc différent',
      'Oui, les constantes multiplicatives disparaissent en notation O',
      'Non, O(2n) et O(n) sont deux classes différentes',
      'Oui, mais seulement si n est grand',
    ],
    answerIndex: 1,
    explanation:
      'En notation grand O, on ignore les constantes. O(2n) = O(n) car le facteur 2 ne change pas la classe de croissance.',
  },
]
