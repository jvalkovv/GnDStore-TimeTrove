window.addEventListener("DOMContentLoaded", function () {
  var productPriceElement = document.getElementById("productPrice");
  if (productPriceElement) {
    var productPrice = localStorage.getItem("productPrice");
    if (productPrice) {
      productPriceElement.textContent = "Цена: " + productPrice;
    } else {
      productPriceElement.textContent = "Цена: Не е налична";
    }
  }
});
