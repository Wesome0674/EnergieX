// Sélectionne tous les éléments avec la classe 'input-variant'
document.querySelectorAll(".input-variant").forEach((selectElement) => {
  // Ajoute un écouteur d'événement 'change' à chaque élément select
  selectElement.addEventListener("change", (ev) => {
    // Récupère la valeur sélectionnée (l'URL)
    var selectedPage = ev.currentTarget.value;
    console.log(selectedPage);

    // Si une option valide est sélectionnée, redirige vers cette URL
    if (selectedPage) {
      window.location.href = selectedPage;
    }
  });
});
