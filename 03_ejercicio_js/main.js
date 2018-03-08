
$("#elem1").on("mouseover", function(){
    $("#contenedor2 img").attr("src", "img/arbol.jpg")
    $("#elem1").attr("class", "destacar")
});

$("#elem2").on("mouseover", function(){
    $("#contenedor2 img").attr("src", "img/lago.jpg")
    $("#elem2").attr("class", "destacar")
});

$("#elem3").on("mouseover", function(){
    $("#contenedor2 img").attr("src", "img/rio.jpg")
    $("#elem3").attr("class", "destacar")
});

$("#elem4").on("mouseover", function(){
    $("#contenedor2 img").attr("src", "img/sol.jpg")
    $("#elem4").attr("class", "destacar")
});

$("#contenedor1 ul li").on("mouseout", function(){
    $("#contenedor2 img").attr("src", "img/blanco.jpg")
    $("#contenedor1 ul li").attr("class", "")
});
