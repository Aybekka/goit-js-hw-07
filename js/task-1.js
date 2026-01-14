// 1. Tüm kategorileri (li.item) seç
const categories = document.querySelectorAll("#categories .item");

// 2. Kategori sayısını konsola yazdır
console.log(`Number of categories: ${categories.length}`);

// 3. Her kategori için başlık ve içindeki eleman sayısını yazdır
categories.forEach(category => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});
