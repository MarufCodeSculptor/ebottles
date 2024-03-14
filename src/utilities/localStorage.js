const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  } else {
    return [];
  }
};
const addToLS = (cd) => {
  const cart = getStoredCart();
  cart.push(cd);
  //   save to local storage =>
 localStorage.setItem('cart',JSON.stringify(cart))
};

export default addToLS;
