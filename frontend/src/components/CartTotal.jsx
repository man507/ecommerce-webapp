import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  // 🧮 Calculate values with fallback
  const cartAmount = getCartAmount() || 0;
  const shippingFee = cartAmount > 0 ? delivery_fee : 0;
  const total = cartAmount + shippingFee;

  return (
    <div className="w-full">
      {/* 📦 Section Title */}
      <div className="text-2xl mb-4">
        <Title text1="CART" text2="TOTALS" />
      </div>

      {/* 💰 Subtotal */}
      <div className="flex justify-between text-sm mb-2">
        <span>Subtotal</span>
        <span>
          {currency} {cartAmount.toFixed(2)}
        </span>
      </div>
      <hr />

      {/* 🚚 Shipping Fee */}
      <div className="flex justify-between text-sm my-2">
        <span>Shipping Fee</span>
        <span>
          {currency} {shippingFee.toFixed(2)}
        </span>
      </div>
      <hr />

      {/* 🧾 Total */}
      <div className="flex justify-between font-medium mt-2">
        <span>Total</span>
        <span>
          {currency} {total.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartTotal;