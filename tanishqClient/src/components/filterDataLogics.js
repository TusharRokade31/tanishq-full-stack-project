export const filterProductsByCategory = (
  products,
  categoryName,
  selectedValue
) => {
  let filterData;

  if (categoryName === "Gold") {
    if (selectedValue == "Price: Low To High") {
      filterData = products.filter(
        (product) => product.jewellery_type === `${categoryName} Jewellery`
      );
      filterData.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (selectedValue == "Price: High To Low") {
      filterData = products.filter(
        (product) => product.jewellery_type === `${categoryName} Jewellery`
      );
      filterData.sort(function (a, b) {
        return b.price - a.price;
      });
    } else {
      filterData = products.filter(
        (product) => product.jewellery_type === `${categoryName} Jewellery`
      );
    }
  } else if (categoryName === "Diamond") {
    if (selectedValue == "Price: Low To High") {
      filterData = products.filter(
        (product) => product.jewellery_type === `${categoryName} Jewellery`
      );
      filterData.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (selectedValue == "Price: High To Low") {
      filterData = products.filter(
        (product) => product.jewellery_type === `${categoryName} Jewellery`
      );
      filterData.sort(function (a, b) {
        return b.price - a.price;
      });
    } else {
      filterData = products.filter(
        (product) => product.jewellery_type === `${categoryName} Jewellery`
      );
    }
  } else if (categoryName === "Earrings") {
    if (selectedValue == "Price: Low To High") {
      filterData = products.filter(
        (product) => product.category.name === "Earrings"
      );
      filterData.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (selectedValue == "Price: High To Low") {
      filterData = products.filter(
        (product) => product.category.name === "Earrings"
      );
      filterData.sort(function (a, b) {
        return b.price - a.price;
      });
    } else {
      filterData = products.filter(
        (product) => product.category.name === "Earrings"
      );
    }
    
  } else if (categoryName === "Pendants") {
    if (selectedValue == "Price: Low To High") {
      filterData = products.filter(
        (product) => product.category.name === "Pendants"
      );
      filterData.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (selectedValue == "Price: High To Low") {
      filterData = products.filter(
        (product) => product.category.name === "Pendants"
      );
      filterData.sort(function (a, b) {
        return b.price - a.price;
      });
    } else {
      filterData = products.filter(
        (product) => product.category.name === "Pendants"
      );
    }
    
  } else if (categoryName === "Bestsellers") {
    filterData = products.filter(
      (product) => product.collections === "Bestsellers"
    );
  } else if (categoryName === "Rings" || categoryName === "Finger Rings") {
    if (selectedValue == "Price: Low To High") {
      filterData = products.filter(
        (product) => product.category.name === "Finger Rings"
      );
      filterData.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (selectedValue == "Price: High To Low") {
      filterData = products.filter(
        (product) => product.category.name === "Finger Rings"
      );
      filterData.sort(function (a, b) {
        return b.price - a.price;
      });
    } else {
      filterData = products.filter(
        (product) => product.category.name === "Finger Rings"
      );
    }
   
  } else if (categoryName === "Mangalsutra" || categoryName === "Mangalsutra") {
    if (selectedValue == "Price: Low To High") {
      filterData = products.filter(
        (product) => product.category.name === "Mangalsutra"
      );
      filterData.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (selectedValue == "Price: High To Low") {
      filterData = products.filter(
        (product) => product.category.name === "Mangalsutra"
      );
      filterData.sort(function (a, b) {
        return b.price - a.price;
      });
    } else {
      filterData = products.filter(
        (product) => product.category.name === "Mangalsutra"
      );
    }
    
  } else if (categoryName === "Chains") {
    filterData = products.filter(
      (product) => product.category.name === "Chains"
    );
  } else if (categoryName === "Nose Pin" || categoryName === "Nosepins") {
    filterData = products.filter(
      (product) => product.category.name === "Nose pin"
    );
  } else if (categoryName === "Gold Coins") {
    filterData = products.filter(
      (product) => product.category.name === "Gold Coins"
    );
  } else if (categoryName === "Bracelets") {
    filterData = products.filter(
      (product) => product.category.name === "Bracelets"
    );
  } else if (categoryName === "Bangles") {
    filterData = products.filter(
      (product) => product.category.name === "Bangles"
    );
  } else if (
    categoryName === "Necklace Set"
  ) {
    filterData = products.filter(
      (product) => product.category.name === "Necklace Set"
    );
  } else if (categoryName === "Necklaces") {
    filterData = products.filter(
      (product) => product.category.name === "Neckware"
    );
  } else if (
    categoryName === "Pendents Set"
  ) {
    filterData = products.filter(
      (product) => product.category.name === "Pendents Set"
    );
  } else if (categoryName === "String it") {
    filterData = products.filter(
      (product) => product.category.name === "String it"
    );
  } else if (
    categoryName === "The Italian Connection"
  ) {
    filterData = products.filter(
      (product) => product.category.name === "The Italian Connection"
    );
  } else if (
    categoryName === "Engagement Rings"
  ) {
    filterData = products.filter(
      (product) => product.category.name === "Enagagement Rings"
    );
  } else if (
    categoryName === "Pretty In Pink"
  ) {
    filterData = products.filter(
      (product) => product.category.name === "Pretty In Pink"
    );
  } else if (
    categoryName === "Trending Earrings"
  ) {
    filterData = products.filter(
      (product) => product.category.name === "Trending Earrings"
    );
  } else if (
    categoryName === "Modern Designs"
  ) {
    filterData = products.filter(
      (product) => product.category.name === "Modern Designs"
    );
  } else {
    filterData = products;
  }

  return filterData;
};
