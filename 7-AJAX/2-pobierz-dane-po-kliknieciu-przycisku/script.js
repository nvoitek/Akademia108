let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    getData();
});

function getData(){
    fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(response => response.json())
    .then((data) => {
        let div = document.createElement("div");
        div.id = "dane-programisty";

        for (let x in data) {
            div.innerHTML += x + ":" + data[x] + "<br>";
        }

        let btn = document.querySelector("button");
        btn.after(div);
    });
}