import setContentLayout from './utils/helper.js';
export default function loadContact(){
    const content = document.querySelector("#content");
    setContentLayout("contact-page");
    content.innerHTML = '';

    const contactWrapper = document.createElement("div");
    contactWrapper.classList.add("contact-wrapper");

    const form = document.createElement("form");
    form.classList.add("contact-form");

    const input = document.createElement("input");
    input.placeholder = "Your name";
    input.required = true;

    const email = document.createElement("input");
    email.placeholder = "Your email";
    email.type = "email";
    email.required = true;

    const textArea = document.createElement("textarea");
    textArea.placeholder = "Your message";
    textArea.required = true;

    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.type = "submit";

    form.append(input, email, textArea, submit);
    contactWrapper.appendChild(form);

    content.append(contactWrapper);
}