function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  
  //contact form
  
  function validateForm() {
    const regex = /\d/;
    let x = document.forms["myForm"]["fname"].value;
    const doesFirstNameHaveNumber = regex.test(x);
  
    if (doesFirstNameHaveNumber == true) {
      alert("Not a valid name")
      return false;
    }
  
    let y = document.forms["myForm"]["lname"].value;
    const doesLastNameHaveNumber = regex.test(y);
  
    if (doesLastNameHaveNumber == true) {
      alert("Not a valid name")
      return false;
    }
  
    let z = document.forms["myForm"]["email"].value;
    const format = /@/;
    const doesEmailContainChara = format.test(z);
  
    if(doesEmailContainChara == false){
      alert("Not a valid email.")
      return false;
    }
    if(doesFirstNameHaveNumber == false && doesLastNameHaveNumber == false && doesEmailContainChara == true){
        return true;
    }
    if(validateForm()){
        window.location.replace('thankyou.html');
    }
  }