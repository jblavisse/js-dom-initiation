'use strict';

/*
Reproduire en JS seulement ! 

<nav>
	<a href="/">Accueil</a>
	<a href="/services">Mes services</a>
	<a href="/contact">Contact</a>
</nav>

*/

/* 
Etape 1 -> Créer la nav et la placer dans le DOM HTML 
NB: Quand on crée un élément avec document.createElement, il est pour l'instant dissocié du DOM
Si on veut le lier au DOM, il faudra l'insérer grâce à une méthode via un élément de référence
Element de référence = Par rapport à quel autre élément de la page, je veux le placer 
*/

const nav = document.createElement("nav");
console.log(nav);

// const body = document.querySelector("body");
// Raccourci ->
const body = document.body;

body.prepend(nav);

function createLinkInNav(url, text) {
    const link = document.createElement("a");
    link.href = url;
    link.textContent = text;
    nav.append(link);
}

createLinkInNav("/","Accueil");
createLinkInNav("/services", "Mes services");
createLinkInNav("/contact", "Contact");