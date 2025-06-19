document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#holdButton");
  const holdTime = 1000; // 1 second

  buttons.forEach(button => {
    const buttonContainer = button.closest(".button-container"); // Target the container of the current button
    let isHolding = false;
    let holdStartTime;
    let requestId;

    button.addEventListener("mousedown", () => {
      isHolding = true;
      holdStartTime = Date.now();

      const updateGradient = () => {
        if (!isHolding) return;

        const elapsedTime = Date.now() - holdStartTime;
        const progress = Math.min(elapsedTime / holdTime, 1); // Normalize progress (0 to 1)

        // Adjust the gradient's position based on progress
        const gradientPosition = progress * 100; // Progress from 0% to 100%
        buttonContainer.style.background = `linear-gradient(to right, #2E3D28 ${gradientPosition}%, #181818 ${gradientPosition}%)`;

        if (progress >= 1) {
          isHolding = false;
          triggerAction(button); // Pass the button to identify the card
        } else {
          requestId = requestAnimationFrame(updateGradient);
        }
      };

      requestAnimationFrame(updateGradient);
    });

    button.addEventListener("mouseup", () => resetButton(buttonContainer));
    button.addEventListener("mouseleave", () => resetButton(buttonContainer));

    function triggerAction(button) {
      const card = button.closest(".card"); // Find the card the button belongs to
      alert(`The item has been added to your wardrobe!`);

      // Reset the gradient after completing the action
      setTimeout(() => {
        buttonContainer.style.background = "linear-gradient(to right, #2E3D28 0%, #181818 0%)"; // Reset gradient
      }, 500); // Wait briefly to make the action feel distinct
    }

    function resetButton(container) {
      if (isHolding) {
        isHolding = false;
        cancelAnimationFrame(requestId);
        container.style.background = "linear-gradient(to right, #2E3D28 0%, #181818 0%)"; // Reset gradient
      }
    }
  });
});
