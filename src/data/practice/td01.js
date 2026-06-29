export const td01Practice = {
  id: 'td-01',
  title: 'TD 01 — Pointeurs, Récursivité, Complexité et Structures',
  badge: 'Pratique guidée • TD 01',
  difficulty: 'Intermédiaire',
  estimatedTime: '60–90 min',
  sourceLabel: 'Télécharger le TD PDF',
  sourceUrl: '/resources/tds/TD-01.pdf',
  intro:
    'Ce TD porte sur les fondamentaux du cours : récursivité, complexité algorithmique, manipulation de pointeurs et structures, et implémentation des structures de données linéaires (listes chaînées, piles, files).',
  chapters: [
    { label: 'Chapitre 1 — Intro & pseudo-code', href: '#/chapitre-1-intro' },
    { label: 'Chapitre 2 — Complexité', href: '#/chapitre-2-complexite' },
    { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
  ],
  exercises: [
    {
      id: 'ex-01',
      number: '01',
      title: 'Analyse d\'un programme récursif',
      enonce: `Considérons le programme C++ suivant :

void m(int n) {
  if (n == 0) return;
  m(n - 1);
  cout << n << endl;
}

int main() {
  m(5);
  return 0;
}

1. Donner l'affichage exact produit par ce programme.
2. Justifier le résultat obtenu (comportement récursif, pile d'appels).`,
      indice:
        'La fonction s\'appelle elle-même avec n-1 avant d\'afficher n. Que se passe-t-il quand n vaut 0 ? Dans quel ordre les appels se terminent-ils ?',
      solution: `L'affichage est :
1
2
3
4
5

La récursion descend jusqu'à m(0) sans rien afficher, puis en remontant chaque appel affiche sa valeur de n.`,
      explication:
        'La récursion empile les appels m(5) → m(4) → … → m(0). m(0) retourne immédiatement. En dépilant, chaque frame affiche son n : 1, 2, 3, 4, 5. C\'est le principe LIFO de la pile d\'appels.',
      chapters: [
        { label: 'Chapitre 1 — Intro & pseudo-code', href: '#/chapitre-1-intro' },
      ],
    },
    {
      id: 'ex-02',
      number: '02',
      title: 'Analyse de complexité',
      enonce: `Soit l'algorithme suivant :

pour i ← 1 à n faire
  pour j ← 1 à i faire
    afficher(j)
  fin pour
fin pour

1. Combien de fois l'opération d'initialisation de la variable j est-elle exécutée ?
2. Combien de fois l'opération d'incrémentation de j est-elle exécutée ?`,
      indice:
        'Pour chaque valeur de i, la boucle interne exécute i itérations. Faites la somme de 1 + 2 + 3 + … + n.',
      solution: `1. L'initialisation j ← 1 est exécutée n fois (une par valeur de i).
2. L'incrémentation de j est exécutée 1 + 2 + 3 + … + n = n(n+1)/2 fois.

La complexité globale est O(n²).`,
      explication:
        'La somme 1+2+…+n = n(n+1)/2 est la formule de Gauss. Quand n est grand, n(n+1)/2 ≈ n²/2, d\'où une complexité quadratique O(n²). C\'est typique d\'une double boucle imbriquée triangulaire.',
      chapters: [
        { label: 'Chapitre 2 — Complexité', href: '#/chapitre-2-complexite' },
      ],
    },
    {
      id: 'ex-03',
      number: '03',
      title: 'Structures, tableaux et pointeurs',
      enonce: `On dispose de la structure suivante :

struct Etudiant {
  int matricule;
  float moyenne;
  char nom[30];
};

Etudiant T[100];
int n;

3.1 Saisir les données des n étudiants dans le tableau T en utilisant uniquement des pointeurs.
3.2 Écrire une fonction qui recherche, à l'aide d'un pointeur, l'étudiant ayant la meilleure moyenne.
3.3 Écrire une fonction qui échange deux étudiants en utilisant des pointeurs.
      Prototype : void echanger(Etudiant* a, Etudiant* b);
3.4 Trier le tableau T par ordre décroissant des moyennes en utilisant la fonction d'échange et uniquement des pointeurs.
3.5 Afficher le contenu du tableau trié en utilisant un pointeur de parcours.`,
      indice:
        'Pour parcourir T par pointeur, utilisez Etudiant* p = T; et incrémentez p++. Pour l\'échange, utilisez une variable temporaire de type Etudiant.',
      solution: `// 3.1 Saisie par pointeur
for (Etudiant* p = T; p < T + n; p++) {
  cin >> p->matricule >> p->moyenne >> p->nom;
}

// 3.2 Meilleure moyenne
Etudiant* meilleur(Etudiant* T, int n) {
  Etudiant* best = T;
  for (Etudiant* p = T + 1; p < T + n; p++)
    if (p->moyenne > best->moyenne) best = p;
  return best;
}

// 3.3 Échange
void echanger(Etudiant* a, Etudiant* b) {
  Etudiant tmp = *a;
  *a = *b;
  *b = tmp;
}

// 3.4 Tri décroissant (sélection)
for (Etudiant* i = T; i < T + n - 1; i++) {
  Etudiant* max = i;
  for (Etudiant* j = i + 1; j < T + n; j++)
    if (j->moyenne > max->moyenne) max = j;
  echanger(i, max);
}

// 3.5 Affichage
for (Etudiant* p = T; p < T + n; p++)
  cout << p->nom << " " << p->moyenne << endl;`,
      explication:
        'Un pointeur sur tableau s\'incrémente d\'un élément à la fois (arithmétique des pointeurs). L\'échange par valeur (*a, *b) copie la struct entière — c\'est correct mais coûteux si la struct est grande. Pour un vrai tri en O(n²), le tri par sélection est simple et lisible.',
      chapters: [
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
    },
    {
      id: 'ex-04',
      number: '04',
      title: 'Listes chaînées et piles',
      enonce: `Écrire les algorithmes permettant de :

1. Trouver l'élément situé au milieu d'une liste chaînée simple.
2. Inverser les éléments d'une pile, éventuellement en utilisant une seconde structure.
3. Diviser une pile P1 d'entiers en deux piles :
   - P2 contient les entiers impairs
   - P3 contient les entiers pairs
   À la fin, P1 doit être vide.`,
      indice:
        '1. Astuce des deux pointeurs : un avance d\'un nœud, l\'autre de deux — quand le rapide arrive à la fin, le lent est au milieu. 2. Transférer vers une pile auxiliaire inverse l\'ordre. 3. Dépiler P1 un à un et dispatcher selon parité.',
      solution: `// 1. Milieu de liste (pointeurs lent/rapide)
place* milieu(place* L) {
  place* lent = L, *rapide = L;
  while (rapide && rapide->suiv) {
    lent = lent->suiv;
    rapide = rapide->suiv->suiv;
  }
  return lent;
}

// 2. Inverser une pile via pile auxiliaire
void inverser(Pile& P) {
  Pile tmp = nullptr;
  while (!pileVide(P)) {
    empiler(tmp, sommet(P));
    depiler(P);
  }
  P = tmp;
}

// 3. Diviser P1 en P2 (impairs) et P3 (pairs)
void diviser(Pile& P1, Pile& P2, Pile& P3) {
  while (!pileVide(P1)) {
    int v = sommet(P1); depiler(P1);
    if (v % 2 != 0) empiler(P2, v);
    else             empiler(P3, v);
  }
}`,
      explication:
        'L\'algorithme lent/rapide (Floyd) trouve le milieu en O(n) avec O(1) mémoire. Inverser une pile via une auxiliaire coûte O(n) temps et O(n) mémoire supplémentaire — inévitable car une pile ne permet l\'accès qu\'au sommet. La division en pairs/impairs vide P1 en O(n) en une seule passe.',
      chapters: [
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
    },
    {
      id: 'ex-05',
      number: '05',
      title: 'Implémentation d\'une pile avec un tableau',
      enonce: `1. Proposer une structure de données permettant de représenter une pile à l'aide d'un tableau et d'un indice sommet.
2. Écrire les algorithmes suivants :
   - pileVide
   - empiler
   - depiler
   - sommet`,
      indice:
        'La structure contient un tableau de taille MAX et un entier sommet initialisé à -1. La pile est vide quand sommet == -1, pleine quand sommet == MAX-1.',
      solution: `const int MAX = 100;

struct PileTab {
  int data[MAX];
  int sommet; // initialisé à -1
};

bool pileVide(PileTab& P) {
  return P.sommet == -1;
}

void empiler(PileTab& P, int v) {
  if (P.sommet < MAX - 1)
    P.data[++P.sommet] = v;
  // sinon : pile pleine
}

void depiler(PileTab& P) {
  if (!pileVide(P)) P.sommet--;
}

int sommet(PileTab& P) {
  return P.data[P.sommet];
}`,
      explication:
        'Une pile par tableau est la forme la plus simple : empiler/dépiler sont O(1). L\'inconvénient est la taille fixe MAX. La pile par liste chaînée (Exercice 4) n\'a pas ce problème mais coûte une allocation dynamique à chaque push.',
      chapters: [
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
    },
  ],
}
