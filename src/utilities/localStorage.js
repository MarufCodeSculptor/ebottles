const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  } else {
    return [];
  }
};
const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  //   save to local storage =>
 localStorage.setItem('cart',JSON.stringify(cart))
};

export {addToLS,getStoredCart};
