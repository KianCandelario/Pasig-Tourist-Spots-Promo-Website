// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");

// Get the button that opens the modal
var boxes = document.querySelectorAll(".tourist-spot");

// When the user clicks on a box, open the modal
boxes.forEach(function(box) {
  box.addEventListener("click", (e) => {
    if (e.target.id === "spot1") {
      var span = document.getElementsByClassName("close")[0];
      modal1.style.display = "block";

      span.onclick = function() {
        modal1.style.display = "none";
      }
    }
    else if (e.target.id === "spot2") {
      var span = document.getElementsByClassName("close")[1];
      modal2.style.display = "block";

      span.onclick = function() {
        modal2.style.display = "none";
      }
    }
    else if (e.target.id === "spot3") {
      var span = document.getElementsByClassName("close")[2];
      modal3.style.display = "block";

      span.onclick = function() {
        modal3.style.display = "none";
      }
    }
    else if (e.target.id === "spot4") {
      var span = document.getElementsByClassName("close")[3];
      modal4.style.display = "block";

      span.onclick = function() {
        modal4.style.display = "none";
      }
    }
    else if (e.target.id === "spot5") {
      var span = document.getElementsByClassName("close")[4];
      modal5.style.display = "block";

      span.onclick = function() {
        modal5.style.display = "none";
      }
    }
    else if (e.target.id === "spot6") {
      var span = document.getElementsByClassName("close")[5];
      modal6.style.display = "block";

      span.onclick = function() {
        modal6.style.display = "none";
      }
    }
    else if (e.target.id === "spot7") {
      var span = document.getElementsByClassName("close")[6];
      modal7.style.display = "block";

      span.onclick = function() {
        modal7.style.display = "none";
      }
    }
    else if (e.target.id === "spot8") {
      var span = document.getElementsByClassName("close")[7];
      modal8.style.display = "block";

      span.onclick = function() {
        modal8.style.display = "none";
      }
    }
  });
});