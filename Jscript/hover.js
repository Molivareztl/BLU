    const burger = document.getElementById("burger");
    burger.onclick = function() {hide()};
    const movil = window.matchMedia("(max-width: 512px)");
    const texto = burger.getElementById("nav");
    function hide(){
      if(texto.style.display == "none"){
        texto.style.display = "block";
        burger.style.height = "32%";
      }else{
        texto.style.display = "none";
        burger.style.height = "16%";
      }
      
    }