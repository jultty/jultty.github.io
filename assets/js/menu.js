const botaoMenu = document.getElementById("nav-botao");

$("#nav-botao").click(function(){
    $("#nav-menu").fadeToggle("slow");
    // botaoMenu.style.marginBottom = "40px";
    $("#nav-botao").toggleClass("nav-botao-fundo");
    $("#nav-botao").toggleClass("nav-botao-topo");
}); 
