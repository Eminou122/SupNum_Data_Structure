export const tpTriPractice = {
  id: 'tp-tri',
  title: 'TP Tri — Fichiers & algorithmes de tri',
  badge: 'Pratique guidée • TP Tri',
  difficulty: 'Intermédiaire',
  estimatedTime: '90–120 min',
  sourceLabel: 'Ouvrir le fichier source',
  sourceUrl: '/resources/tps/sourceTri.txt',
  intro:
    'Ce TP mesure les performances du tri par sélection et du tri fusion sur des fichiers de grande taille. Vous lirez le code source fourni (sourceTri.txt), modifierez le paramètre n, testerez plusieurs tailles et analyserez les temps d\'exécution.',
  chapters: [
    { label: 'Chapitre 2 — Complexité', href: '#/chapitre-2-complexite' },
    { label: 'Chapitre 3 — Algorithmes de tri', href: '#/chapitre-3-tris' },
  ],
  exercises: [
    {
      id: 'ex-01',
      number: '01',
      title: 'Lire et créer un fichier — creerUnficher() et lireFichier()',
      enonce: `Le source fournit deux fonctions utilitaires :

void creerUnficher(long n, string const nomFich) {
  ofstream flux(nomFich.c_str());
  for (i = 1; i < n; i++) {
    int e = rand() % 10000;
    flux << e << ":";
  }
  flux << rand() % 10000 << endl;
}

long lireFichier(long tab[], char* nomF) {
  fstream fich;
  string element;
  fich.open(nomF);
  long i = 0;
  while (getline(fich, element, ':')) {
    tab[i++] = atoi(element.c_str());
  }
  fich.close();
  return i;
}

1. Quel séparateur creerUnficher() utilise-t-il entre les nombres ?
2. Pourquoi lireFichier() utilise-t-il getline(fich, element, ':') ?
3. Le main() appelle creerUnficher(50000, "tri3.txt").
   Combien de nombres le fichier contient-il ?`,
      indice:
        'La boucle de creerUnficher va de i=1 à i<n, donc écrit n-1 nombres avec ":", puis un dernier sans. getline avec un 3ᵉ argument lit jusqu\'à ce séparateur.',
      solution: `1. Le séparateur est ':' (deux-points).
   Chaque nombre est suivi de ':' sauf le dernier.

2. getline(fich, element, ':') lit le fichier token par token
   en coupant à chaque ':'. C'est la façon standard de lire
   un fichier CSV-like en C++.

3. La boucle écrit i=1 à i<50000 → 49 999 nombres + 1 dernier = 50 000 nombres.
   lireFichier() retourne donc n = 50 000.`,
      explication:
        'creerUnficher génère un fichier de n entiers aléatoires entre 0 et 9999, séparés par ":". lireFichier lit ce fichier dans un tableau et retourne le nombre d\'éléments lus. Le main() utilise un tableau de taille 500 000 pour pouvoir tester de grandes tailles sans réallouer.',
      chapters: [
        { label: 'Chapitre 3 — Algorithmes de tri', href: '#/chapitre-3-tris' },
      ],
    },
    {
      id: 'ex-02',
      number: '02',
      title: 'Analyser triSelection()',
      enonce: `Le source fournit :

void triSelection(long tab[], long n) {
  long i, j, tmp, index;
  for (i = 0; i < (n - 1); i++) {
    index = i;
    for (j = i + 1; j < n; j++) {
      if (tab[index] > tab[j])
        index = j;
    }
    if (index != i) {
      tmp = tab[i];
      tab[i] = tab[index];
      tab[index] = tmp;
    }
  }
}

1. Expliquer le rôle de la variable index.
2. Sur le tableau [5, 2, 8, 1, 9], tracer les échanges
   effectués par triSelection.
3. Quelle est la complexité en temps de triSelection ?
   Justifier avec les boucles imbriquées.`,
      indice:
        'index mémorise la position du minimum trouvé dans la partie non triée. La boucle externe avance la frontière triée/non-triée. Compter le nombre total de comparaisons.',
      solution: `1. index mémorise la position du minimum dans tab[i..n-1].
   Si index ≠ i à la fin de la boucle interne,
   on échange tab[i] et tab[index].

2. Trace sur [5, 2, 8, 1, 9] :
   i=0 : min à index=3 (val=1) → échange → [1, 2, 8, 5, 9]
   i=1 : min à index=1 (val=2) → pas d'échange → [1, 2, 8, 5, 9]
   i=2 : min à index=3 (val=5) → échange → [1, 2, 5, 8, 9]
   i=3 : min à index=3 (val=8) → pas d'échange → [1, 2, 5, 8, 9]
   Résultat : [1, 2, 5, 8, 9]

3. Complexité : O(n²)
   Boucle externe : n-1 itérations
   Boucle interne : n-1-i comparaisons
   Total ≈ (n-1)+(n-2)+...+1 = n(n-1)/2 ∈ O(n²)`,
      explication:
        'Le tri par sélection est simple mais quadratique : doubler n multiplie le temps par 4. Pour n=50 000, il effectue ~1,25 milliard de comparaisons. C\'est pourquoi il devient très lent sur de grands fichiers.',
      chapters: [
        { label: 'Chapitre 2 — Complexité', href: '#/chapitre-2-complexite' },
        { label: 'Chapitre 3 — Algorithmes de tri', href: '#/chapitre-3-tris' },
      ],
    },
    {
      id: 'ex-03',
      number: '03',
      title: 'Analyser triFusion() et fusion()',
      enonce: `Le source fournit :

void triFusion(long t[], long debut, long fin) {
  if (fin - debut > 0) {
    int milieu = (debut + fin) / 2;
    triFusion(t, debut, milieu);
    triFusion(t, milieu + 1, fin);
    fusion(t, debut, milieu, fin);
  }
}

void fusion(long t[], long debut1, long fin1, long fin2) {
  int i = debut1, j = fin1 + 1, k = 0;
  int temp[fin2 - debut1 + 1];   // tableau temporaire
  while (i <= fin1 && j <= fin2) {
    if (t[i] < t[j]) temp[k++] = t[i++];
    else              temp[k++] = t[j++];
  }
  while (i <= fin1) temp[k++] = t[i++];
  while (j <= fin2) temp[k++] = t[j++];
  for (k = 0; k <= fin2 - debut1; k++)
    t[k + debut1] = temp[k];
}

1. Expliquer le principe divide-and-conquer de triFusion.
2. Sur [3, 1, 4, 2], montrer les appels récursifs puis la fusion.
3. Quelle est la complexité de triFusion ?
4. Quelle ligne dans fusion() peut poser problème sur très
   grand tableau ? Pourquoi ?`,
      indice:
        'triFusion divise en deux moitiés, trie chaque moitié récursivement, puis les fusionne. fusion() alloue un tableau temporaire sur la pile (VLA). La profondeur de récursion est log₂(n).',
      solution: `1. Divide-and-conquer :
   - Divise : couper t[debut..fin] au milieu.
   - Conquer : trier chaque moitié récursivement.
   - Merge : fusionner les deux moitiés triées avec fusion().

2. Appels sur [3, 1, 4, 2] (indices 0..3) :
   triFusion(0,3) → milieu=1
     triFusion(0,1) → milieu=0
       triFusion(0,0) : base, retour
       triFusion(1,1) : base, retour
       fusion(0,0,1) : [3,1] → [1,3]
     triFusion(2,3) → milieu=2
       triFusion(2,2) : base, retour
       triFusion(3,3) : base, retour
       fusion(2,2,3) : [4,2] → [2,4]
     fusion(0,1,3) : [1,3]+[2,4] → [1,2,3,4]

3. Complexité : O(n log n)
   Profondeur de récursion : log₂(n) niveaux
   Travail de fusion à chaque niveau : O(n)
   Total : O(n log n)

4. int temp[fin2-debut1+1] — c'est un VLA (Variable Length Array)
   alloué sur la PILE d'exécution.
   Sur n=50 000, les appels récursifs s'accumulent → risque de
   dépassement de pile (stack overflow).`,
      explication:
        'Le tri fusion est bien meilleur que la sélection (O(n log n) vs O(n²)), mais l\'implémentation ici utilise des VLA sur la pile. Pour n=50 000 avec récursion profonde, la pile d\'appels peut déborder. C\'est le problème à analyser mentionné dans le TP.',
      chapters: [
        { label: 'Chapitre 2 — Complexité', href: '#/chapitre-2-complexite' },
        { label: 'Chapitre 3 — Algorithmes de tri', href: '#/chapitre-3-tris' },
      ],
    },
    {
      id: 'ex-04',
      number: '04',
      title: 'Mesurer le temps d\'exécution',
      enonce: `Le main() mesure le temps ainsi :

time_t begin = time(NULL);
triSelection(t, n);        // ou triFusion(t, 0, n-1)
time_t end = time(NULL);
time_spent += 1000000.0 * (end - begin);
cout << time_spent << " MicroSecondes";

1. Que retourne time(NULL) ?
2. Pourquoi multiplie-t-on par 1 000 000 ?
3. Dans le main(), l'appel à triFusion est commenté.
   Quelle ligne faut-il modifier pour tester triFusion
   à la place de triSelection ?
4. Modifier le paramètre n pour tester les tailles :
   1000, 2000, 5000, 10000.
   Où changer ce paramètre dans le code ?`,
      indice:
        'time(NULL) retourne le temps en secondes depuis le 1er janvier 1970 (epoch). Pour tester triFusion, décommenter son appel et commenter triSelection. creerUnficher(50000, ...) fixe n.',
      solution: `1. time(NULL) retourne le temps UNIX en secondes (entier).
   La différence end-begin donne une durée en secondes.

2. On multiplie par 1 000 000 pour convertir en microsecondes.
   (1 seconde = 1 000 000 microsecondes)
   Note : time() a une résolution de 1 seconde seulement —
   pour des mesures fines, clock() ou chrono serait plus précis.

3. Pour tester triFusion :
   // triSelection(t, n);         ← commenter cette ligne
   triFusion(t, 0, n-1);          ← décommenter cette ligne

4. Changer le paramètre n :
   creerUnficher(1000, "tri3.txt");   // 1 000 éléments
   // ou
   creerUnficher(10000, "tri3.txt");  // 10 000 éléments
   Cette ligne se trouve au début du main().`,
      explication:
        'time() est simple mais imprécis (résolution 1s). Pour n petit (1000, 2000), la différence sera probablement 0. Le temps ne deviendra mesurable qu\'à partir de n=10 000–20 000 avec triSelection, et plus tard avec triFusion.',
      chapters: [
        { label: 'Chapitre 2 — Complexité', href: '#/chapitre-2-complexite' },
        { label: 'Chapitre 3 — Algorithmes de tri', href: '#/chapitre-3-tris' },
      ],
    },
    {
      id: 'ex-05',
      number: '05',
      title: 'Comparer les algorithmes et analyser les résultats',
      enonce: `Le TP demande de tester les deux algorithmes sur des tableaux
de taille : 1000, 2000, 5000, 10000, 20000, 40000, 50000, 60000
et de reporter le temps d'exécution. S'il y a un problème,
il faut l'analyser et reporter son origine.

1. Pour triSelection, à quelle taille environ attendez-vous
   que le temps devienne significatif (> 1 s) ?
   Justifier par la complexité O(n²).

2. Pour triFusion, à quelle taille attendez-vous un problème ?
   Quel est ce problème ?

3. Remplir ce tableau (valeurs approximatives attendues) :

   n       | triSelection | triFusion
   --------|-------------|----------
   1 000   |      ?      |     ?
   10 000  |      ?      |     ?
   50 000  |      ?      |     ?

4. Quel algorithme est préférable pour de grands fichiers ?`,
      indice:
        'triSelection est O(n²) : multiplier n par 10 multiplie le temps par 100. triFusion est O(n log n) mais le VLA dans fusion() peut provoquer un stack overflow sur n grand.',
      solution: `1. triSelection O(n²) :
   n=1 000  → ~1M comparaisons  → quasi-instantané
   n=10 000 → ~100M            → quelques secondes
   n=50 000 → ~2,5 milliards   → plusieurs dizaines de secondes

2. triFusion : problème attendu à partir de n=40 000–50 000.
   La cause : int temp[fin2-debut1+1] dans fusion() est un
   VLA alloué sur la pile. Avec log₂(50000)≈16 niveaux de
   récursion et des tableaux temporaires croissants,
   la pile d'appels déborde → crash ou comportement indéfini.

3. Valeurs approximatives sur un PC standard :
   n       | triSelection   | triFusion
   --------|----------------|------------------
   1 000   | < 1 s (0 ms)   | < 1 s (0 ms)
   10 000  | ~1–5 s          | < 1 s (rapide)
   50 000  | ~60–120 s       | crash (stack overflow)

4. Ni l'un ni l'autre pour très grands fichiers :
   - triSelection : trop lent (O(n²))
   - triFusion : risque de stack overflow (VLA + récursion)
   Solution correcte : triFusion avec tableau temp alloué
   dynamiquement (new/malloc) ou triFusion itératif.`,
      explication:
        'Ce TP illustre que la complexité théorique ne suffit pas : une implémentation O(n log n) défaillante (stack overflow) peut être pire qu\'une implémentation O(n²) stable. L\'analyse du problème — identifier le VLA comme source du crash — est l\'objectif pédagogique principal.',
      chapters: [
        { label: 'Chapitre 2 — Complexité', href: '#/chapitre-2-complexite' },
        { label: 'Chapitre 3 — Algorithmes de tri', href: '#/chapitre-3-tris' },
      ],
    },
  ],
}
