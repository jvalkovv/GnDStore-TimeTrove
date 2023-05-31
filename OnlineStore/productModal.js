function showModal(productName, productModel, price, event) {
  var modal = document.getElementById("modal-info");
  var modalContent = document.getElementById("modal-info-content");
  var productNameElement = modalContent.querySelector(".productName");
  var priceElement = modalContent.querySelector(".price");
  var productModels = modalContent.querySelector(".productModel");
  productNameElement.textContent = productName;
  priceElement.textContent = "Price: " + price;
  productModels.textContent = "Model: " + productModel;

  var selectedImage = event.currentTarget;
  var isSelected = selectedImage.classList.contains("selected-image");

  // Премахваме класа "selected-image" от всички снимки
  var images = document.querySelectorAll(".image");
  images.forEach(function (image) {
    image.classList.remove("selected-image");
  });

  // Добавяме класа "selected-image" на избраната снимка
  if (!isSelected) {
    selectedImage.classList.add("selected-image");
    // Добавяме класа "no-scroll" на страницата
  }
  modal.style.display = "block";
  document.documentElement.style.overflow = "hidden";
  modal.addEventListener("click", function (event) {
    if (event.target == modal) {
      closeModal();
    }
  });
}

function closeModal() {
  var modal = document.getElementById("modal-info");
  modal.style.display = "none";
  var selectedImage = document.querySelector(".image.selected-image");

  if (selectedImage) {
    selectedImage.classList.remove("selected-image");
    selectedImage.style.border = "none";
  }
  document.documentElement.style.overflow = "auto";
}
