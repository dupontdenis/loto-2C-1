const container = document.querySelector(".container");
const choices = document.querySelector(".choices");

const handleSelect = function (event) {
  const targetElement = event.target;

  if (targetElement.closest("div")) {
    const selectedDiv = targetElement.closest(".container > div");
    // Toggle selected class
    selectedDiv.classList.toggle("selected");
    const selectedElements = document.querySelectorAll(
      ".container > div.selected"
    );
    // Remove from choices container and re-append to maintain order
    selectedElements.forEach((element) => {
      choices.appendChild(element);
    });
  }
};

container.addEventListener("click", handleSelect, false);
