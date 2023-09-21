// Get the main image container
var mainImageContainer = document.querySelector(".image-container");

// Get the thumbnail images
var thumbnails = document.querySelectorAll(".thumbnail-container img");

// Add click event listeners to the thumbnails
thumbnails.forEach(function (thumbnail) {
  thumbnail.addEventListener("click", function () {
    // Get the clicked thumbnail's source
    var newImageSource = thumbnail.getAttribute("src");

    // Update the main image source
    mainImageContainer.querySelector("img").setAttribute("src", newImageSource);
  });
});

let models = document.querySelector(".details>  p").textContent;

let productModel = models.split(": ")[1];

let inputModelField = document.getElementById("model");
inputModelField.value = productModel;

function addCanonicalLink() {
  var canonicalLink = document.createElement("link");
  canonicalLink.rel = "canonical";
  var currentPagePath = window.location.pathname.replace(/\.html$/, "");
  canonicalLink.href = window.location.origin + currentPagePath;
  document.head.appendChild(canonicalLink);
}

window.onload = function () {
  addCanonicalLink();
};
