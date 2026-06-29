import { chapter4Quiz } from './chapter4Quiz.js'

export const chapter4 = {
  number: 'Chapitre 4',
  title: 'Pointeurs & structures',
  badge: 'Chapitre 4 • Actif',
  intro:
    "Un programme stocke ses données en mémoire. Ce chapitre explique comment les pointeurs permettent d'accéder directement à ces emplacements, et comment les structures, listes chaînées, piles et files organisent ces données.",
  resourceFile: '/resources/courses/Chapitre4_Pointeurs-et-Structures-de-donnees_Khadhraoui.pdf',
  sections: [
    {
      id: 'adresse',
      heading: "C'est quoi une adresse mémoire ?",
      explanation:
        "La mémoire peut être imaginée comme un ensemble de cases numérotées. Chaque variable est stockée quelque part en mémoire. Une adresse identifie l'emplacement où une valeur est rangée.",
      analogy:
        "Comme une adresse postale : la valeur est à l'intérieur de la maison, l'adresse indique où la trouver.",
      keyPoints: [
        'La mémoire contient des valeurs dans des cases numérotées',
        'Chaque emplacement a une adresse unique',
        'Les pointeurs servent à stocker ces adresses',
      ],
    },
    {
      id: 'pointeur-valeur',
      heading: 'Pointeur vs valeur',
      explanation:
        "Une variable ordinaire stocke une valeur. Un pointeur stocke l'adresse d'une autre valeur.",
      pseudoCode: `int x = 10;\nint* p = &x;`,
      keyPoints: [
        'x contient 10',
        '&x signifie : adresse de x',
        "p contient l'adresse de x, pas sa valeur",
      ],
    },
    {
      id: 'deref',
      heading: 'Déréférencement',
      explanation:
        "Déréférencer signifie accéder à la valeur pointée par un pointeur. En écrivant *p, on suit l'adresse contenue dans p pour lire ou modifier la valeur à cet emplacement.",
      pseudoCode: `int x = 10;\nint* p = &x;\n*p = 20;`,
      keyPoints: [
        "& obtient l'adresse d'une variable",
        "* suit l'adresse (déréférence)",
        'Modifier *p modifie la variable originale (ici x devient 20)',
      ],
    },
    {
      id: 'tableaux',
      heading: 'Tableaux et pointeurs',
      explanation:
        "Un tableau stocke des valeurs dans des cases mémoire contiguës. Le nom du tableau est souvent utilisé comme l'adresse de son premier élément.",
      pseudoCode: `T[0], T[1], T[2]`,
      keyPoints: [
        'Les éléments sont ordonnés et contigus en mémoire',
        "L'index donne la position dans le tableau",
        "L'arithmétique de pointeurs permet de se déplacer de case en case",
      ],
    },
    {
      id: 'alloc',
      heading: 'Allocation dynamique',
      explanation:
        "L'allocation dynamique réserve de la mémoire pendant l'exécution du programme. Elle est utile quand la taille n'est pas connue à l'avance.",
      pseudoCode: `int* p = new int;\n*p = 5;\ndelete p;`,
      warning:
        "Après avoir libéré la mémoire (delete), utiliser le pointeur est dangereux : c'est un pointeur fantôme.",
    },
    {
      id: 'struct',
      heading: 'struct',
      explanation:
        "Une structure regroupe plusieurs champs sous un même nom. Elle permet de représenter un objet avec plusieurs propriétés.",
      pseudoCode: `struct Etudiant {\n  string nom;\n  int age;\n};`,
      keyPoints: [
        'Regroupe des données liées sous un seul nom',
        'Rend le code plus lisible et organisé',
        'Utile pour les nœuds des listes chaînées',
      ],
    },
    {
      id: 'liste',
      heading: 'Liste chaînée',
      explanation:
        "Une liste chaînée est composée de nœuds. Chaque nœud contient une valeur et un pointeur vers le nœud suivant. Le dernier nœud pointe vers NULL.",
      pseudoCode: `struct Noeud {\n  int valeur;\n  Noeud* suivant;\n};`,
      keyPoints: [
        'Chaque nœud stocke une valeur et un lien vers le suivant',
        "Pas de taille fixe : on ajoute des nœuds selon les besoins",
        "Parcours en suivant les pointeurs jusqu'à NULL",
      ],
    },
    {
      id: 'pile',
      heading: 'Pile (stack)',
      explanation:
        "Une pile suit le principe LIFO : Last In, First Out. Le dernier élément ajouté est le premier à sortir.",
      analogy:
        "Comme une pile d'assiettes : on pose en haut, on reprend en haut.",
      pseudoCode: `empiler(10)\nempiler(20)\ndepiler()  // retourne 20`,
      keyPoints: [
        'empiler (push) : ajouter en haut',
        'dépiler (pop) : retirer en haut',
        'Le dernier entré sort en premier',
      ],
    },
    {
      id: 'file',
      heading: 'File (queue)',
      explanation:
        "Une file suit le principe FIFO : First In, First Out. Le premier élément ajouté est le premier à sortir.",
      analogy:
        "Comme une file d'attente : le premier arrivé est le premier servi.",
      pseudoCode: `enfiler(10)\nenfiler(20)\ndefiler()  // retourne 10`,
      keyPoints: [
        'enfiler (enqueue) : ajouter en queue',
        'défiler (dequeue) : retirer en tête',
        'Le premier entré sort en premier',
      ],
    },
    {
      id: 'erreurs',
      heading: 'Erreurs classiques',
      warning: 'Ces erreurs sont très fréquentes avec les pointeurs.',
      keyPoints: [
        'Utiliser un pointeur non initialisé',
        'Déréférencer un pointeur nul (crash)',
        'Oublier de libérer la mémoire allouée dynamiquement',
        'Utiliser la mémoire après delete (pointeur fantôme)',
        "Perdre l'adresse d'une zone allouée sans pouvoir la libérer",
        'Confondre le pointeur et la valeur pointée (* vs &)',
      ],
    },
    {
      id: 'suite',
      heading: 'La suite',
      isCallout: true,
      calloutText:
        "Tu as maintenant les bases pour comprendre les listes chaînées, les piles et les files dans les TD/TP. Entraîne-toi avec les exercices pour solidifier ces notions.",
    },
  ],
  quiz: {
    title: 'Quiz — Pointeurs & structures',
    questions: chapter4Quiz,
  },
  hasMemoryViz: true,
}
