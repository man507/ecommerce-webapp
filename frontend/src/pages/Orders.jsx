import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl mb-6">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div className="flex flex-col gap-6">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            {/* Left side: image + info */}
            <div className="flex items-start gap-6 md:flex-[1]">
              <img className="w-16 sm:w-20" src={item.image[0]} alt={item.name} />
              <div className="flex flex-col text-sm sm:text-base gap-1">
                <p className="font-medium">{item.name}</p>
                <div className="flex flex-wrap gap-3 mt-1 text-gray-700">
                  <p>{currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p>Date: <span className="text-gray-400">22 Jul, 2025</span></p>
              </div>
            </div>

            {/* Right side: status + button */}
            <div className="md:flex md:items-center md:gap-4 md:justify-end md:w-1/2">
              <div className="flex items-center gap-2 mb-2 md:mb-0">
                <div className="min-w-[8px] h-[8px] rounded-full bg-green-500"></div>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;