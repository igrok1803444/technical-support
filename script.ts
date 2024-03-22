interface FormChildren extends HTMLFormControlsCollection {
  userName: HTMLInputElement;
  userSurname: HTMLInputElement;
  userEmail: HTMLInputElement;
  selectService: HTMLSelectElement;
}

const serviceList = {
  repairComputer: "naprawa komputera",
  resetData: "odzyskiwanie danych",
  problemWithPrograms: "problemy z oprogramowaniem",
  lanSettings: "konfiguracja sieci LAN",
  other: "inne",
};

const contactForm = document.querySelector(
  "form.contact-form"
)! as HTMLFormElement;
const scriptOutput = document.querySelector("p.script-output")!;

const handleForm = (event: Event) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;

  const formChildren = form.elements as FormChildren;

  const serviceKey = formChildren.selectService
    .value as keyof typeof serviceList;

  const outputText = `
  ${formChildren.userName.value} ${formChildren.userSurname.value} <br>
  ${formChildren.userEmail.value.toLocaleLowerCase()} <br>
  Usługa: ${serviceList[serviceKey]}
    `;

  scriptOutput.innerHTML = outputText;
};

contactForm.addEventListener("submit", handleForm);
