

var price2999 = document.getElementById("price2999");

price2999.style.display = 'none';

var price950 = document.getElementById("price950");

var price450 = document.getElementById("price450");

price450.style.display = 'none';

function subsImg(imgs) {
  var expandImg = document.getElementById("imgmain");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

