export const tp1ListesPractice = {
  id: 'tp-1-listes',
  title: 'TP 1 — Listes chaînées',
  badge: 'Pratique guidée • TP 1',
  difficulty: 'Intermédiaire',
  estimatedTime: '90–120 min',
  sourceLabel: 'Télécharger le TP PDF',
  sourceUrl: '/resources/tps/TP-1.pdf',
  intro:
    'Ce TP porte sur l\'implémentation d\'une liste simplement chaînée à l\'aide des pointeurs en C++. Vous compléterez un squelette fourni (listechaine.txt) puis écrirez la fonction d\'intercalèment de deux listes.',
  chapters: [
    { label: 'Chapitre 1 — Intro & pseudo-code', href: '#/chapitre-1-intro' },
    { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
  ],
  exercises: [
    {
      id: 'ex-01',
      number: '01',
      title: 'Structure d\'un nœud et initialisation',
      enonce: `Le squelette (listechaine.txt) définit la structure suivante :

struct place {
  int val;
  struct place* suiv;
};
typedef struct place Place;
typedef Place* Liste;

Liste listeVide() {
  return NULL;
}

1. Expliquer le rôle de chaque champ de la structure.
2. Pourquoi listeVide() retourne NULL ?
3. Que représente le type Liste ?`,
      indice:
        'Une liste chaînée est une suite de nœuds reliés par des pointeurs. Le dernier nœud a suiv == NULL pour signaler la fin de la liste.',
      solution: `1. val : valeur entière stockée dans le nœud.
   suiv : pointeur vers le nœud suivant (NULL si dernier nœud).

2. Une liste vide est représentée par un pointeur NULL —
   il n'y a aucun nœud en mémoire.

3. Liste est un alias pour Place* (pointeur vers un nœud).
   Une variable de type Liste pointe vers le premier nœud
   (la tête) de la liste.`,
      explication:
        'Le typedef simplifie l\'écriture : on écrit Liste l au lieu de Place* l. La convention NULL = liste vide est universelle en C/C++ pour les structures chaînées.',
      chapters: [
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
    },
    {
      id: 'ex-02',
      number: '02',
      title: 'Insertion en tête — fonction cons()',
      enonce: `Le squelette fournit la fonction cons() suivante :

Liste cons(Liste l, int e) {
  Liste temp = new Place;
  if (temp == NULL) { printf("erreur allocation"); exit(1); }
  temp->val = e;
  temp->suiv = l;
  l = temp;
  return l;
}

1. Expliquer pas à pas ce que fait cette fonction.
2. Si la liste l contient {3, 7} et qu'on appelle cons(l, 1),
   quel est le résultat ?
3. Pourquoi faut-il retourner l et réaffecter dans main ?`,
      indice:
        'cons() crée un nouveau nœud et le place AVANT le premier élément existant. Dessinez l\'état de la mémoire avant et après l\'appel.',
      solution: `1. Étapes :
   a) Alloue un nouveau nœud temp.
   b) temp->val = e  (stocke la valeur).
   c) temp->suiv = l  (le nouveau nœud pointe vers l'ancienne tête).
   d) Retourne temp comme nouvelle tête.

2. Résultat : {1, 3, 7}
   Le nouveau nœud (val=1) est inséré en tête.

3. En C++, les pointeurs sont passés par valeur.
   La modification locale de l n'affecte pas la variable
   de l'appelant. Il faut donc retourner le nouveau pointeur
   et faire : l = cons(l, e); dans main.`,
      explication:
        'L\'insertion en tête est O(1) : on ne parcourt pas la liste. C\'est l\'opération la plus rapide sur une liste chaînée. À chaque appel de cons(), la liste grandit par la gauche.',
      chapters: [
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
    },
    {
      id: 'ex-03',
      number: '03',
      title: 'Compléter ajouFin()',
      enonce: `La fonction ajouFin() du squelette est incomplète :

Liste ajouFin(Liste l, int e) {
  Liste temp = new Place;
  temp->val = e;
  temp->suiv = NULL;
  if (l == NULL) return temp;
  Liste l1 = l;
  // compléter ici while(
  // l1->suiv = compléter ici;
  return l;
}

Compléter les deux lignes manquantes pour insérer e en queue de liste.`,
      indice:
        'Pour atteindre le dernier nœud, avancez tant que l1->suiv != NULL. Une fois sorti de la boucle, l1 est le dernier nœud : il suffit de lui affecter le nouveau nœud.',
      solution: `Liste ajouFin(Liste l, int e) {
  Liste temp = new Place;
  temp->val = e;
  temp->suiv = NULL;
  if (l == NULL) return temp;
  Liste l1 = l;
  while (l1->suiv != NULL)   // avancer jusqu'au dernier nœud
    l1 = l1->suiv;
  l1->suiv = temp;           // relier le dernier nœud au nouveau
  return l;
}`,
      explication:
        'L\'insertion en queue est O(n) car il faut parcourir toute la liste pour trouver le dernier nœud. Le cas l == NULL est traité séparément : si la liste est vide, le nouveau nœud devient la tête. Sinon on part de l1 = l et on avance jusqu\'à l1->suiv == NULL.',
      chapters: [
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
    },
    {
      id: 'ex-04',
      number: '04',
      title: 'Compléter afficher()',
      enonce: `La fonction afficher() du squelette provoque une boucle infinie :

void afficher(Liste l) {
  Liste temp = l;
  while (temp != NULL) {
    printf("%d ", temp->val);
    // compléter ici pour parcourir correctement la liste
  }
  printf("\\n");
}

Quelle ligne manque-t-il à l'intérieur du while ? Pourquoi provoque-t-elle une boucle infinie sans elle ?`,
      indice:
        'Sans avancer le pointeur temp à chaque tour, la boucle relit toujours le même nœud. Ajoutez une ligne pour faire avancer temp vers le nœud suivant.',
      solution: `void afficher(Liste l) {
  Liste temp = l;
  while (temp != NULL) {
    printf("%d ", temp->val);
    temp = temp->suiv;   // ligne manquante
  }
  printf("\\n");
}

La ligne manquante est : temp = temp->suiv;

Sans elle, temp reste toujours sur le premier nœud,
temp != NULL est toujours vrai → boucle infinie.`,
      explication:
        'C\'est l\'erreur classique d\'oubli d\'avancement dans un parcours de liste. La boucle while doit toujours contenir temp = temp->suiv; pour progresser vers NULL et terminer. Complexité du parcours : O(n).',
      chapters: [
        { label: 'Chapitre 1 — Intro & pseudo-code', href: '#/chapitre-1-intro' },
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
    },
    {
      id: 'ex-05',
      number: '05',
      title: 'Écrire interCal()',
      enonce: `Exercice 3 du TP — écrire la fonction interCal :

Écrire une fonction interCal qui prend en paramètres deux listes chaînées
L et R et les concatène par alternance.

Exemple :
L = {1, 2}
R = {5, 8, 9, 10}
Q = interCal(L, R) = {1, 5, 2, 8, 9, 10}

Quand une liste est épuisée avant l'autre, les éléments restants
de l'autre liste sont ajoutés à la suite.`,
      indice:
        'Avancez simultanément dans L et R avec deux pointeurs. À chaque tour, prenez un élément de L (si disponible) puis un de R (si disponible). Utilisez ajouFin() ou construisez directement les liens.',
      solution: `Liste interCal(Liste l, Liste r) {
  Liste q = listeVide();
  while (l != NULL || r != NULL) {
    if (l != NULL) {
      q = ajouFin(q, l->val);
      l = l->suiv;
    }
    if (r != NULL) {
      q = ajouFin(q, r->val);
      r = r->suiv;
    }
  }
  return q;
}

// Vérification avec l'exemple du TP :
// L = {1,2}, R = {5,8,9,10}
// Tour 1 : q = {1, 5}
// Tour 2 : q = {1, 5, 2, 8}
// Tour 3 : l épuisé, q = {1, 5, 2, 8, 9}
// Tour 4 : l épuisé, q = {1, 5, 2, 8, 9, 10}`,
      explication:
        'La condition while (l != NULL || r != NULL) continue tant qu\'au moins une liste a des éléments. Le double if à l\'intérieur gère les listes de tailles différentes : si l est épuisée on ne prend que dans r, et vice-versa. Complexité : O(n+m) où n et m sont les tailles de L et R.',
      chapters: [
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
    },
  ],
}
