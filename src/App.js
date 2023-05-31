import React from 'react'
import Products from './components/products'
import Home from './components/Home'
import Header from './components/header'
import Checkout from './components/checkout'
import {CardProvider} from './CardContext'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <CardProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path='/products' element={<Products />} />

          </Routes>

        </BrowserRouter>
      </CardProvider>
    </div>
  )
}

export default App
