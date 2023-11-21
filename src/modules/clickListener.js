const clicker = (target) => {
  console.log(target);

  if (target.id === "hamburger") {
    const currentState = target.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      target.setAttribute("data-state", "opened");
      target.setAttribute("aria-expanded", "true");
    } else {
      target.setAttribute("data-state", "closed");
      target.setAttribute("aria-expanded", "false");
    }
  }
};

export { clicker };
