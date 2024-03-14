import PropTypes from "prop-types";
const Cart = ({ cart }) => {
  return (
    <div className="w-full min-h-96  rounded-lg shadow-lg">
      <h1 className="text-3xl text-center text-white font-bold bg-blue-500">
        Cart
      </h1>
      <h2 className="text-xl capitalize p-5 rounded-lg ">
        Total items:{" "}
        <span className="font-extrabold text-2xl">{cart.length}</span>
      </h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {cart.map((singleCart) => (
          <img
            key={singleCart.id}
            className="w-14 h-14 rounded shadow-lg"
            src={singleCart.image_url}
          ></img>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Cart;
