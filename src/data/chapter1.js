import { chapter1Quiz } from './chapter1Quiz.js'

export const chapter1 = {
  number: 'Chapitre 1',
  title: 'Introduction & pseudo-code',
  badge: 'Chapitre 1 • Actif',
  intro:
    "Un algorithme, c'est une recette. Avant d'écrire une seule ligne de C++, tu dois savoir quoi faire étape par étape. Ce chapitre pose les bases : variables, conditions, boucles, et pseudo-code.",
  resourceFile: '/resources/courses/Chapitre1_Intro.pptx',
  sections: [
    {
      id: 'algorithme',
      heading: "C'est quoi un algorithme ?",
      explanation:
        "Un algorithme est une suite finie d'instructions claires et ordonnées pour résoudre un problème. Il a un point de départ, des étapes précises, et une fin.",
      analogy:
        "C'est comme une recette de cuisine : les ingrédients sont les entrées, les étapes sont les instructions, et le plat final est la sortie.",
      keyPoints: [
        'Fini : il s\'arrête toujours',
        'Ordonné : les étapes suivent un ordre précis',
        'Précis : chaque instruction est claire et non ambiguë',
        'Résout un problème : il transforme des entrées en sorties',
      ],
    },
    {
      id: 'entrees-sorties',
      heading: 'Entrées et sorties',
      explanation:
        "L'entrée est ce que l'algorithme reçoit. La sortie est ce qu'il produit. Tout algorithme consomme des données et produit un résultat.",
      pseudoCode: `Algorithme Somme
Entrée : a, b
Sortie : s
s ← a + b
afficher s`,
    },
    {
      id: 'variables',
      heading: 'Variables et affectation',
      explanation:
        "Une variable est une boîte nommée qui stocke une valeur. L'affectation (←) change le contenu de la boîte. L'ancienne valeur est perdue.",
      pseudoCode: `x ← 5
y ← x + 2
x ← 10`,
      keyPoints: [
        'Après x ← 10, l\'ancienne valeur 5 est remplacée',
        'y vaut 7 (calculé quand x valait encore 5)',
        'L\'ordre des affectations est important',
      ],
    },
    {
      id: 'conditions',
      heading: 'Conditions',
      explanation:
        "Une condition choisit entre deux branches selon le résultat d'un test. Si le test est vrai, on exécute la branche \"alors\", sinon la branche \"sinon\".",
      analogy:
        "S'il pleut, prends un parapluie. Sinon, sors normalement.",
      pseudoCode: `si moyenne >= 10 alors
  afficher "Admis"
sinon
  afficher "Ajourné"
fin si`,
    },
    {
      id: 'boucles',
      heading: 'Boucles',
      explanation:
        "Une boucle répète des instructions. On utilise \"pour\" quand on connaît à l'avance le nombre de répétitions, et \"tant que\" quand la répétition dépend d'une condition.",
      pseudoCode: `pour i ← 1 à 5 faire
  afficher i
fin pour

tant que x > 0 faire
  x ← x - 1
fin tant que`,
      keyPoints: [
        '"pour" : nombre de répétitions connu à l\'avance',
        '"tant que" : on répète tant qu\'une condition est vraie',
        'Toujours vérifier que la boucle finit par s\'arrêter',
      ],
    },
    {
      id: 'pseudo-code',
      heading: 'Le pseudo-code standard',
      explanation:
        "Le pseudo-code n'est ni du C++ ni du Python. Il décrit la logique clairement avant de coder. On peut le traduire ensuite dans n'importe quel langage.",
      pseudoCode: `Algorithme Maximum
Entrée : T, n
Sortie : max
max ← T[0]
pour i ← 1 à n-1 faire
  si T[i] > max alors
    max ← T[i]
  fin si
fin pour
afficher max`,
      keyPoints: [
        'Évite la complexité syntaxique des langages',
        'Se concentre sur la logique',
        'Facile à traduire en C++, Python, Java…',
      ],
    },
    {
      id: 'trace',
      heading: "Trace d'exécution",
      explanation:
        "Une trace montre comment les variables évoluent à chaque étape. Elle sert à déboguer et à comprendre les boucles.",
      isCallout: true,
      calloutText:
        "Regarde le traceur ci-dessous : il montre comment l'algorithme cherche le maximum dans un tableau.",
    },
    {
      id: 'erreurs',
      heading: 'Erreurs classiques',
      warning: 'Ces erreurs reviennent souvent dans les TD et les examens.',
      keyPoints: [
        'Oublier d\'initialiser une variable avant la boucle',
        'Confondre ← (affectation) avec = (comparaison)',
        'Écrire une boucle dont la condition reste toujours vraie (boucle infinie)',
        'Oublier de mettre à jour une variable à l\'intérieur de la boucle',
        'Oublier le "sinon" quand il change le résultat',
      ],
    },
    {
      id: 'suite',
      heading: 'La suite',
      isCallout: true,
      calloutText:
        "Tu maîtrises maintenant la base : variables, conditions, boucles et pseudo-code. La prochaine étape est de mesurer le coût d'un algorithme avec la complexité.",
    },
  ],
  quiz: {
    title: 'Quiz — Introduction & pseudo-code',
    questions: chapter1Quiz,
  },
  hasPseudoTracer: true,
}
