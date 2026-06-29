export const chapter4Quiz = [
  {
    question: "Qu'est-ce qu'une adresse mémoire ?",
    choices: [
      "Un identifiant numérique qui indique où une valeur est stockée en mémoire",
      "Le nom d'une variable dans le code",
      "La valeur entière stockée dans une variable",
      "Une ligne de code dans un programme",
    ],
    answerIndex: 0,
    explanation:
      "La mémoire peut être vue comme des cases numérotées. Une adresse identifie la position d'une valeur dans ces cases.",
  },
  {
    question: "Que contient un pointeur ?",
    choices: [
      "La valeur d'une autre variable directement",
      "L'adresse d'une autre variable",
      "Le nom d'une fonction",
      "Un index de tableau",
    ],
    answerIndex: 1,
    explanation:
      "Un pointeur stocke l'adresse d'une autre variable, pas sa valeur. C'est ce qui le distingue d'une variable ordinaire.",
  },
  {
    question: "Que fait l'opérateur & en C++ ?",
    choices: [
      "Il déréférence un pointeur",
      "Il multiplie deux valeurs",
      "Il renvoie l'adresse d'une variable",
      "Il libère de la mémoire",
    ],
    answerIndex: 2,
    explanation:
      "L'opérateur & (adresse-de) renvoie l'adresse mémoire d'une variable. Exemple : &x donne l'adresse de x.",
  },
  {
    question: "Que fait l'opérateur * appliqué à un pointeur ?",
    choices: [
      "Il calcule la taille du pointeur",
      "Il accède à la valeur pointée (déréférencement)",
      "Il libère la mémoire allouée",
      "Il copie le pointeur",
    ],
    answerIndex: 1,
    explanation:
      "L'opérateur * sur un pointeur (déréférencement) permet d'accéder ou de modifier la valeur à l'adresse stockée dans le pointeur.",
  },
  {
    question: "Après int x = 10; int* p = &x; *p = 20; — quelle est la valeur de x ?",
    choices: ["10", "20", "0", "indéfinie"],
    answerIndex: 1,
    explanation:
      "*p = 20 modifie la valeur à l'adresse contenue dans p, soit l'adresse de x. Donc x devient 20.",
  },
  {
    question: "À quoi sert l'allocation dynamique (new / malloc) ?",
    choices: [
      "À déclarer des variables locales dans une fonction",
      "À réserver de la mémoire pendant l'exécution quand la taille n'est pas connue à l'avance",
      "À copier un tableau existant",
      "À libérer de la mémoire automatiquement",
    ],
    answerIndex: 1,
    explanation:
      "L'allocation dynamique permet de réserver de la mémoire au moment de l'exécution. C'est utile quand la taille dépend des données entrées.",
  },
  {
    question: "Que risque-t-on si on utilise un pointeur après avoir libéré la mémoire (delete) ?",
    choices: [
      "Le programme devient plus rapide",
      "Rien, c'est toujours valide",
      "Un comportement indéfini ou un crash",
      "La valeur pointée revient à 0",
    ],
    answerIndex: 2,
    explanation:
      "Utiliser un pointeur après delete (pointeur fantôme) entraîne un comportement indéfini. La mémoire libérée peut être réutilisée par autre chose.",
  },
  {
    question: "Qu'est-ce qu'une structure (struct) en C++ ?",
    choices: [
      "Un tableau de valeurs du même type",
      "Un regroupement de plusieurs champs sous un seul nom",
      "Une fonction qui retourne plusieurs valeurs",
      "Un type entier spécial",
    ],
    answerIndex: 1,
    explanation:
      "Une struct regroupe des champs de types différents sous un nom commun. Exemple : struct Etudiant { string nom; int age; };",
  },
  {
    question: "Dans une liste chaînée, que contient chaque nœud ?",
    choices: [
      "Une valeur et un pointeur vers le nœud suivant",
      "Uniquement une valeur entière",
      "Deux valeurs et aucun pointeur",
      "Un index et une clé de tri",
    ],
    answerIndex: 0,
    explanation:
      "Chaque nœud d'une liste chaînée stocke une valeur et un pointeur vers le nœud suivant. Le dernier nœud pointe vers NULL.",
  },
  {
    question: "Quelle est la différence entre une pile (stack) et une file (queue) ?",
    choices: [
      "La pile est FIFO, la file est LIFO",
      "La pile est LIFO (dernier entré, premier sorti) ; la file est FIFO (premier entré, premier sorti)",
      "Il n'y a aucune différence, les deux sont LIFO",
      "La pile stocke des pointeurs, la file stocke des valeurs",
    ],
    answerIndex: 1,
    explanation:
      "Une pile (stack) suit LIFO : le dernier élément ajouté est le premier retiré. Une file (queue) suit FIFO : le premier entré est le premier sorti.",
  },
]
