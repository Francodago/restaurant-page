export default function setContentLayout(className) {
    const content = document.querySelector("#content");
    content.className = ''; // Clear all previous classes
    content.classList.add(className);
}