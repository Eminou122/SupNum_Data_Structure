export const tdRevisionPractice = {
  id: 'td-revision',
  title: 'TD Révision — Entraînement global',
  badge: 'Pratique guidée • TD Révision',
  difficulty: 'Intermédiaire',
  estimatedTime: '60–90 min',
  sourceLabel: 'Télécharger le TD Révision',
  sourceUrl: '/resources/tds/TD-Revision.pdf',
  intro:
    'Ce TD de révision couvre les algorithmes fondamentaux sur les tableaux : somme, inversion, recherche dichotomique et fusion avec tri par insertion.',
  chapters: [
    { label: 'Chapitre 1 — Intro & pseudo-code', href: '#/chapitre-1-intro' },
    { label: 'Chapitre 2 — Complexité', href: '#/chapitre-2-complexite' },
    { label: 'Chapitre 3 — Tris', href: '#/chapitre-3-tris' },
  ],
  exercises: [
    {
      id: 'ex-01',
      number: '01',
      title: 'Somme et moyenne',
      enonce: `1. Demander à l'utilisateur de saisir la taille n d'un tableau d'entiers.
2. Remplir le tableau avec n valeurs saisies par l'utilisateur.
3. Calculer et afficher :
   - La somme des éléments du tableau
   - La moyenne des éléments`,
      indice:
        'Parcourez le tableau avec une boucle et accumulez la somme dans une variable. La moyenne = somme / n (attention : utilisez un float pour la division).',
      solution: `#include <iostream>
using namespace std;

int main() {
  int n;
  cout << "Taille du tableau : ";
  cin >> n;

  int T[100];
  for (int i = 0; i < n; i++) {
    cout << "T[" << i << "] = ";
    cin >> T[i];
  }

  int somme = 0;
  for (int i = 0; i < n; i++)
    somme += T[i];

  float moyenne = (float)somme / n;

  cout << "Somme : " << somme << endl;
  cout << "Moyenne : " << moyenne << endl;

  return 0;
}`,
      explication:
        'Le cast (float) avant la division est essentiel : sans lui, somme/n est une division entière et tronque le résultat. La boucle de saisie et la boucle de calcul sont séparées pour la clarté, mais on peut les fusionner.',
      chapters: [
        { label: 'Chapitre 1 — Intro & pseudo-code', href: '#/chapitre-1-intro' },
      ],
    },
    {
      id: 'ex-02',
      number: '02',
      title: 'Inverser un tableau',
      enonce: `1. Saisir un tableau d'entiers de taille n.
2. Créer un nouveau tableau contenant les éléments dans l'ordre inverse.
3. Afficher ce tableau inversé.`,
      indice:
        "Pour construire le tableau inversé, l'élément à l'indice i dans l'original va à l'indice n-1-i dans le nouveau tableau (ou parcourez l'original de la fin vers le début).",
      solution: `#include <iostream>
using namespace std;

int main() {
  int n;
  cin >> n;

  int T[100], inv[100];
  for (int i = 0; i < n; i++)
    cin >> T[i];

  for (int i = 0; i < n; i++)
    inv[i] = T[n - 1 - i];

  for (int i = 0; i < n; i++)
    cout << inv[i] << " ";
  cout << endl;

  return 0;
}`,
      explication:
        "La formule clé est inv[i] = T[n-1-i]. Elle mappe l'indice 0 → dernier élément, 1 → avant-dernier, etc. Aucun échange en place n'est nécessaire puisqu'on crée un nouveau tableau.",
      chapters: [
        { label: 'Chapitre 1 — Intro & pseudo-code', href: '#/chapitre-1-intro' },
      ],
    },
    {
      id: 'ex-03',
      number: '03',
      title: 'Recherche dichotomique',
      enonce: `Écrire une fonction itérative rechercheD() qui effectue une recherche dichotomique d'un élément a dans un tableau trié T de taille n.
La fonction renvoie true si l'élément existe dans le tableau et false sinon.`,
      indice:
        "Maintenez deux indices : gauche = 0 et droite = n-1. Calculez le milieu : mid = (gauche + droite) / 2. Si T[mid] == a, retournez true. Si a < T[mid], cherchez à gauche ; sinon à droite. Arrêtez quand gauche > droite.",
      solution: `bool rechercheD(int T[], int n, int a) {
  int gauche = 0, droite = n - 1;
  while (gauche <= droite) {
    int mid = (gauche + droite) / 2;
    if (T[mid] == a) return true;
    if (a < T[mid])  droite = mid - 1;
    else             gauche = mid + 1;
  }
  return false;
}`,
      explication:
        'La recherche dichotomique divise par 2 l\'espace de recherche à chaque itération → complexité O(log n), bien plus efficace que la recherche linéaire O(n). Condition préalable : le tableau DOIT être trié.',
      chapters: [
        { label: 'Chapitre 2 — Complexité', href: '#/chapitre-2-complexite' },
      ],
    },
    {
      id: 'ex-04',
      number: '04',
      title: 'Fusionner et trier deux tableaux',
      enonce: `1. Saisir deux tableaux d'entiers : A (taille n) et B (taille m).
2. Créer un troisième tableau C contenant tous les éléments de A et B.
3. Trier le tableau C en ordre croissant et l'afficher.
   Utiliser le tri par insertion.`,
      indice:
        'Copiez d\'abord A dans C (indices 0..n-1) puis B dans C (indices n..n+m-1). Ensuite appliquez le tri par insertion sur C[0..n+m-1] : pour chaque élément, remontez-le à sa place parmi les éléments déjà triés.',
      solution: `#include <iostream>
using namespace std;

void triInsertion(int C[], int taille) {
  for (int i = 1; i < taille; i++) {
    int cle = C[i];
    int j = i - 1;
    while (j >= 0 && C[j] > cle) {
      C[j + 1] = C[j];
      j--;
    }
    C[j + 1] = cle;
  }
}

int main() {
  int n, m;
  cin >> n;
  int A[100];
  for (int i = 0; i < n; i++) cin >> A[i];

  cin >> m;
  int B[100];
  for (int i = 0; i < m; i++) cin >> B[i];

  int C[200];
  for (int i = 0; i < n; i++) C[i]     = A[i];
  for (int i = 0; i < m; i++) C[n + i] = B[i];

  triInsertion(C, n + m);

  for (int i = 0; i < n + m; i++)
    cout << C[i] << " ";
  cout << endl;

  return 0;
}`,
      explication:
        'La fusion est simple : concaténer les deux tableaux dans C. Le tri par insertion est O(n²) dans le pire cas mais O(n) si C est déjà presque trié. C\'est l\'algorithme demandé dans le TD. La séparation en fonction triInsertion() rend le code lisible et réutilisable.',
      chapters: [
        { label: 'Chapitre 3 — Tris', href: '#/chapitre-3-tris' },
        { label: 'Chapitre 2 — Complexité', href: '#/chapitre-2-complexite' },
      ],
    },
  ],
}
