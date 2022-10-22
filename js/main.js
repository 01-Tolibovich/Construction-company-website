// Бургер меню
let hamb = document.querySelector("#hamb");
let menu = document.querySelector(".menu");
let lists = document.querySelector(".lists");
let body = document.body;

hamb.addEventListener("click", hambHandler);
function hambHandler(e) {
    e.preventDefault();
    lists.classList.toggle("show");
    menu.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
}

const links = Array.from(menu.children);
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});
function closeOnClick() {
    lists.classList.remove("show");
    menu.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}



var time = 2,
  cc = 1;
$(window).scroll(function() {
  $('#counter').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 200) {
      if (cc < 2) {
        $(".number").addClass("viz");
        $('h3').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});
