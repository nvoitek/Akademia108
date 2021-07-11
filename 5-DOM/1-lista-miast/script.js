let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let body = document.getElementsByTagName("body")[0]

let ul = document.createElement("ul");

for (let city of cities) {
  let li = document.createElement("li");
  li.setAttribute("class", "city");
  li.innerText = city;
  ul.appendChild(li);
}

body.appendChild(ul);