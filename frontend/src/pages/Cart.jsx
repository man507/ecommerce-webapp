import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];
        if (quantity > 0) {
          tempData.push({
            _id: itemId,
            size,
            quantity,
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      {/* Title */}
      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
      </div>

      {/* Cart Items */}
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(product => product._id === item._id);
          if (!productData) return null;

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_1fr] items-center gap-4"
            >
              {/* Product Info */}
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData.image[0]} alt={productData.name} />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <p className="text-xs text-gray-500">Size: {item.size}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => {
                    const newQty = Number(e.target.value);
                    if (newQty >= 1) {
                      updateQuantity(item._id, item.size, newQty);
                    }
                  }}
                  className="border w-12 sm:w-16 px-2 py-1 text-center"
                />
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-5 cursor-pointer"
                  src={assets.bin_icon}
                  alt="Remove item"
                />
              </div>

              {/* Item Price */}
              <div className="text-sm font-medium text-center">
                {currency} {(productData.price * item.quantity).toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Summary */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate('/place-order')}
              className="bg-black text-white text-sm my-8 px-8 py-3 hover:bg-gray-700 transition-colors"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;