export const addProducts = products => {
  const productsIndex = document.querySelector('.products__index');
  const productCard = document.querySelector('.product__card');
  productsIndex.innerHTML = '';

  products.forEach(product => {
    let newCard = productCard.cloneNode(true);
    const productPhoto = newCard.querySelector('.product__card-photo');
    const productDescription = newCard.querySelector(
      '.product__card-description',
    );
    const productPrice = newCard.querySelector('.product__card-price');

    productPhoto.src = product.image;
    productDescription.innerHTML = product.description;
    productPrice.innerHTML = product.price;

    productsIndex.appendChild(newCard);
  });
};