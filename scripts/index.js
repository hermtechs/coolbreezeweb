const categoryLinks = document.querySelectorAll(".category-link");
const menuItemsContainer = document.querySelector(".menu-container-parent");
const currentProduct = document.querySelector("#current-item");
const allProductsCategoryLink = document.querySelector(
  ".all-products-category-link"
);
const allCategories = document.querySelectorAll(".container-1");
const categoryTitles = document.querySelectorAll(".category-title");

categoryLinks.forEach((link) =>
  link.addEventListener("click", showCategoryItems)
);

function showCategoryItems(event) {
  const itemsCategoryId = event.currentTarget.id;
  allCategories.forEach((category) => {
    category.classList.add("hide-category");
    const selectedCategory = menuItemsContainer.querySelector(
      `#${itemsCategoryId}`
    );
    currentProduct.innerText = itemsCategoryId;

    selectedCategory.classList.remove("hide-category");
    categoryTitles.forEach((title) => {
      title.classList.add("hide-category");
    });
  });
}

allProductsCategoryLink.addEventListener("click", showAllProducts);
function showAllProducts() {
  allCategories.forEach((cat) => {
    cat.classList.remove("hide-category");
    currentProduct.innerText = "All Products";
    categoryTitles.forEach((title) => {
      title.classList.remove("hide-category");
    });
  });
}

//image viewer/modal
// Get the modal
var modal = document.getElementById("myModal");
const modalOverlay = document.querySelector(".modal-container-overlay");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var productImg = document.querySelectorAll(".product-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
productImg.forEach((img) =>
  img.addEventListener("click", (e) => {
    modal.style.display = "block";
    // modalImg.src = this.src;
    modalImg.src = e.currentTarget.src;
    const parentElement = e.target.parentElement;
    const productName = parentElement.querySelector("#product-title").innerText;
    // console.log(productName);
    captionText.innerText = productName;
  })
);

// Get the <closeModalButton> element that closes the modal
var closeModalButton = document.querySelector(".close-photo-viewer");

// When the user clicks on <closeModalButton> (x), close the modal
const closeModal = () => {
  modal.style.display = "none";
};
closeModalButton.onclick = closeModal;

modal.onclick = closeModal;
