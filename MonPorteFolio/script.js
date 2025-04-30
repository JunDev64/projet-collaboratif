const monText = `Bienvenue sur mon Portefolio voyageur =) !! Je me présente ,je suis Vaynix et je suis pasionné d'informatique !!
Mais ce qui me passione en particulier c'est le développement Blockchain et la Cybersécurité lié au développement informatique.
Ma principale qualité est la persévérance  `
const lettresDiv = document.getElementById('p1');  // On s'assure d'avoir l'élément où afficher le texte

let index = 0;   //Index pour suivre la position actuelle dans le texte

 setInterval(() => {
     // Vérifie si on a encore des lettres à afficher
     if (index < monText.length) {
         lettresDiv.textContent += monText[index];  // Ajoute la lettre actuelle au texte
         index++;  // Passe à la lettre suivante
     }
 }, 15);

