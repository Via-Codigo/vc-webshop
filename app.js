/**inicio*/
var menuH = document.getElementById("menuH");
menuH.addEventListener("click", aparecerM);

function aparecerM() {
  var menuA = document.getElementById("menuApa");
  menuA.classList.toggle("menuListo");
}

/**
 * cambiando tamaño de menu
 */
function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 200,
    menuPrincipal = document.getElementById("menuPrincipal"),
    logoTop = document.getElementById("logoTop"),
    itemsMenu = document.getElementsByClassName("itemMenu");
    menuC = document.getElementById("menuCelular");

  if (distanceY > shrinkOn) {
    menuPrincipal.classList.add("small");
    logoTop.classList.add("small");
    for (let i = 0; i < itemsMenu.length; i++) {
      itemsMenu[i].classList.add("small");
      menuC.style.marginTop = "88px";
    }
  } else {
    menuPrincipal.classList.remove("small");
    logoTop.classList.remove("small");
    for (let i = 0; i < itemsMenu.length; i++) {
      itemsMenu[i].classList.remove("small");
      menuC.style.marginTop = "150px";
    }
  }
}

window.addEventListener("scroll", resizeHeaderOnScroll);

$(function(){
  $(".accordion-titulo").click(function(e){
           
        e.preventDefault();
    
        var contenido=$(this).next(".accordion-content");

        if(contenido.css("display")=="none"){ //open        
          contenido.slideDown(250);         
          $(this).addClass("open");
        }
        else{ //close       
          contenido.slideUp(250);
          $(this).removeClass("open");  
        }

      });
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}