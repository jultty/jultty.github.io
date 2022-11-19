const userLang = navigator.language || navigator.userLanguage;
const pageLang = document.getElementsByTagName('html')[0].getAttribute('lang');

if (userLang != pageLang) {
    $("#lang-notification").fadeIn("slow");    
}

$("#lang-dismiss").click(function(){
    $("#lang-notification").fadeOut("fast");
});
