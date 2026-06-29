export const tp23PilesFilesPractice = {
  id: 'tp-2-3-piles-files',
  title: 'TP 2/3 — Piles & Files',
  badge: 'Pratique guidée • TP 2/3',
  difficulty: 'Intermédiaire',
  estimatedTime: '90–120 min',
  sourceLabel: 'Télécharger / ouvrir le sujet',
  sourceUrl: '/resources/tps/tp_2_3_pile_file.txt',
  intro:
    'Ce TP implémente trois structures : une pile par liste chaînée, une file par liste chaînée (avec pointeurs début/fin), et une pile par tableau. Vous tracerez les opérations du programme principal et comparerez le comportement LIFO (pile) et FIFO (file).',
  chapters: [
    { label: 'Chapitre 1 — Intro & pseudo-code', href: '#/chapitre-1-intro' },
    { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
  ],
  exercises: [
    {
      id: 'ex-01',
      number: '01',
      title: 'Structure de la pile par liste chaînée',
      enonce: `Le squelette définit :

struct Place {
  int val;
  Place* suiv;
};
typedef Place* Pile;

Pile estVide() { return NULL; }

1. Quel type représente Pile ?
2. Pourquoi estVide() retourne NULL ?
3. La pile est LIFO : expliquer ce que cela signifie avec
   les opérations empiler / dépiler du squelette.`,
      indice:
        'empiler() insère en tête (comme cons() du TP 1). dépiler() avance la tête vers le nœud suivant — le dernier élément ajouté est donc le premier retiré.',
      solution: `1. Pile est un alias pour Place* — un pointeur vers le nœud au sommet.
   NULL = pile vide (aucun nœud alloué).

2. Aucun nœud n'existe en mémoire pour une pile vide ;
   NULL est la convention universelle.

3. LIFO — Last In, First Out :
   - empiler() ajoute le nouveau nœud EN TÊTE.
   - dépiler() retire le nœud de TÊTE.
   ⟹ le dernier empilé est le premier dépilé.

   empiler(P, 6) → {6}
   empiler(P, 3) → {3, 6}
   empiler(P, 7) → {7, 3, 6}
   dépiler()     → {3, 6}   ← 7 retiré en premier`,
      explication:
        'La pile par liste chaînée réutilise exactement le même struct Place que le TP 1. empiler() est identique à cons() : insertion O(1) en tête. dépiler() est O(1) : on avance juste le pointeur tête.',
      chapters: [
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
    },
    {
      id: 'ex-02',
      number: '02',
      title: 'Tracer empiler() et dépiler() du main()',
      enonce: `Le main() exécute ces opérations sur la pile :

Pile P = estVide();
P = empiler(P, 6);
P = empiler(P, 3);
P = empiler(P, 7);
affichier(P);
P = depiler(P);
affichier(P);
cout << sommet(P);

1. Donner l'état de la pile après chaque appel à empiler().
2. Que produit le premier affichier(P) ?
3. Que produit affichier(P) après depiler() ?
4. Que retourne sommet(P) à la fin ?`,
      indice:
        'empiler() insère toujours en TÊTE. affichier() parcourt de la tête vers NULL. dépiler() retire la tête.',
      solution: `1. État de la pile :
   empiler(P, 6) → tête → [6] → NULL
   empiler(P, 3) → tête → [3] → [6] → NULL
   empiler(P, 7) → tête → [7] → [3] → [6] → NULL

2. Premier affichier(P) :
   7
   3
   6

3. depiler(P) retire 7 → tête → [3] → [6] → NULL
   Deuxième affichier(P) :
   3
   6

4. sommet(P) = 3   (valeur de la tête après dépiler)`,
      explication:
        'affichier() parcourt la pile de la tête vers NULL, donc du sommet vers le fond. LIFO : 7 est entré en dernier, sorti en premier via depiler(). sommet() lit P->val sans modifier la pile.',
      chapters: [
        { label: 'Chapitre 1 — Intro & pseudo-code', href: '#/chapitre-1-intro' },
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
    },
    {
      id: 'ex-03',
      number: '03',
      title: 'Structure de la file par liste chaînée',
      enonce: `Le squelette définit la file ainsi :

struct File {
  Place* debut;
  Place* fin;
};

File fileVide() {
  File F;
  F.debut = NULL;
  F.fin = NULL;
  return F;
}

1. Pourquoi la file a besoin de deux pointeurs (debut et fin) ?
2. Expliquer le rôle de chacun.
3. La file est FIFO : expliquer avec enfiler / defiler.`,
      indice:
        'enfiler() ajoute en FIN (O(1) grâce au pointeur fin). defiler() retire en DÉBUT (O(1) grâce au pointeur debut). Sans le pointeur fin, enfiler() serait O(n).',
      solution: `1. Deux pointeurs pour que les deux opérations principales soient O(1) :
   - debut : tête de la file (premier entré, premier sorti).
   - fin   : queue de la file (où on ajoute les nouveaux éléments).

2. debut → nœud à retirer au prochain defiler().
   fin   → dernier nœud ajouté, son champ suiv reçoit
           le prochain nœud lors d'un enfiler().

3. FIFO — First In, First Out :
   enfiler(F, 3) → {3}      debut=3, fin=3
   enfiler(F, 8) → {3,8}    debut=3, fin=8
   enfiler(F, 4) → {3,8,4}  debut=3, fin=4
   defiler(F)    → {8,4}    ← 3 sorti (entré en premier)`,
      explication:
        'Contrairement à la pile, la file retire les éléments dans l\'ordre d\'arrivée. Le double pointeur debut/fin est la clé : sans fin, ajouter en queue nécessiterait de parcourir toute la liste.',
      chapters: [
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
    },
    {
      id: 'ex-04',
      number: '04',
      title: 'Tracer la file du main()',
      enonce: `Le main() exécute ces opérations sur la file :

File F = fileVide();
F = enfiler(F, 3);
F = enfiler(F, 8);
F = enfiler(F, 4);
affichage(F);
F = defiler(F);
affichage(F);
cout << premier(F);

1. Donner l'état de la file (debut → … → fin) après les 3 enfiler().
2. Que produit le premier affichage(F) ?
3. Que produit affichage(F) après defiler() ?
4. Que retourne premier(F) à la fin ?`,
      indice:
        'affichage() parcourt à partir de debut vers NULL. defiler() avance debut au nœud suivant. premier() retourne debut->val.',
      solution: `1. Après 3 enfiler :
   debut → [3] → [8] → [4] → NULL
                             ↑ fin

2. Premier affichage(F) :
   3
   8
   4

3. defiler(F) : debut avance → [8] → [4] → NULL
   Deuxième affichage(F) :
   8
   4

4. premier(F) = 8   (debut->val après defiler)`,
      explication:
        'FIFO confirmé : 3 a été enfilé en premier, il est sorti en premier par defiler(). premier() est l\'équivalent de sommet() pour la file : lecture sans modification.',
      chapters: [
        { label: 'Chapitre 1 — Intro & pseudo-code', href: '#/chapitre-1-intro' },
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
    },
    {
      id: 'ex-05',
      number: '05',
      title: 'Pile par tableau — PileAcce',
      enonce: `Le squelette implémente une seconde pile via un tableau :

struct PileAcce {
  int n;
  int T[50];
};

PileAcce pileVide() { PileAcce p; p.n = 0; return p; }
bool estVide(PileAcce P) { return P.n == 0; }
bool pleinne(PileAcce P) { return P.n == 49; }

PileAcce empiler(PileAcce P, int e) {
  if (pleinne(P)) { /* erreur */ }
  else { int n = P.n++; P.T[n] = e; return P; }
}
PileAcce depiler(PileAcce P) {
  if (estVide(P)) { /* erreur */ }
  else { P.n = P.n - 1; return P; }
}
int sommet(PileAcce P) {
  if (estVide(P)) { /* erreur */ }
  else { return P.T[P.n - 1]; }
}

Le main() fait :
PileAcce P1 = pileVide();
P1 = empiler(P1, 2);
P1 = empiler(P1, 3);
P1 = empiler(P1, 4);
P1 = empiler(P1, 5);
affichier(P1);
P1 = depiler(P1);
affichier(P1);
cout << sommet(P1);

1. Expliquer le rôle de n dans PileAcce.
2. Tracer T et n après chaque empiler.
3. Que produit affichier(P1) avant depiler() ?
4. Que produit affichier(P1) après depiler() ?
5. Que retourne sommet(P1) à la fin ?`,
      indice:
        'n est le nombre d\'éléments présents. Le sommet est toujours T[n-1]. depiler() décrémente n sans effacer T[n-1] — la valeur reste en mémoire mais est inaccessible.',
      solution: `1. n = nombre d'éléments dans la pile.
   Le sommet se trouve à T[n-1].
   pleinne() à n==49 (pas 50) laisse T[49] jamais utilisé
   — note : limite légèrement sous la capacité réelle.

2. État de T et n :
   pileVide()      → n=0, T=[]
   empiler(P1, 2)  → n=1, T=[2, ...]
   empiler(P1, 3)  → n=2, T=[2, 3, ...]
   empiler(P1, 4)  → n=3, T=[2, 3, 4, ...]
   empiler(P1, 5)  → n=4, T=[2, 3, 4, 5, ...]

3. affichier(P1) avant depiler() — parcourt T[0..n-1] :
   2
   3
   4
   5

4. depiler() : n devient 3
   affichier(P1) :
   2
   3
   4

5. sommet(P1) = T[n-1] = T[2] = 4`,
      explication:
        'La pile par tableau est plus simple à déboguer (on voit directement les valeurs dans T) mais a une capacité fixe (50 éléments ici). depiler() ne fait que décrémenter n : O(1), sans désallocation. Comparer avec la pile par liste : celle-ci est dynamique mais nécessite une allocation mémoire par empiler().',
      chapters: [
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
    },
  ],
}
