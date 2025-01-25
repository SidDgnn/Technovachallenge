document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  toggleButton.addEventListener('click', function () {
    const section = document.getElementById('hiddenSection');
    section.classList.toggle('visible');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Récupérer le nom de l'équipe depuis localStorage
  const teamName = localStorage.getItem("teamName");

  // Vérifier si le nom de l'équipe existe
  if (teamName) {
    // Insérer le nom de l'équipe dans l'élément avec l'id 'welcomeMessage'
    const welcomeMessage = document.getElementById("welcomeMessage");
    if (welcomeMessage) {
      welcomeMessage.textContent = `Bienvenue dans votre espace la team ${teamName} !`;
    }
  } 
});
