export const chapter3 = {
  number: 'Chapitre 3',
  title: 'Algorithmes de tri',
  hasSortingRace: true,
  intro:
    "Le tri, c'est l'art de mettre les choses dans le bon ordre. Sans tri, chercher un contact dans ton téléphone serait une aventure aléatoire. Avec un bon algorithme de tri, c'est O(log n) avec une recherche binaire. Autant dire : la nuit et le jour.",
  sections: [
    {
      id: 'intro-tri',
      heading: "C'est quoi trier ?",
      explanation:
        "Trier, c'est réordonner une collection d'éléments selon un critère (ordre croissant, alphabétique, par priorité…). C'est l'une des opérations les plus fondamentales en informatique — presque tout le reste en dépend.",
      keyPoints: [
        'Entrée : une séquence non ordonnée',
        'Sortie : la même séquence, dans le bon ordre',
        "Critère : défini par une fonction de comparaison (a < b, a > b…)",
      ],
    },
    {
      id: 'pourquoi',
      heading: 'Pourquoi trier est utile ?',
      explanation:
        "Un tableau trié, c'est comme un dictionnaire papier : tu peux faire une recherche binaire (O(log n)) au lieu de tout parcourir (O(n)). Les bases de données, les moteurs de recherche, les GPS — tous trient en permanence.",
      keyPoints: [
        'Recherche binaire : O(log n) seulement si le tableau est trié',
        'Fusion de données, déduplication, rendu de classements : tous dépendent du tri',
        'Les algos de tri sont le terrain de jeu parfait pour apprendre la complexité',
      ],
    },
    {
      id: 'interne-externe',
      heading: 'Tri interne vs tri externe',
      explanation:
        "Tri interne : toutes les données tiennent en RAM. C'est le cas classique qu'on étudiera ici. Tri externe : les données sont trop grosses pour la mémoire (ex. trier un fichier de 500 Go). On utilise alors des fusions sur disque. On ne couvre pas le tri externe dans ce cours, mais tu dois savoir que ça existe.",
      keyPoints: [
        'Interne : données en RAM — rapide, direct',
        'Externe : données sur disque — nécessite des stratégies de fusion',
        'On se concentre sur le tri interne',
      ],
    },
    {
      id: 'familles',
      heading: 'Les familles de tris',
      explanation:
        "Les algorithmes de tri se regroupent en familles selon leur approche et leur complexité. Voici la carte du territoire :",
      keyPoints: [
        'Tris simples (O(n²)) : Sélection, Insertion, Bulle — simples à comprendre, lents sur de grands tableaux',
        'Tris efficaces (O(n log n)) : Fusion, Rapide, Tas — les vrais pros',
        'Tris spécialisés (O(n+k)) : Comptage, Radix, Casier — ultra-rapides dans des cas précis',
      ],
    },
    {
      id: 'selection',
      heading: 'Tri par sélection',
      explanation:
        "Principe : à chaque étape, on cherche le minimum dans la partie non triée, et on l'échange avec le premier élément de cette partie. Répéter jusqu'à ce que tout soit trié.",
      analogy:
        "C'est comme trier ton tiroir de chaussettes : tu cherches la plus petite, tu la poses en premier. Puis la suivante. Tu ne touches jamais ce qui est déjà rangé.",
      pseudoCode: `pour i de 0 à n-2 :
    min_idx = i
    pour j de i+1 à n-1 :
        si tableau[j] < tableau[min_idx] :
            min_idx = j
    échanger tableau[i] et tableau[min_idx]`,
      keyPoints: [
        'Complexité : O(n²) dans tous les cas (même si déjà trié — il cherche quand même)',
        'Environ n(n−1)/2 comparaisons et au plus n−1 échanges',
        'Avantage : très peu d\'échanges — bon si les échanges coûtent cher',
        'Inconvénient : lent, non stable (peut changer l\'ordre de valeurs égales)',
      ],
    },
    {
      id: 'insertion',
      heading: 'Tri par insertion',
      explanation:
        "Principe : on parcourt le tableau de gauche à droite. Pour chaque élément, on l'insère à la bonne place dans la partie déjà triée à gauche, en décalant les éléments plus grands.",
      analogy:
        "Exactement comme trier ses cartes à jouer dans la main : tu prends une carte, tu la glisses au bon endroit parmi celles déjà triées. Ta main gauche est toujours ordonnée.",
      pseudoCode: `pour i de 1 à n-1 :
    clé = tableau[i]
    j = i - 1
    tant que j >= 0 et tableau[j] > clé :
        tableau[j+1] = tableau[j]
        j = j - 1
    tableau[j+1] = clé`,
      keyPoints: [
        'Meilleur cas : O(n) — si déjà trié, on ne décale rien',
        'Pire cas : O(n²) — tableau inversé',
        'Excellent pour les petits tableaux ou les tableaux quasi-triés',
        'Avantage : stable, en place, efficace en pratique sur petites données',
        'Inconvénient : O(n²) dans le pire cas',
      ],
    },
    {
      id: 'bulles',
      heading: 'Tri à bulles (Bubble Sort)',
      explanation:
        "Principe : on compare les éléments adjacents et on les échange si le gauche > le droit. On répète plusieurs fois. Les grands éléments \"remontent\" vers la droite comme des bulles.",
      analogy:
        "Imagine un aquarium : les bulles les plus grosses montent en premier vers la surface. Chaque passage fait remonter le plus grand élément restant.",
      pseudoCode: `pour i de 0 à n-2 :
    échangé = faux
    pour j de 0 à n-2-i :
        si tableau[j] > tableau[j+1] :
            échanger tableau[j] et tableau[j+1]
            échangé = vrai
    si échangé == faux :
        arrêter`,
      keyPoints: [
        'Meilleur cas (avec optimisation) : O(n) — si déjà trié, zéro échange',
        'Pire cas : O(n²)',
        'Avantage : simple à comprendre, stable, détecte un tableau déjà trié',
        'Inconvénient : le plus lent en pratique pour les grands tableaux — beaucoup d\'échanges',
        'En pratique : presque jamais utilisé en production, mais parfait pour apprendre',
      ],
    },
    {
      id: 'fusion',
      heading: 'Tri par fusion (Merge Sort)',
      explanation:
        "Principe diviser-pour-régner : on divise le tableau en deux moitiés, on trie chaque moitié récursivement, puis on les fusionne en un tableau trié. La magie est dans la fusion : comparer les têtes des deux moitiés et prendre le plus petit.",
      analogy:
        "Imagine deux piles de cartes déjà triées. Pour les fusionner, tu regardes toujours le dessus de chaque pile et tu prends le plus petit. Résultat : une pile unique parfaitement triée.",
      pseudoCode: `fusion_tri(tableau, gauche, droite) :
    si gauche < droite :
        milieu = (gauche + droite) / 2
        fusion_tri(tableau, gauche, milieu)
        fusion_tri(tableau, milieu+1, droite)
        fusionner(tableau, gauche, milieu, droite)`,
      keyPoints: [
        'Complexité : O(n log n) dans tous les cas — garanti',
        'Stable : les éléments égaux gardent leur ordre relatif',
        'Utilise O(n) mémoire supplémentaire — son principal inconvénient',
        'Avantage : prévisible, stable, efficace sur les grands tableaux',
        'Inconvénient : mémoire supplémentaire, overhead de récursion',
      ],
    },
    {
      id: 'erreurs',
      heading: 'Erreurs classiques à éviter',
      warning:
        "Ces erreurs reviennent à chaque examen. Mémorise-les maintenant pour ne pas les refaire.",
      keyPoints: [
        'Confondre sélection et insertion : sélection cherche le min et échange, insertion déplace et insère',
        'Croire que le tri à bulles est efficace pour de grands tableaux : c\'est O(n²) en pratique, jamais utilisé en prod',
        'Oublier que le tri par fusion nécessite O(n) mémoire supplémentaire',
        'Confondre O(n²) et O(n log n) : sur n=1 000 000, c\'est la différence entre 10¹² et 20 000 000 opérations',
        'Oublier de tester le cas d\'un tableau déjà trié (meilleur cas pour insertion et bulles)',
      ],
    },
    {
      id: 'suite',
      heading: 'La suite',
      explanation:
        "Tu connais maintenant les tris fondamentaux, leurs complexités, et leurs compromis. Essaie maintenant la course visuelle ci-dessous pour comparer O(n²) et O(n log n).",
      isCallout: true,
      calloutText: 'Race interactive ci-dessous — démarre la course !',
    },
  ],
}
