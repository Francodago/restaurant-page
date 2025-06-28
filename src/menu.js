import setContentLayout from './utils/helper.js';
import margheritaImg from './assets/images/margherita.jpg';
import pepperoniImg from './assets/images/pepperoni.jpg';
import mushroomOlivesImg from './assets/images/mushroom-olives.jpg';
import veggieImg from './assets/images/veggies.jpg';
export default function loadMenu(){
    const content =document.querySelector("#content");
    setContentLayout("menu-page");
    content.innerHTML='';

    //container for the menu items:
    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");
const items=[
    {
        name: "Pizza Margherita",
        description: "Classic tomato, mozzarella, and fresh basil.",
        image: margheritaImg
    },
    {
        name: "Pepperoni",
        description: "Loaded with spicy pepperoni and melted mozzarella.",
        image: pepperoniImg
    },
    {
        name: "Mushroom & Olives",
        description: "Earthy mushrooms and tangy black olives on a rich tomato base.",
        image: mushroomOlivesImg
    },
    {
        name: "Veggie Pizza",
        description: "A medley of bell peppers, onions, zucchini, and spinach.",
        image: veggieImg
    }

];
    // Loop through items and create card elements
    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("menu-item");

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;

        const name = document.createElement("h3");
        name.textContent = item.name;

        const desc = document.createElement("p");
        desc.textContent = item.description;

        card.append(img, name, desc);
        menuGrid.appendChild(card);
    });

    content.append( menuGrid);
}