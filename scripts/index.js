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
