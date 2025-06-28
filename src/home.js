import setContentLayout from './utils/helper.js';
export default function loadPage() {
  const content = document.querySelector("#content");
  setContentLayout("home-page");
  content.innerHTML = "";

  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");

  const heading = document.createElement("h2");
  heading.textContent = "Welcome to Pizza Piacere";

  const para = document.createElement("p");
  para.innerHTML = `
      At <b>Pizza Piacere</b>, we bring you the true taste of Italy with rustic, wood-fired pizzas and handmade classics.<br>
      Fresh ingredients, bold flavors, and a warm Italian welcome — every slice tells a story.
  `;

  homeContent.append(heading, para);
  content.appendChild(homeContent);
}