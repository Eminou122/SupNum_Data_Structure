export const tdtpItems = [
  {
    id: 'td-01',
    title: 'TD 01',
    type: 'TD',
    topic: 'Structures fondamentales',
    description:
      'Exercices sur les pointeurs, la récursivité, la complexité, les listes chaînées, les piles et les files.',
    themes: [
      'Pointeurs',
      'Récursivité',
      'Complexité',
      'struct',
      'Tableaux',
      'Listes chaînées',
      'Piles',
      'Files',
      'Listes doublement chaînées',
      'Listes circulaires',
      'Pile par tableau',
      'File par tableau',
    ],
    tasks: [
      'Analyser un programme récursif et expliquer la pile d\'appels.',
      'Calculer le nombre d\'opérations dans une double boucle.',
      'Manipuler un tableau d\'étudiants avec des pointeurs.',
      'Trouver le milieu d\'une liste chaînée et inverser une pile.',
      'Séparer une pile en pairs/impairs.',
      'Implémenter une pile et une file avec tableau ou liste.',
    ],
    sourceFile: 'TD-01.pdf',
    sourceUrl: '/resources/tds/TD-01.pdf',
    practiceUrl: '#/pratique/td-01',
    attachments: [],
    codePreview: null,
    status: 'available',
  },
  {
    id: 'td-revision',
    title: 'TD Révision',
    type: 'TD',
    topic: 'Algorithmique de base',
    description:
      'Révision des algorithmes fondamentaux sur les tableaux : recherche, tri et fusion.',
    themes: [
      'Tableaux',
      'Somme',
      'Moyenne',
      'Inversion',
      'Recherche dichotomique',
      'Fusion de tableaux',
      'Tri par insertion',
    ],
    tasks: [
      'Calculer la somme et la moyenne d\'un tableau.',
      'Construire un tableau inversé.',
      'Écrire une recherche dichotomique itérative.',
      'Fusionner deux tableaux.',
      'Trier le tableau fusionné avec le tri par insertion.',
    ],
    sourceFile: 'TD-Révision.pdf',
    sourceUrl: '/resources/tds/TD-Revision.pdf',
    practiceUrl: '#/pratique/td-revision',
    attachments: [],
    codePreview: null,
    status: 'available',
  },
  {
    id: 'tp-01',
    title: 'TP 1 — Listes chaînées',
    type: 'TP',
    topic: 'Listes simplement chaînées',
    description:
      'Implémentation d\'une liste simplement chaînée par pointeurs à partir d\'un squelette C++ fourni.',
    themes: [
      'Pointeurs',
      'Listes simplement chaînées',
      'Insertion en tête',
      'Ajout à la fin',
      'Affichage',
      'Intercalage de listes',
    ],
    tasks: [
      'Créer un projet C++.',
      'Compléter les fonctions manquantes dans le squelette fourni.',
      'Tester l\'insertion successive, l\'ajout à la fin et l\'affichage.',
      'Écrire la fonction interCal.',
      'Vérifier l\'exemple : L = {1,2}, R = {5,8,9,10}, Q = {1,5,2,8,9,10}.',
    ],
    sourceFile: 'TP 1.pdf',
    sourceUrl: '/resources/tps/TP-1.pdf',
    practiceUrl: '#/pratique/tp-1-listes',
    attachments: [{ filename: 'listechaine.txt', url: '/resources/tps/listechaine.txt', language: 'C++', label: 'Squelette de liste chaînée' }],
    codePreview: `#include <iostream>
using namespace std;

struct place {
    int val;
    place* suiv;
};

typedef place* Liste;

bool listeVide(Liste L) {
    return L == nullptr;
}

Liste cons(int v, Liste L) {
    Liste newNode = new place;
    newNode->val = v;
    newNode->suiv = L;
    return newNode;
}

void ajouFin(Liste& L, int v) {
    // À compléter ...
}`,
    status: 'available',
  },
  {
    id: 'tp-02-03',
    title: 'TP 2/3 — Piles & Files',
    type: 'TP',
    topic: 'Piles et files',
    description:
      'Implémentation des piles et files avec liste chaînée et avec tableau.',
    themes: [
      'Piles',
      'Files',
      'Liste chaînée',
      'Tableau',
      'empiler',
      'dépiler',
      'enfiler',
      'défiler',
    ],
    tasks: [
      'Implémenter les piles et les files avec les pointeurs.',
      'Tester chaque fonction.',
      'Implémenter une pile à l\'aide d\'un tableau.',
      'Vérifier les opérations empiler, depiler, sommet, enfiler, defiler, premier.',
    ],
    sourceFile: 'tp_2_3_pile_file.txt',
    sourceUrl: '/resources/tps/tp_2_3_pile_file.txt',
    practiceUrl: '#/pratique/tp-2-3-piles-files',
    attachments: [{ filename: 'tp_2_3_pile_file.txt', url: '/resources/tps/tp_2_3_pile_file.txt', language: 'C++', label: 'Squelette piles & files' }],
    codePreview: `#include <iostream>
using namespace std;

// === PILE avec liste chaînée ===
struct place {
    int val;
    place* suiv;
};

typedef place* Pile;

bool pileVide(Pile P) {
    return P == nullptr;
}

void empiler(Pile& P, int v) {
    Pile newNode = new place;
    newNode->val = v;
    newNode->suiv = P;
    P = newNode;
}

int sommet(Pile P) {
    return P->val;
}

void depiler(Pile& P) {
    // À compléter ...
}`,
    status: 'available',
  },
  {
    id: 'tp-tri',
    title: 'TP Tri — Fichiers',
    type: 'TP',
    topic: 'Algorithmes de tri',
    description:
      'Mesure des performances du tri par sélection et du tri fusion sur des fichiers de grande taille.',
    themes: [
      'Fichiers',
      'Tableaux',
      'Mesure du temps',
      'Tri par sélection',
      'Tri par fusion',
      'Tests de performance',
    ],
    tasks: [
      'Télécharger le fichier source fourni.',
      'Créer un projet DevC++ et remplacer main.cpp.',
      'Compiler et exécuter le programme.',
      'Modifier le nombre d\'éléments triés.',
      'Tester plusieurs tailles : 1000, 2000, 5000, 10000, 20000, 40000, 50000, 60000.',
      'Reporter le temps d\'exécution et analyser les problèmes.',
    ],
    sourceFile: 'sourceTri.txt',
    sourceUrl: '/resources/tps/sourceTri.txt',
    practiceUrl: '#/pratique/tp-tri',
    attachments: [{ filename: 'sourceTri.txt', url: '/resources/tps/sourceTri.txt', language: 'C++', label: 'Source tri sur fichiers' }],
    codePreview: `#include <iostream>
#include <fstream>
#include <ctime>
using namespace std;

// Génère un fichier de N entiers aléatoires
void creerUnFichier(const char* nom, int N) {
    ofstream f(nom);
    srand(time(0));
    for (int i = 0; i < N; i++)
        f << rand() % 10000 << "\\n";
    f.close();
}

// Lit le fichier dans un tableau, retourne la taille
int lireFichier(const char* nom, int* tab) {
    // ...
}

// Tri par sélection et tri fusion inclus ci-dessous`,
    status: 'available',
  },
  {
    id: 'tp-arbres',
    title: 'TP Arbres binaires',
    type: 'TP',
    topic: 'Arbres binaires',
    description:
      'Implémentation d\'un arbre binaire de recherche : insertion, parcours et suppression.',
    themes: [
      'Arbres binaires',
      'ABR',
      'Insertion',
      'Parcours infixe',
      'Parcours préfixe',
      'Parcours postfixe',
      'Suppression',
    ],
    tasks: [
      'Créer un projet DevC++.',
      'Ajouter entete.h, impl.cpp, main.cpp.',
      'Compléter l\'ajout dans un arbre binaire de recherche.',
      'Compléter les parcours en profondeur.',
      'Compléter la suppression de feuilles et de nœuds simples.',
    ],
    sourceFile: 'TP_ARBR.docx',
    attachments: [],
    codePreview: null,
    status: 'coming-soon',
  },
]
