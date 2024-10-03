function showModal(productName, productModel, price, event) {
  let modal = document.getElementById("modal-info");
  let modalContent = document.getElementById("modal-info-content");
  let productNameElement = modalContent.querySelector(".productName");
  let priceElement = modalContent.querySelector(".price");
  let productModels = modalContent.querySelector(".productModel");
  let targetElement = modalContent.querySelector(".target");
  productNameElement.textContent = productName;
  priceElement.textContent = "Цена: " + price;
  localStorage.setItem("productPrice", price);
  productModels.textContent = "Модел: " + productModel;
  targetElement.innerHTML =
    "<a href=" +
    productModel +
    ".html target='_blank'>За повече детайли кликнете тук</a>";
  let selectedImage = event.currentTarget;
  let currentSelectedImage = document.getElementById("selected-image");
  currentSelectedImage.src = selectedImage.src;

  var isSelected = selectedImage.classList.contains("selected-image");

  var images = document.querySelectorAll(".image");
  images.forEach(function (image) {
    image.classList.remove("selected-image");
  });

  if (!isSelected) {
    selectedImage.classList.add("selected-image");
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
    selectedImage.classList.add("image");
  }
  document.documentElement.style.overflow = "auto";
}
