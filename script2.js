

var price2999 = document.getElementById("price2999");

function subsImg(imgs) {
  var expandImg = document.getElementById("imgmain");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}


var price950 = document.getElementById("price950");

function subsImg(imgs) {
  var expandImg = document.getElementById("imgmain");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

var qt = 1;
var nItems = document.getElementById("qt-itens");


function addFunction() {
  qt = qt + 1;
  sqt = qt.toString();
  nItems.innerHTML = sqt;
}

function minusFunction() {
  if (qt == 0){
    document.getElementById('qt-itens').innerHTML = '0';
  }
  else {
    qt = qt - 1;
  }
  var mqt = qt.toString();
  document.getElementById('qt-itens').innerHTML = mqt;
}
