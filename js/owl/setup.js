$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// Modal
var modal = document.getElementById("myModal"); // Pega

var btn = document.getElementById("myBtn");//botao do modal

var span = document.getElementsByClassName("close")[0];//<span> que fecha o modal

// Abre o modal clicando no botao
btn.onclick = function() {
  modal.style.display = "block";
}

//  <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Se clica fora do modal, fecha 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}