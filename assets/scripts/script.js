//    -----------------------------------
// Increase Button
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }

 //    -----------------------------------
// navMenu
function openMenu() {
  document.getElementById("mainNav").style.display = "none";
  document.getElementById("sideNav").style.display = "block";
}

function closeMenu() {
  document.getElementById("mainNav").style.display = "unset";
  document.getElementById("sideNav").style.display = "none";
}

