

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

var btnLoading = document.getElementById("btn-loading");

btnLoading.style.display = "none";

var notification = document.getElementById("note-div");

notification.style.display = "none";

function loading() {
  btnLoading.style.display = "block";
  setTimeout(message, 1000);
}

function message(){
  btnLoading.style.display = "none";
  notification.style.display = "block";
}