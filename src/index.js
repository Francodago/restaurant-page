import loadPage from "./home";
import './styles.css';
import loadMenu from "./menu";
import loadContact from "./contact";
loadPage();

document.querySelector("#home-btn").addEventListener("click", loadPage);
document.querySelector("#menu-btn").addEventListener("click", loadMenu);
document.querySelector("#contact-btn").addEventListener("click",loadContact);