(()=>{var o=e=>{let s=document.getElementById("dogModal");s.showModal(),s.addEventListener("click",i=>{let a=s.getBoundingClientRect();(i.clientX<a.left||i.clientX>a.right||i.clientY>a.top||i.clientY>a.bottom)&&console.log(a.left,a.right,a.top,a.bottom),console.log(i.clientX,i.clientY),s.close()})};var l=document.getElementById("display"),t=e=>{switch(console.log("content update hit"),e){case"linkToDogs":l.innerHTML=` 
      
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
      `;break;case"linkToAction":l.innerHTML=`  <h1>Adoption Agreement and Application</h1>
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
  
    `;break;case"linkToHelp":l.innerHTML="help";break;case"linkToContact":l.innerHTML=`
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
</form>`;break}};var d=Array.from(document.querySelectorAll("li.menu__links")),n=e=>{if(console.log(e),e.id==="hamburger"){let s=e.getAttribute("data-state");!s||s==="closed"?(e.setAttribute("data-state","opened"),e.setAttribute("aria-expanded","true"),d.forEach(i=>{i.classList.add("menu__links_tucked"),console.log(i)})):(e.setAttribute("data-state","closed"),e.setAttribute("aria-expanded","false"),d.forEach(i=>{i.classList.remove("menu__links_tucked")}))}e.classList.contains("menu__links")&&t(e.id),e.classList.contains("learn--about-me")&&o(e)};console.log("good");document.addEventListener("click",e=>{n(e.target)});})();
