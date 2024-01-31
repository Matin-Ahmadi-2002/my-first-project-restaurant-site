$('#main-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#comment-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#article-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})


function showContent(tabIndex) {
    // پنهان کردن تمام محتواها
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    // نمایش محتوای مربوط به تب انتخاب شده
    contents[tabIndex].classList.add("active");

    // تغییر تب فعال
    var buttons = document.getElementsByClassName("menu-item");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    buttons[tabIndex].classList.add("active");
}



// کدهای مریوط به شمارنده ها
var counterElement = document.getElementById("cc-number");
var desiredNumber = 3000;
var currentNumber = 0;

var interval = setInterval(function() {
  currentNumber +=10;
  counterElement.innerHTML = currentNumber;

  if (currentNumber === desiredNumber) {
    clearInterval(interval);
  }
}, 1000 / desiredNumber);


