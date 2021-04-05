let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let fname = form.querySelector('[name="fname"]').value;
  let lname = form.querySelector('[name="lname"]').value;

  console.log(`first name: ${fname}, last name: ${lname}`);
});