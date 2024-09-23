window.onscroll = function () {
    var header = document.getElementById("myHeader");
    let mybutton = document.getElementById("myBtn");
  
    // Sticky header logic
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  
    // Scroll-to-top button logic
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };
  
  // Scroll to top when button is clicked
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
