const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle("is-flipped");
});

const card2 = document.querySelector(".card__inner2");

card2.addEventListener("click", function (e) {
  card2.classList.toggle("is-flipped");
});

//TO add Navbar functionalities
const navbar = document.querySelector(".navbar");
const exit = document.querySelector(".nav_cross");
const menuImage = document.querySelector(".toggle-button");

menuImage.addEventListener("click", function (e) {
  navbar.classList.toggle("is-active");
  menuImage.classList.toggle("is-active");
 
});

exit.addEventListener("click", function (e) {
  menuImage.classList.toggle("is-active");
  navbar.classList.toggle("is-active");
});

//To exit navbar when clicked on links

const exit2 = document.querySelector(".buttons_nav");
exit2.addEventListener("click", function (e) {
  menuImage.classList.toggle("is-active");
  navbar.classList.toggle("is-active");
});
// sticky container
window.addEventListener("scroll", function () {
  var stickyDiv = document.getElementById("web-static");
  var stopStickySection = document.getElementById("static-end");
  var stopSectionTop = stopStickySection.getBoundingClientRect().top;
  var stickyDivHeight = stickyDiv.offsetHeight;

  if (stopSectionTop <= stickyDivHeight + 20) {
    // stickyDiv.style.position = "relative"; bhai iss line ki koi zaroorat nhi hai.
    stickyDiv.style.top =
      window.scrollY + stopSectionTop - stickyDivHeight - 0 + "500px";
  } else {
    stickyDiv.style.position = "sticky";
    stickyDiv.style.top = "20px";
    stickyDiv.style.opacity = "1";
  }
});
/*Copy Clipboard*/
// script.js
document.getElementById("tailwind-link").addEventListener("click", function () {
  const link = '<script src="https://cdn.tailwindcss.com"></script>';
  navigator.clipboard.writeText(link).then(
    function () {
      console.log("Link copied to clipboard!");
    },
    function (err) {
      console.error("Could not copy text: ", err);
    }
  );
});
document
  .getElementById("bootstrap-css-link")
  .addEventListener("click", function () {
    menuImage.classList.toggle("is-clicked");
    const link =
      '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>';
    navigator.clipboard.writeText(link).then(
      function () {
        console.log("Link copied to clipboard!");
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  });
document
  .getElementById("bootstrap-js-link")
  .addEventListener("click", function () {
    const link =
      '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>';
    navigator.clipboard.writeText(link).then(
      function () {
        console.log("Link copied to clipboard!");
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  });
document.getElementById("pico-link").addEventListener("click", function () {
  const link =
    '<link rel="stylesheet"href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"/>';
  navigator.clipboard.writeText(link).then(
    function () {
      console.log("Link copied to clipboard!");
    },
    function (err) {
      console.error("Could not copy text: ", err);
    }
  );
});




/*Landing PAge*/
const dragon1 = document.getElementById('#dragon1');
const dragon2 = document.getElementById('#dragon2');
const text1 = document.getElementsByClassName('.one');
const text2 = document.getElementsByClassName('.two');
const background = document.getElementById('#harrenhal');
const throne = document.getElementById('#throne');

document.addEventListener('scroll', function(){
  let value = window.scrollY;
  dragon1.style.marginTop = value * 2.1 + 'px';
  dragon2.style.marginLeft = value * 0.8 + 'px';
  text2.style.marginTop = value * 1.5 + 'px';
  text1.style.marginTop = value * 1.1 + 'px';
  throne.style.marginTop = value * 1.3 +'px';


})