import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isCollectionPage = location.pathname.includes('collection');
    setVisible(isCollectionPage && showSearch);
  }, [location, showSearch]);

  if (!visible) return null;

  return (
    <div className="border-t border-b bg-gray-50 text-center py-4">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-transparent text-sm"
          type="text"
          placeholder="Search"
          aria-label="Search input"
        />
        <img
          className="w-4 ml-2"
          src={assets.search_icon}
          alt="Search icon"
        />
      </div>
      <button
        onClick={() => setShowSearch(false)}
        className="mt-3 inline-block"
        aria-label="Close search"
      >
        <img
          className="w-3 cursor-pointer"
          src={assets.cross_icon}
          alt="Close icon"
        />
      </button>
    </div>
  );
};

export default SearchBar;