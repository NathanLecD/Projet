document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez l'élément d'affichage
  var display = document.getElementsByName("boxinput")[0];

  // Sélectionnez tous les boutons
  var buttons = document.querySelectorAll(".button");

  // Ajoutez un gestionnaire d'événements pour chaque bouton
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      souris(button.textContent);
    });
  });

  // Ajoutez un gestionnaire d'événements pour les touches du clavier
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // Empêchez le comportement par défaut de la touche "Enter" (éviter le saut de ligne)
      event.preventDefault();
      // Appelez la fonction souris avec la valeur "="
      souris("=");
    } else if (event.key === "Backspace") {
      // Si la touche est "Backspace", appelez la fonction souris avec la valeur "AC"
      souris("AC");
    } else {
      // Pour les autres touches, appelez la fonction clavier
      clavier(event.key);
    }
  });

  // Fonction pour gérer les touches du clavier
  function clavier(key) {
    // Si la touche est un chiffre, un opérateur ou une virgule
    if (/[\d\+\-\*\/\=,]/.test(key)) {
      souris(key);
    }
  }
  // Fonction pour gérer les clics sur les boutons
  function souris(value) {
    if (value === "=") {
      // Évaluez l'expression mathématique
      try {
        if (display.value !== "") {
          // Remplacez les virgules par des points avant l'évaluation
          display.value = eval(display.value.replace(/,/g, "."));
        }
      } catch (error) {
        display.value = "Erreur";
      }
    } else if (value === "AC") {
      // Réinitialisez l'affichage
      display.value = "";
    } else if (value === "÷") {
      // Utilisez le texte brut pour la division
      display.value += "/";
    } else if (value === "×") {
      // Utilisez le texte brut pour la multiplication
      display.value += "*";
    } else if (value === "+/-") {
      if (display.value !== "") {
        display.value = parseFloat(display.value) * -1;
      }
    } else if (value === "%") {
      if (display.value !== "") {
        display.value = parseFloat(display.value) / 100;
      }
    } else {
      // Ajoutez la valeur du bouton à l'affichage
      display.value += value;
    }
  }
});

const thba = document.querySelector(".thb");
const calculatrice = document.querySelector(".calculatrice");
const icon = document.querySelector(".icon");
let dark = true;
thba.onclick = () => {
  calculatrice.classList.toggle("dark");
  thba.classList.toggle("actif");
  dark = !dark;
};
