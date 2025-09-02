import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // ⬅️ Make sure this matches the actual path
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import  ShopContextProvider from './context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <ShopContextProvider>
      <App />
   </ShopContextProvider>
  </BrowserRouter>,
)