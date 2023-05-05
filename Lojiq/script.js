const operatorTexts = [
    "⊤", "⊥", "∀", "∃", "⊢", "⊨", "⇒", "≡", "↔", "→", "⊃", "⇔", "¬", "˜", "∧", "&", "∨", "∥", "⊕", "≡", "∃!", "≔", ":⇔"
];

const operatorContainer = document.querySelector(".operatorContainer");

operatorTexts.forEach((text) => {
    const operatorDiv = document.createElement("div");
    operatorDiv.classList.add("operator");
    operatorDiv.innerHTML = `<p>${text}</p><button class="copyBtn">Copy</button>`;
    operatorContainer.appendChild(operatorDiv);
});

const operatorButtons = document.querySelectorAll(".operator button");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const operatorText = button.parentNode.querySelector("p").textContent;
    navigator.clipboard.writeText(operatorText)
      .then(() => {
        // Affiche un message de confirmation sous le bouton copié
        const confirmationMessage = document.createElement("span");
        confirmationMessage.classList.add("confirmation-message");
        confirmationMessage.textContent = "Copied !";
        button.parentNode.appendChild(confirmationMessage);
        // Efface le message de confirmation après 2 secondes
        setTimeout(() => {
          button.parentNode.removeChild(confirmationMessage);
        }, 1000);
      })
      .catch((error) => {
        // Affiche un message d'erreur sous le bouton copié
        const errorMessage = document.createElement("span");
        errorMessage.classList.add("error-message");
        errorMessage.textContent = "Error !";
        button.parentNode.appendChild(errorMessage);
        // Efface le message d'erreur après 2 secondes
        setTimeout(() => {
          button.parentNode.removeChild(errorMessage);
        }, 1000);
      });
  });
});