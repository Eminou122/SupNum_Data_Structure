#include <stdio.h>
#include <iostream>
#include "entete.h"
AVL arbreVide() {
	return NULL;
}
int estVide(AVL av) {
	int result = (av == NULL);
	return result;
}

void prefix(AVL av) {
	if(!estVide(av)) {
		printf("%d ", av->val);
		prefix(av->g);
		prefix(av->d);
	}
}
void infixe(AVL av) {
	if(!estVide(av)) {
	    infixe(av->g);
	    printf(" %d ", av->val);
		infixe(av->d);
	
	}
}
void postfixe(AVL av) {
	if(!estVide(av)) {
	    postfixe(av->g);
		postfixe(av->d);
		printf(" %d ", av->val);
	}
}
void prefix_D(AVL av) {
	if(!estVide(av)) {
		printf("%d ", av->deseq);
		prefix_D(av->g);
		prefix_D(av->d);
	}
}

AVL adjoindre(AVL av, int e) {
    AVL y, p, pp;
	/* céér un nouveau noeud avec val =e  */
	y = malloc(sizeof(noeud)); 
	y->val = e; 
	y->g=NULL;
	y->d=NULL;
	if(estVide(av)){
		return y;
	}
	else{
		
		p=av; pp=NULL;
		/* pp est le  pere de p */
		while(p!=NULL){/*descente mémorisation du dernier noeud visité  pour y ajouter y comme fils*/
			
			pp=p;
			if(e==p->val) return av; // element déja dans l'arbre
			else if(e<=p->val)
				p=p->g;
			else p=p->d;
		}
		/*adjonction*/
		// 1. Ecrire les instructions qui permettent à adjoindre l'élement e ici
		if (e <= pp->val){
			pp->g = y;
		}else{
			pp->d = y;
		}
		
		return av;
	}
}
// fonction qui retourne le successeur dans noeud double
AVL succ(AVL av, AVL  pere) {
	AVL result, pere = NULL;
	if(!estVide(av)) {
		AVL d = av->d;
		
		if( !estVide(d)) {
			result = d;
			while(!estVide(d->g)) {
				pere = d;
				d = d->g;
				result = d;
			}
		}
		
		
	}
	return result;
}
AVL supprimerF(AVL pereP, AVL P, AVL A ) {
	if(pereP == NULL) {
		A = NULL;
		P = NULL;
		return NULL;
	} else {
		if(pereP ->g ==P) {
			pereP ->g = NULL;
			
		} else {
			
			pereP ->d = NULL;
		}
		return A;
	}
	
}
AVL supprimerSg(AVL pereP, AVL P, AVL A ) {
	if(pereP == NULL) {
			A = A->g;
			P = NULL;
			return A;
	} else {
			if(pereP ->g == P) {
				pereP ->g = P->g;
			
			} else {
				pereP ->d = P->g;
				
			}
			P = NULL;
			return A;
		}
}
AVL supprimerSd(AVL pereP, AVL P, AVL A ) {
	if(pereP == NULL) { // suppression de la racine
			A = A->d;
			P = NULL;
			return A;
	} else {
			if(pereP ->g == P) {
				pereP ->g = P->d;
				
			} else {
				pereP ->d = P->d;
				
			}
			P = NULL;
			
			return A;
		}
}
AVL supprimerD(AVL pereP, AVL P, AVL A) {
	AVL Psucc = NULL;
	AVL successeur = succ(P, Psucc);
	P->val = successeur->val;

	if(successeur->d == NULL && successeur->g == NULL) {
		if(Psucc->g == successeur) {
			Psucc->g = NULL;
		} else {
				Psucc->d = NULL;
		}
	} else {
		if(Psucc->g == successeur) {
			Psucc->g = successeur->d;
		} else {
		     	Psucc->d = successeur->d;
		}
	}
	return A;
}
AVL suppABR(AVL av, int e) {
	AVL temp = av;

	AVL pere = NULL;
	int found = 0;
	while(temp != NULL && !found){
		if(temp ->val == e) {
			found = 1; // element trouvé
			if(temp->d == NULL && temp->g == NULL) {
				av = supprimerF(pere, temp, av);
			} else if(temp->g != NULL && temp->d == NULL) {
				av = supprimerSg(pere, temp,av ); // simple gauche
			} else if(temp->g == NULL && temp->d != NULL) {
				av = supprimerSd(pere, temp, av); // simple droit
			} else { // double
				
			     av = supprimerD(pere, temp, av);
			}
		}else if(temp ->val > e) {
			
			pere = temp;
			temp = temp->g;
		}else {
		
			pere = temp;
			temp = temp->d;
		}
	}
	temp = NULL;
	pere = NULL;
	return av;
}




