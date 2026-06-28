export const chapter1Quiz = [
  {
    question: "Qu'est-ce qu'un algorithme ?",
    choices: [
      'Une suite finie d\'instructions ordonnées pour résoudre un problème',
      'Un langage de programmation comme C++ ou Python',
      'Un programme qui tourne sur un ordinateur',
      'Une formule mathématique',
    ],
    answerIndex: 0,
    explanation:
      "Un algorithme est une suite finie d'instructions claires et ordonnées. Il a un début, des étapes précises, et une fin. Ce n'est pas du code : c'est la logique avant le code.",
  },
  {
    question: "Dans un algorithme, qu'est-ce que l'entrée (input) ?",
    choices: [
      'Le résultat produit par l\'algorithme',
      'Les données que l\'algorithme reçoit pour travailler',
      'Le nombre d\'étapes de l\'algorithme',
      'Le langage utilisé pour écrire l\'algorithme',
    ],
    answerIndex: 1,
    explanation:
      "L'entrée est ce que l'algorithme reçoit au départ. Par exemple, pour calculer une somme, les entrées sont les deux nombres a et b. La sortie est le résultat s = a + b.",
  },
  {
    question: "Qu'est-ce qu'une variable en pseudo-code ?",
    choices: [
      'Une boîte nommée qui stocke une valeur',
      'Une instruction qui répète un bloc de code',
      'Une condition entre deux valeurs',
      'Un type de boucle',
    ],
    answerIndex: 0,
    explanation:
      "Une variable est une boîte nommée qui contient une valeur. L'affectation (←) change le contenu de cette boîte. Exemple : x ← 5 met la valeur 5 dans la boîte x.",
  },
  {
    question: 'Après ces deux instructions, quelle est la valeur de x ?\nx ← 5\nx ← 10',
    choices: ['5', '10', '15', 'indéfinie'],
    answerIndex: 1,
    explanation:
      "L'affectation x ← 10 remplace l'ancienne valeur 5. La variable x contient maintenant 10. L'ancienne valeur est perdue.",
  },
  {
    question: "Que fait l'instruction suivante ?\nsi moyenne >= 10 alors afficher \"Admis\" sinon afficher \"Ajourné\"",
    choices: [
      'Elle affiche toujours "Admis"',
      'Elle choisit entre deux branches selon la valeur de moyenne',
      'Elle calcule la moyenne',
      'Elle répète l\'affichage 10 fois',
    ],
    answerIndex: 1,
    explanation:
      "C'est une condition. Si la moyenne est >= 10, on affiche \"Admis\", sinon on affiche \"Ajourné\". La condition choisit une branche selon le résultat du test.",
  },
  {
    question: 'Quelle boucle utilise-t-on quand on connaît à l\'avance le nombre de répétitions ?',
    choices: [
      'tant que',
      'répéter … jusqu\'à',
      'pour',
      'si … sinon',
    ],
    answerIndex: 2,
    explanation:
      "La boucle \"pour\" (for) est faite pour un nombre de répétitions connu à l'avance. Exemple : pour i ← 1 à 5 faire … fin pour répète 5 fois exactement.",
  },
  {
    question: 'Quelle boucle utilise-t-on quand la répétition dépend d\'une condition ?',
    choices: [
      'pour',
      'tant que',
      'si … sinon',
      'afficher',
    ],
    answerIndex: 1,
    explanation:
      "La boucle \"tant que\" (while) répète tant qu'une condition est vraie. On ne sait pas forcément à l'avance combien de fois elle va tourner.",
  },
  {
    question: 'Qu\'est-ce qu\'une trace d\'exécution ?',
    choices: [
      'Le code source d\'un programme',
      'Un tableau qui montre l\'évolution des variables étape par étape',
      'Le résultat final d\'un algorithme',
      'Le nombre total d\'instructions exécutées',
    ],
    answerIndex: 1,
    explanation:
      "Une trace d'exécution montre comment les variables évoluent à chaque étape. Elle sert à déboguer, à comprendre les boucles, et à vérifier qu'un algorithme produit le bon résultat.",
  },
  {
    question: 'Quel est le risque si on oublie de mettre à jour une variable à l\'intérieur d\'une boucle ?',
    choices: [
      'La boucle s\'exécute deux fois',
      'La boucle ne démarre jamais',
      'La boucle tourne à l\'infini (boucle infinie)',
      'Le programme affiche une erreur de syntaxe',
    ],
    answerIndex: 2,
    explanation:
      "Si la condition de sortie de la boucle dépend d'une variable qui n'est jamais mise à jour, la condition reste toujours vraie et la boucle ne s'arrête jamais. C'est une boucle infinie.",
  },
  {
    question: 'Pourquoi le pseudo-code est-il utile ?',
    choices: [
      'Il s\'exécute directement sur un ordinateur',
      'Il décrit la logique d\'un algorithme sans se soucier de la syntaxe d\'un langage',
      'Il est plus rapide que le C++',
      'Il remplace les schémas et les diagrammes',
    ],
    answerIndex: 1,
    explanation:
      "Le pseudo-code décrit la logique sans contraintes de syntaxe. Il est facile à lire et à traduire ensuite dans n'importe quel langage : C++, Python, Java, etc.",
  },
]
