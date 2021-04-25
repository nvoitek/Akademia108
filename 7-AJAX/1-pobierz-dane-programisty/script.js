let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let httpReq = new XMLHttpRequest();
 
    httpReq.open('GET', 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php');

    httpReq.onreadystatechange = () => {
        
        if (httpReq.readyState === 4) {
 
            if (httpReq.status === 200) {
 
                let data = httpReq.responseText;
                let dataJSON = JSON.parse(data);
                
                let div = document.createElement("div");
                div.id = "dane-programisty";

                for (let x in dataJSON) {
                    div.innerHTML += x + ":" + dataJSON[x] + "<br>";
                }

                this.after(div);
 
                httpReq = null;
            }
        }
    }

    httpReq.send();
});