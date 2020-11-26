'use strict';

/*
document.getElementById("id"); 
document.querySelector("#id"); -> c'est la même chose

document.getElementsByClassName("class");
document.querySelectorAll(".class"); -> c'est la même chose

document.getElementsByTagName("li");
document.querySelectorAll("li"); -> c'est la même chose

monElement.textContent -> Le texte de mon élément (ça enlève tout ce qui a comme balise dedans)

<p><a href="">Du lien</a></p>
Si je fais sur mon p un :
textContent -> Du lien
innerHTML -> <a href="">Du lien</a>

monElement.style ça permettait d'ajouter/modifier une propriété CSS d'un élément
monElement.classList.add() ça ajoutait une classe à UN élément

Si je veux pouvoir modifier le style d'un élément quand j'en ai plusieurs dans un tableau,
J'ai pas le choix: Je dois utiliser une boucle et du coup agir sur mes éléments
un par un
*/

/*
Récupérer le paragraphe ayant pour id "invisible", 
et le cacher grâce à la propriété display en CSS
*/

const invi = document.querySelector("#invisible");
console.log(invi);

//invi.style.display = "none";

invi.classList.toggle("invisible");



/*
Récupérer les deux paragraphes ayant pour classe "text" 
et leur rajouter une classe "text-primary" (dans style.css, met le texte en violet)
*/

const paras = document.querySelectorAll(".text");
console.log(paras);

for(let i=0; i<paras.length;i++) {
    paras[i].classList.add("text-primary");
}

// ->
// paras[0].classList.add("text-primary");
// paras[1].classList.add("text-primary");


/*
Récupérer tous les paragraphes et modifier leur texte en "Ce paragraphe a été hacké!"

Pour info ->
A la fin, dans le navigateur ne doit se trouver que deux paragraphes:
- En violet (grâce à la classe "text-primary" ajouté)
- Dont le contenu est "Ce paragraphe a été hacké"
*/

const allParas = document.querySelectorAll("p");

for(let i=0; i<allParas.length;i++) {
    allParas[i].innerHTML = "Ce paragraphe a été hacké";
}