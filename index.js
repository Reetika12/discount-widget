let discountPercentage = 0;

// Get all the price elements on the page
const priceElements = document.querySelectorAll(".price");

// Loop through all the price elements and add the discounted price label
priceElements.forEach((priceElement) => {
  // Removed the $ to read the value directly
  const originalPrice = parseFloat(priceElement.textContent.replace("$", ""));
  if (originalPrice > 20) {
    if (originalPrice > 20 && originalPrice < 100) {
      discountPercentage = 20;
    } else if (originalPrice > 100 && originalPrice < 500) {
      discountPercentage = 30;
    } else if (originalPrice > 500) {
      discountPercentage = 400;
    }
    // Showing the price is old by cutting it and display new price below

    priceElement.style.textDecoration = "line-through";
    const discountedPrice = (originalPrice * (100 - discountPercentage)) / 100;
    const discountedPriceLabel = document.createElement("span");
    discountedPriceLabel.textContent = `$${discountedPrice.toFixed(2)}`;
    priceElement.parentElement.appendChild(discountedPriceLabel);
  }
});
