export const test2023Guided = {
  id: 'test-2023-2024',
  title: 'Test 2023–2024 — révision guidée',
  badge: 'Test • Révision guidée',
  sourceUrl: '/resources/exams/test-2023-2024.pdf',
  sourceLabel: 'PDF original',
  officialCorrection: false,
  intro: 'Cette aide de révision est basée sur le sujet original et présente des méthodes de résolution vérifiables.',
  exercises: [
    {
      id: 'ex-01',
      title: 'Exercice 1 — Boucles imbriquées',
      topic: 'Complexité',
      relatedChapters: [
        { label: 'Chapitre 2 — Complexité', href: '#/chapitre-2-complexite' },
      ],
      relatedExamples: [],
      promptSummary: 'Déterminer les couples affichés par deux boucles imbriquées pour n = 5, puis compter en fonction de n les exécutions de cout.',
      whatTheyWant: 'Vérifier que tu sais tracer une boucle dont la borne interne dépend de i et transformer le comptage en une somme.',
      method: [
        'Pour chaque valeur de i, fais varier j de 1 jusqu’à i.',
        'Écris une ligne par couple (i, j) pour construire la trace avec n = 5.',
        'Compte i exécutions de cout pour une valeur donnée de i.',
        'Additionne ces quantités de 1 à n, puis utilise la formule de la somme.',
      ],
      guidedCorrection: [
        'La trace commence par (1, 1), puis (2, 1), (2, 2), et continue sur le même modèle jusqu’à i = 5.',
        'Pour n = 5, le nombre de lignes affichées est 1 + 2 + 3 + 4 + 5 = 15.',
        'Pour n quelconque, cout est exécuté n(n + 1) / 2 fois.',
        'L’ordre de grandeur de ce nombre est Θ(n²).',
      ],
      traps: [
        'Faire varier j jusqu’à n alors que sa borne est i.',
        'Oublier que chaque cout se termine par endl et produit donc une ligne.',
        'Donner seulement n² alors que la question demande un nombre exact d’exécutions.',
      ],
    },
    {
      id: 'ex-02',
      title: 'Exercice 2 — Structures, copies et pointeurs',
      topic: 'Pointeurs et structures',
      relatedChapters: [
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
      relatedExamples: [],
      promptSummary: 'Suivre un programme qui crée deux étudiants, copie ces valeurs dans un tableau, puis modifie les étudiants d’origine avec des pointeurs avant plusieurs affichages.',
      whatTheyWant: 'Vérifier que tu distingues les objets d’origine, les pointeurs qui les désignent et les copies déjà placées dans le tableau.',
      method: [
        'Construis un tableau séparé pour e1, e2, ptre1, ptre2 et les deux cases de e_tab.',
        'Note que e_tab reçoit des copies de e1 et e2 avant les modifications faites par les pointeurs.',
        'Applique chaque affectation à l’objet réellement pointé.',
        'Lis ensuite chaque cout en choisissant soit la copie du tableau, soit l’objet pointé.',
      ],
      guidedCorrection: [
        'ptre1 modifie e1 et ptre2 modifie e2 ; les pointeurs ne désignent pas les cases de e_tab.',
        'Les prénoms et genres de e1 et e2 changent après les affectations faites avec ->.',
        'Les deux cases de e_tab gardent les valeurs copiées au moment de sa création.',
        'Les écritures (*ptre).champ et ptre->champ accèdent au même objet.',
      ],
      traps: [
        'Croire qu’une copie de structure reste liée à sa source.',
        'Appliquer les modifications de ptre1 et ptre2 aux éléments de e_tab.',
        'Confondre le nom et le prénom lors de la lecture des champs.',
      ],
    },
    {
      id: 'ex-03',
      title: 'Exercice 3 — Liste chaînée triée',
      topic: 'Listes chaînées',
      relatedChapters: [
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
      relatedExamples: [
        { label: 'Exemple — Liste chaînée, insertion', href: '#/exemples/liste-insertion' },
      ],
      promptSummary: 'Rappeler la représentation d’une liste chaînée d’entiers, calculer la somme de ses éléments et insérer une valeur à sa place dans une liste déjà triée.',
      whatTheyWant: 'Vérifier que tu sais parcourir une liste sans perdre la tête et raccorder un nouveau nœud en conservant l’ordre croissant.',
      method: [
        'Définis un nœud avec une valeur entière et un pointeur suivant.',
        'Pour la somme, parcours la liste avec un pointeur temporaire et un accumulateur initialisé à zéro.',
        'Pour l’insertion, traite d’abord la liste vide et la valeur à placer avant la tête.',
        'Sinon, avance jusqu’au dernier nœud dont le suivant reste inférieur à la valeur, puis raccorde le nouveau nœud.',
      ],
      guidedCorrection: [
        'Le calcul de somme ne modifie aucun lien et s’arrête lorsque le pointeur temporaire vaut null.',
        'L’insertion en tête change la tête de la liste.',
        'Au milieu ou en fin, nouveau->suivant reçoit ancien->suivant, puis ancien->suivant reçoit nouveau.',
        'La liste reste triée si la position est trouvée avant de modifier les liens.',
      ],
      traps: [
        'Déplacer directement la tête pendant un simple parcours.',
        'Oublier le cas de la liste vide ou l’insertion avant la tête.',
        'Écraser ancien->suivant avant de l’avoir conservé dans nouveau->suivant.',
      ],
    },
    {
      id: 'ex-04',
      title: 'Exercice 4 — Séparer une pile d’étudiants',
      topic: 'Piles et files',
      relatedChapters: [
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
      relatedExamples: [
        { label: 'Exemple — Pile tableau', href: '#/exemples/pile-tableau' },
        { label: 'Exemple — File tableau', href: '#/exemples/file-tableau' },
      ],
      promptSummary: 'Rappeler la structure d’une pile d’étudiants et sa différence avec une file, puis déplacer les garçons vers p2 en conservant l’ordre des garçons et celui des filles restées dans p1.',
      whatTheyWant: 'Vérifier les règles LIFO/FIFO et ta capacité à filtrer une pile sans inverser l’ordre relatif des deux groupes.',
      method: [
        'Définis clairement le sommet de p1 et l’ordre à préserver avant de commencer.',
        'Rappelle qu’une pile est LIFO alors qu’une file est FIFO.',
        'Dépile récursivement p1 jusqu’à sa base, puis traite les étudiants pendant la remontée.',
        'Empile chaque étudiant dans p2 si genre vaut 1, sinon remets-le dans p1.',
      ],
      guidedCorrection: [
        'Le parcours récursif utilise la pile d’appels comme stockage temporaire.',
        'Le traitement pendant la remontée reconstruit p1 et p2 sans inverser l’ordre initial de chaque groupe.',
        'Une simple boucle qui dépile p1 et empile directement dans p2 inverserait l’ordre des garçons.',
        'Teste la méthode sur une petite pile mêlant deux filles et deux garçons avant d’écrire l’algorithme général.',
      ],
      traps: [
        'Confondre le sommet d’une pile avec le début d’une file.',
        'Préserver le contenu mais inverser l’ordre relatif.',
        'Perdre les filles en ne reconstruisant pas p1.',
      ],
    },
    {
      id: 'ex-05',
      title: 'Exercice 5 — Modéliser un match de football',
      topic: 'Structures et listes',
      relatedChapters: [
        { label: 'Chapitre 4 — Pointeurs & structures', href: '#/chapitre-4-pointeurs-structures' },
      ],
      relatedExamples: [
        { label: 'Exemple — Liste chaînée, insertion', href: '#/exemples/liste-insertion' },
      ],
      promptSummary: 'Modéliser les joueurs et le match avec un tableau de listes chaînées, puis décrire le déplacement d’un joueur, la détection du hors-jeu et la validation d’un but.',
      whatTheyWant: 'Vérifier que tu peux traduire des règles métier en structures cohérentes et en opérations de recherche, retrait, insertion et mise à jour.',
      method: [
        'Définis Joueur avec numéro, équipe, distance à son gardien et position, puis Match avec terrain, possession, passeur, scores et temps restant.',
        'Pour déplacer un joueur, calcule sa case, cherche-le dans la liste, retire-le, actualise sa distance et insère-le dans la nouvelle case.',
        'Pour le hors-jeu, vérifie d’abord que le passeur est un coéquipier, puis compare toutes les positions par rapport au même but adverse.',
        'Pour le but, réutilise la règle de hors-jeu, vérifie la proximité au gardien adverse, actualise le bon score et donne le ballon au gardien concerné.',
      ],
      guidedCorrection: [
        'Le tableau représente les 22 positions et chaque case contient la liste des joueurs présents à cette position.',
        'SeDeplacer doit modifier à la fois la liste source, la liste destination et la distance stockée ; un gardien ne bouge pas.',
        'La comparaison de hors-jeu doit convertir les joueurs vers une même référence au but adverse avant de chercher le plus proche.',
        'SifflerUnBut ne marque pas si le porteur est hors-jeu ; sinon il met à jour le score de son équipe et transfère la possession au gardien adverse.',
      ],
      traps: [
        'Changer seulement la distance sans déplacer le joueur entre les listes.',
        'Comparer des distances mesurées depuis deux gardiens différents sans les normaliser.',
        'Oublier de vérifier que la passe vient d’un coéquipier pour le hors-jeu.',
        'Incrémenter le mauvais score ou donner le ballon au mauvais gardien après un but.',
      ],
    },
  ],
}
