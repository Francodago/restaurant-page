import pizzaImage from './assets/images/italian-food.jpg';
export default function loadPage(){
    const content =document.querySelector("#content");
  const image = document.createElement('img');
  image.src = pizzaImage;
  image.alt = "Pizza";

  const heading = document.createElement("h2");
  heading.textContent="welcome to Pizza Piacere";
  const para = document.createElement("p");
  para.innerHTML ="<b>Pizza Piacere</b> serves up rustic, wood-fired pizzas and handmade Italian favorites, crafted with care and a passion for simple, delicious food."
  //append all the elements
  content.appendChild(image);
  content.appendChild(heading);
  content.appendChild(para);
}