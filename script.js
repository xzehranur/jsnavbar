function myFunction() {
    var x = document.getElementById("topNavbar");
    if (x.className === "topnav") {
      x.classList.add("responsive")
    } else {
      x.className = "topnav";
    }
  }