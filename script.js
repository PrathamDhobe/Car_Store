let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
// when user click on login btn form will be displayed
document.querySelector('#login-btn').onclick = () =>{
document.querySelector('.login-form-container').classList.toggle('active');
}
// when user click on cross btn form will be closed
document.querySelector('#close-login-form').onclick = () =>{
document.querySelector('.login-form-container').classList.remove('active');
    }

window.onscroll = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');

    }else{
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');

    }else{
        document.querySelector('.header').classList.remove('active');
    }
  
}


//slider coding start
var swiper = new Swiper(".vehicles-slider", {
    // for giving space between images
    spaceBetween: 50,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,       
      },

      991: {
        slidesPerView: 3,        
      },
    },
  });
  //slider coding end


  var swiper = new Swiper(".reviews-slider", {
    // for giving space between images
    spaceBetween: 50,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,       
      },

      991: {
        slidesPerView: 3,        
      },
    },
  });
  //slider coding end

//opn description page after clicking on button
  function ChangeImage(imageNumber) {
    localStorage.setItem("imageNumber", imageNumber);
}
  function loadImage() {
    var savedImageNumber = localStorage.getItem("imageNumber");
    if (savedImageNumber !== null) {
        var imgElement = document.getElementById("carImage");
        var newImageSrc = "car" + savedImageNumber + ".jpg";
        imgElement.src = newImageSrc;
    }
}


