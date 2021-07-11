$(document).ready(function(){

    $(".accordion-item").click(function(){
        if ($(this).hasClass("is-open")) {
            $(this).find(".accordion-content").slideUp();
        } else {
            $(this).find(".accordion-content").slideDown();
        }
        $(this).toggleClass("is-open");
    });

});