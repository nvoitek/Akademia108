let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validate(form)) {
    event.preventDefault();
  }
});

let allCheckbox = document.querySelector('[name="allCheckbox"]');

allCheckbox.addEventListener("change", (event) => {
  let firstCheckbox = form.querySelector('[name="firstCheckbox"]');
  firstCheckbox.checked = allCheckbox.checked;
  firstCheckbox.disabled = allCheckbox.checked;
  let secondCheckbox = form.querySelector('[name="secondCheckbox"]');
  secondCheckbox.checked = allCheckbox.checked;
  secondCheckbox.disabled = allCheckbox.checked;
});

function validate(form) {
  let nameEmpty = form.querySelector('[name="name"]').value == "";
  let emailEmpty = form.querySelector('[name="email"]').value == "";
  let emailHasAtSign = form.querySelector('[name="email"]').value.includes("@");
  let firstCheckboxChecked = form.querySelector('[name="firstCheckbox"]').checked;

  let uls = document.getElementsByTagName("ul");

  let ul;

  if (uls.length == 0) {
    let body = document.getElementsByTagName("body")[0];
    ul = document.createElement("ul");
    body.appendChild(ul);
  } else {
    ul = uls[0];
    let li_count = ul.children.length;
    for (let i = 0; i < li_count; i++) {
      ul.children[0].remove();
    }
  }

  let valid = true;

  if (nameEmpty) {
    let li = document.createElement("li");
    li.innerText = "Name cannot be empty";
    ul.appendChild(li);
    valid = false;
  }
  if (emailEmpty) {
    let li = document.createElement("li");
    li.innerText = "Email cannot be empty";
    ul.appendChild(li);
    valid = false;
  }
  if (!emailHasAtSign) {
    let li = document.createElement("li");
    li.innerText = "Email must contain @";
    ul.appendChild(li);
    valid = false;
  }
  if (!firstCheckboxChecked) {
    let li = document.createElement("li");
    li.innerText = 'Checkbox "Zgoda marketingowa 1" must be checked';
    ul.appendChild(li);
    valid = false;
  }

  return valid;
}