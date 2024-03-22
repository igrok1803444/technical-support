"use strict";
const serviceList = {
    repairComputer: "naprawa komputera",
    resetData: "odzyskiwanie danych",
    problemWithPrograms: "problemy z oprogramowaniem",
    lanSettings: "konfiguracja sieci LAN",
    other: "inne",
};
const contactForm = document.querySelector("form.contact-form");
const scriptOutput = document.querySelector("p.script-output");
const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const formChildren = form.elements;
    const serviceKey = formChildren.selectService
        .value;
    const outputText = `
  ${formChildren.userName.value} ${formChildren.userSurname.value} <br>
  ${formChildren.userEmail.value.toLocaleLowerCase()} <br>
  Usługa: ${serviceList[serviceKey]}
    `;
    scriptOutput.innerHTML = outputText;
};
contactForm.addEventListener("submit", handleForm);
