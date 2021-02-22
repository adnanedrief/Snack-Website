
alert(" 🍕 🍽️ 🍕 Bienvenu  Chez nous  🍕 🍽️ 🍕 😁  ");


var i=0;
var image_spag=["img/Spaghetti/spaghetti_au_crovettes.jpg","img/Spaghetti/spaghetti_au_fruit_de_mer.jpg","img/Spaghetti/spaghetti_viande_hache.jpg","img/Spaghetti/spaghetti-normale.jpg"]; /* les image ne sont pas dans le meme fichier que le script */ 
var img_bois=["img/boisson/coca-cola.jpg","img/boisson/fanta.jpg","img/boisson/oulmas.jpg","img/boisson/sprite.jpg","img/boisson/sidi-ali-15"];
var img_panini=["img/panini/panini-au-jambon-italien-et-aux-tomates-.jpg","img/panini/panini-mixte.jpg","img/panini/panini-dande.jpg","img/panini/panini-omlette.jpg"];
var img_pizza=["img/pizza/pizza-4-saisons.jpg","img/pizza/pizza-royale1-.jpg","img/pizza/pizza-vergitarien.jpg","img/pizza/pizza-viande-hachee.jpg"];
var reviews=["img/reviews/review1.png","img/reviews/review2.png","img/reviews/review3.png","img/reviews/review4.png",];
function sildeshow()						/* le point source ( .src) signie que cette element prend comme source la tableau des images */	
{											/*slider_place : le name de l élement qu'on pointe sur */
		document.getElementById("Spaghetti").src = image_spag[i]; /*document pour faire l appele à notre page HTML */
		document.getElementById("Boisson").src =img_bois[i];
		document.getElementById("Panini").src =img_panini[i];
		document.getElementById("Pizza").src =img_pizza[i];
		document.getElementById("reviews").src =reviews[i];
		if( i < image_spag.length - 1) /* toutes les tableaux en la meme taille donc il suffit d utiliser un seul LENGTH*/
		{
			i++;
		}
		else
		{
			i=0;
		}
		setTimeout("sildeshow()",3000); // setTimeout pour régler le temps et prend deux paramètre le nom de la fonction et le nombre de miliseconds voulu 
};
sildeshow(); // appel à la fonction du slider