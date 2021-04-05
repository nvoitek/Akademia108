function addItem() {
  let items = document.getElementById("items");

  let items_count = items.childElementCount;

  let new_item = document.createElement("li");
  new_item.setAttribute("class", "item");
  new_item.innerText = `Item ${items_count+1}`;

  items.appendChild(new_item);
}