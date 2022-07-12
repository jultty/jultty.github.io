const botaoMenu = document.getElementById("nav-botao");

$("#nav-botao").click(function(){
    $("#nav-menu").fadeToggle("slow");
    $("#nav-botao").toggleClass("nav-botao-fundo");
    $("#nav-botao").toggleClass("nav-botao-topo");
}); 
