/* eslint-disable react/prop-types */
import addToLS from "./utilities/localStorage";
const Bottle = ({ bottle, handeAdToCart }) => {
  const { brand, color, image_url, material, price_bdt, price_usd, size_ml } =
    bottle;
  console.log(bottle);
  return (
    <div className="bg-blue-200 rounded-lg p-10">
      {/* image contianer */}
      <div>
        <img
          className="rounded-lg shadow-xl w-96 h-96"
          src={image_url}
          alt=""
        />
      </div>
      {/* card body */}
      <div className="p-4">
        <h2 className="text-gray-800 text-lg font-semibold">{brand}</h2>
        <p className="text-gray-600 text-sm">{color}</p>
        <p className="text-gray-600 text-sm">{material}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-800 font-bold">BDT {price_bdt}</p>
          <p className="text-gray-600">USD {price_usd}</p>
        </div>
        <p className="text-gray-600">Size: {size_ml}</p>
        <button
          onClick={() => handeAdToCart(bottle)}
          className="px-5 py-3 bg-blue-500 text-xl rounded text-white font-bold cursor-pointer block"
        >
          Purchase
        </button>

        <button
          onClick={() => addToLS(bottle)}
          className="py-3 px-5 bg-purple-700 rounded-lg my-3 text-white font-bold capitalize"
        >
          {" "}
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Bottle;
