$("document").ready(function() {
    $("#carrete").hide();
});

$("h1").on("click", function() {
    $("h1").hide();
    $("#carrete").show();
});

$("#carrete img").on("mouseover", function() {
    $(this).attr("width", 300);
});

$("#carrete img").on("mouseout", function() {
    $(this).attr("width", 250);
});

