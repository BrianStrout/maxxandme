const launchDogModal = (target) => {
  const dogModal = document.getElementById("dogModal");
  dogModal.showModal();
  dogModal.addEventListener("click", (e) => {
    const dialogDimensions = dogModal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY > dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    )
      console.log(
        dialogDimensions.left,
        dialogDimensions.right,
        dialogDimensions.top,
        dialogDimensions.bottom
      );
    console.log(e.clientX, e.clientY);
    dogModal.close();
  });
};
export { launchDogModal };
