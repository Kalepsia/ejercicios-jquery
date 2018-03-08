
let colores = ["blue", "yelow", "red", "grey", "green","orange", "purple"]
//no se si esto se podía cambiar, pero no lo conseguia hacer y en un tutorial salia algo así y funciona.
function color() {
   return colores[Math.floor(Math.random() * colores.length)];
}; 


$("document").ready(function(){
    $("#anuncio").text("¡CLICK! para cambiar de color").hide().fadeIn(3000);
});

$("#anuncio").on("click", function() {
    $("#anuncio").css("background-color", color());
});