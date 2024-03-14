/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import { addToLS, getStoredCart } from "./utilities/localStorage.js";
import Cart from "./Cart.jsx";

const Botles = () => {
  // cart and bottle state start here ----
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  // cart and bolte state end here ---------
  // fetching  all bottles data  ------------
  useEffect(() => {
    fetch("./fakebottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  // load cart from local storage =>
  useEffect(() => {
    if (bottles.length > 0) {
      const storedCartids = getStoredCart();
      const cartItems = [];
      for (const id of storedCartids) {
        const botle = bottles.find((btl) => btl.id === id);
        if (botle) {
          cartItems.push(botle);
        }
      }
      setCart(cartItems);
    }
  }, [bottles]);

  const handeAdToCart = (btlInfo) => {
    const updateInfo = [...cart, btlInfo];
    setCart(updateInfo);
    addToLS(btlInfo.id);
  };

  return (
    <>
      {/* total bottles --------- */}
      <div className="">
        <h2 className="text-2xl text-center bg-purple-600 text-white font-bold  p-5">
          {" "}
          Total Bottles:{" "}
          <span className="text-2xl font-extrabold">
            {" "}
            {bottles.length}
          </span>{" "}
        </h2>
      </div>
      <hr />

      {/* cart === */}

      {/*  -------------------------all bottles container start here ----------------------- */}
      <div className="flex items-start gap-5 justify-center">
        <div className="lg:w-7/12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 items-center justify-center">
            {bottles.map((btl) => (
              <Bottle
                handeAdToCart={handeAdToCart}
                key={btl.id}
                bottle={btl}
              ></Bottle>
            ))}
          </div>
        </div>
        <div className="w-3/12">
          {/* cart sit here   */}
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Botles;
