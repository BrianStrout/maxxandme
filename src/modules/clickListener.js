import { dogModal } from "./launchDogModal.js";

const arrayOfMenuLinks = Array.from(
  document.querySelectorAll("li.menu__links")
);

const clicker = (target) => {
  console.log(target);

  if (target.id === "hamburger") {
    const currentState = target.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      target.setAttribute("data-state", "opened");
      target.setAttribute("aria-expanded", "true");
      arrayOfMenuLinks.forEach((link) => {
        link.classList.add("menu__links_tucked");
        console.log(link);
      });
    } else {
      target.setAttribute("data-state", "closed");
      target.setAttribute("aria-expanded", "false");
      arrayOfMenuLinks.forEach((link) => {
        link.classList.remove("menu__links_tucked");
      });
    }
  }
  if (target.classList.contains("menu__links")) {
    switch (target.id) {
      case "linkToDogs":
        console.log("hit");
        break;
      case " linkToAction":
        break;

      case "linkToHelp":
        break;
      case "  linkToContact":
        break;
    }
  }
  if (target.classList.contains("learn--about-me")) {
    dogModal(target);
  }
};

export { clicker };
