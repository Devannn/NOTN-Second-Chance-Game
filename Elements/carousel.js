// Get all cards
const cards = document.querySelectorAll('.card');

// Get all radio inputs
const radios = document.querySelectorAll('input[name="slider"]');

// Function to update the center card
function updateCenterCard() {
  // Remove the center-card class and hide buttons for all cards
  cards.forEach(card => {
    card.classList.remove('center-card');
    const button = card.querySelector('.button-container');
    if (button) button.style.display = 'none'; // Hide button for non-center cards
  });

  // Find the checked radio button and its associated card
  const checkedRadio = document.querySelector('input[name="slider"]:checked');
  const centerCardId = checkedRadio.id.replace('item', 'song'); // Match card ID
  const centerCard = document.getElementById(centerCardId);

  // Add the center-card class to the center card and show its button
  if (centerCard) {
    centerCard.classList.add('center-card');
    const button = centerCard.querySelector('.button-container');
    if (button) button.style.display = 'block'; // Show button for center card
  }
}

// Add event listeners to radio inputs to trigger the update
radios.forEach(radio => {
  radio.addEventListener('change', updateCenterCard);
});

// Initialize the center card on page load
updateCenterCard();
