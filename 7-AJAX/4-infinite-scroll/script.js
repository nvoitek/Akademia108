const addContent = (data) => {
    for (let user of data) {
        let pId = document.createElement("p");
        let pName = document.createElement("p")
        let pWebsite = document.createElement("p")

        pId.innerText = `User ID: ${user.id}`
        pName.innerText = `User Name: ${user.name}`
        pWebsite.innerHTML = `User Website: ${user.website}<br>--------`

        let body = document.querySelector("body");

        body.appendChild(pId);
        body.appendChild(pName);
        body.appendChild(pWebsite);
    }
}

let gettingData = false;
let loading = document.querySelector("img");

const showLoading = () => {
    gettingData = true;
    loading.style.display = "block";
}

const hideLoading = () => {
    gettingData = false;
    loading.style.display = "none";
}

const getData = () => {
    if (!gettingData) {
        showLoading();

        fetch("https://akademia108.pl/api/ajax/get-users.php")
        .then(result => result.json())
        .then(data => {
            addContent(data);
            hideLoading();
        })
        .catch(error => console.log(error));
        
        
    }
}

const scrollToEnd = () => {
    let docEl = document.documentElement;

    let totalHeight = docEl.scrollHeight;

    let scrolledHeight = docEl.scrollTop;

    let viewHeight = docEl.clientHeight;

    if (Math.abs(viewHeight + scrolledHeight - totalHeight) <= 0.001) {
        getData();
    }
}


window.addEventListener("scroll", scrollToEnd);