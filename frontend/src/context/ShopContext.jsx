import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Create context
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate(); // ✅ Correct usage of useNavigate hook

  // 🛒 Add to cart
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    const cartData = structuredClone(cartItems);

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    if (!cartData[itemId][size]) {
      cartData[itemId][size] = 1;
    } else {
      cartData[itemId][size] += 1;
    }

    setCartItems({ ...cartData });
    toast.success("Item added to cart!");
  };

  // 🔢 Get total cart count
  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];
        if (quantity > 0) {
          totalCount += quantity;
        }
      }
    }

    return totalCount;
  };

  // 🔧 Update quantity or remove item
  const updateQuantity = async (itemId, size, quantity) => {
    const cartData = structuredClone(cartItems);

    if (!cartData[itemId]) return;

    if (quantity <= 0) {
      delete cartData[itemId][size];

      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }

      toast.info("Item removed from cart");
    } else {
      cartData[itemId][size] = quantity;
      toast.success("Cart updated");
    }

    setCartItems({ ...cartData });
  };

  // 💰 Get total cart value
  const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      const productInfo = products.find(product => product._id === itemId);
      if (!productInfo) continue;

      for (const size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];
        if (quantity > 0) {
          totalAmount += productInfo.price * quantity;
        }
      }
    }

    return totalAmount;
  };

  // ❗ Don't export useNavigate — it's a hook, not a value
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate // ✅ this is correct
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;