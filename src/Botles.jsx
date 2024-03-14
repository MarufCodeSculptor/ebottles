/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Bottle from "./Bottle";

const Botles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("./fakebottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  const [cart, setCart] = useState([]);
  const handeAdToCart = (btlInfo) => {
    const updateInfo = [...cart, btlInfo];
    setCart(updateInfo);
  };
  

  return (
    <>
      {/* heading */}
      <div>
        <h2 className="text-2xl font-bold border-2 p-5">
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
      <div className="container bg-purple-200 mx-auto">
        <h2 className="text-xl capitalize font-bold text-center px-10 py-5">
          {" "}
          Total Product:{" "}
          <span className="font-extrabold text-2xl"> {cart.length} </span>{" "}
        </h2>
        <h3 className="text-2xl text-center">
          Total price: <span className="font-bold">123456</span>
        </h3>
        {/* cart details -------------- */}
        <div className="flex items-center justify-center">
          <div className="border  bg-blue-100 p-10 rounded">
            {" "}
            <h4 className="text-lg font-bold">Product list:</h4>
            <ol>
             {cart.map(cd=>    <li> {cd.brand}  </li> )}
            </ol>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center container mx-auto">
        {bottles.map((btl) => (
          <Bottle  handeAdToCart={handeAdToCart}  key={btl.id} bottle={btl}></Bottle>
        ))}
      </div>
    </>
  );
};

export default Botles;
