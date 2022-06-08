import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import Routers from './Routers';
import { BrowserRouter } from 'react-router-dom';
import AllProductsProvider from './contexts/AllProducts';
import CategoriesProvider from './contexts/Categories';
import ProductsByCategoryProvider from './contexts/ProductsByCategory';
import ProductProvider from './contexts/Product';
import CartProvider from './contexts/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <AllProductsProvider>
        <CategoriesProvider>
          <ProductsByCategoryProvider>
            <ProductProvider>
              <CartProvider>
                <Routers />
              </CartProvider>
            </ProductProvider>
          </ProductsByCategoryProvider>
        </CategoriesProvider>
      </AllProductsProvider>
      <CssBaseline />
    </BrowserRouter>
  </>
);

