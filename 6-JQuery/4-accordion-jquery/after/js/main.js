$(document).ready(function(){

    $(".accordion-item").click(function(){
        if ($(this).hasClass("is-open")) {
            $(this).removeClass("is-open");
            $(this).find(".accordion-content").slideUp();
        } else {
            $(this).addClass("is-open");
            $(this).find(".accordion-content").slideDown();
        }

    });

});