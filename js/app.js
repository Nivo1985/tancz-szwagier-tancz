/* Theme Name: Kucra - Responsive Landing page template
  File Description: Main JS file of the template
*/

//
/********************* Menu sticky js ************************/
//

function windowScroll() {
  const navbar = document.getElementById("navbar");
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
}
window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  windowScroll();
});

//
/********************* scroll top js ************************/
//

var mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//
/********************* Swicher js ************************/
//

function toggleSwitcher() {
  var i = document.getElementById("style-switcher");
  if (i.style.left === "-189px") {
    i.style.left = "-0px";
  } else {
    i.style.left = "-189px";
  }
}

function setColor(theme) {
  document.getElementById("color-opt").href = "./css/colors/" + theme + ".css";
  toggleSwitcher(false);
}

//
/********************* Page Load js ************************/
//

window.onload = function loader() {
  setTimeout(() => {
    document.getElementById("preloader").style.visibility = "hidden";
    document.getElementById("preloader").style.opacity = "0";
  }, 350);
};

function initMap() {
  const myLatLng = { lat: 53.117392, lng: 23.119887 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatLng,
    mapId: "DEMO_MAP_ID",
  });

   new google.maps.marker.AdvancedMarkerElement({
      map,
      position: myLatLng,
      title: "STRICTUS ul. Handlowa 7/20, 15-399 Białystok",
  });
}

window.addEventListener("DOMContentLoaded", function () {
  const cookieBar = document.getElementById("cookie-bar");
  const acceptBtn = document.getElementById("cookie-accept");

  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBar.style.display = "block";
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBar.style.display = "none";
  });
});