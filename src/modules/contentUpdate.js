const display = document.getElementById("display");

const contentUpdate = (targetid) => {
  console.log("content update hit");

  switch (targetid) {
    case "linkToDogs":
      display.innerHTML = ` 
      
      <div class="title__div"><h1>Available For Adoption</h1></div>

        <dialog id="dogModal">
          <h3>hi dog</h3>
        </dialog>

        <div class="grid3">
          <div class="grid">
            <div class="dog--shell">
              <div class="headshot">picture here</div>
              <div class="details">
                <div class="name">Doggie</div>
                <div class="quick">
                  <span class="gender">m</span><span class="size">small</span
                  ><span class="age">5</span>
                </div>
                <div class="learn--about-me">Learn about me</div>
              </div>
            </div>
          </div>

          <div class="grid">
            <div class="dog--shell">
              <div class="headshot">picture here</div>
              <div class="details">
                <div data-dogName="doggie" class="name">Doggie</div>
                <div class="quick">
                  <span class="gender">m</span><span class="size">small</span
                  ><span class="age">5</span>
                </div>
                <div class="learn--about-me">Learn about me</div>
              </div>
            </div>
          </div>

          <div class="grid">
            <div class="dog--shell">
              <div class="headshot">picture here</div>
              <div class="details">
                <div class="name">Doggie</div>
                <div class="quick">
                  <span class="gender">m</span><span class="size">small</span
                  ><span class="age">5</span>
                </div>
                <div class="learn--about-me">Learn about me</div>
              </div>
            </div>
          </div>
        </div>
      `;
      break;
    case "linkToAction":
      display.innerHTML = `  <h1>Adoption Agreement and Application</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
      perspiciatis aperiam quos magnam distinctio quis repellendus perferendis
      illo dicta suscipit id unde maxime quas animi at, a vitae, minus libero.
    </p>
    <button>Click here to apply to adopt</button>
    <br /><br /><br />
    <h1>Fostering Agreement and Application</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
      perspiciatis aperiam quos magnam distinctio quis repellendus perferendis
      illo dicta suscipit id unde maxime quas animi at, a vitae, minus libero.
    </p>
    <button>Click here to apply to foster</button>
  
    `;

      break;

    case "linkToHelp":
      display.innerHTML = `help`;
      break;
    case "linkToContact":
      display.innerHTML = `
<form id="adoptionForm" action="">
<div class="form-group">
  <label for="email">First Name:</label>
  <input
    type="text"
    name="email"
    class="form-control"
    id="fromEmail"
    placeholder="required"
  />
</div>
<div class="form-group">
  <label for="email">Last Name:</label>
  <input
    type="text"
    name="email"
    class="form-control"
    id="fromEmail"
    placeholder="enter your email"
  />
</div>
<div class="form-group">
  <label for="email">Email:</label>
  <input
    type="text"
    name="email"
    class="form-control"
    id="fromEmail"
    placeholder="enter your email"
  />
</div>
<div class="form-group">
  <label for="email">Message:</label>
  <input
    type="text"
    name="email"
    class="form-control"
    id="fromEmail"
    placeholder="enter your email"
  />
</div>
</form>`;

      break;
  }
};

export { contentUpdate };
