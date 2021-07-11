$(document).ready(function() {
    
    $("button").click(function() {
        
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data) {
            let div = document.createElement("div");
            div.id = "dane-programisty";

            for (let x in data) {
                div.innerHTML += x + ":" + data[x] + "<br>";
            }

            $("button").after(div);
        })
        .fail(function(error) {
            console.error(error);
        });

    });

});