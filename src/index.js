import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageNotFound from './utils/PageNotFound';
// import About from './components/AboutUs/About';
import CafeBody from './components/RestaurentBody/CafeBody';
import Contact from './components/ContactUs/Contact';
import RestaurantMenu from './components/RestaurantMenu/RestaurantMeu';
import ShimmerUI from './utils/shimmerUI';
// import CartPage from './components/Cart/CartPage';
// import Grocery from './components/Grocery/Grocery';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Grocery = lazy(()=>import('./components/Grocery/Grocery'))

const About = lazy(()=>import('./components/AboutUs/About'));

const CartPage = lazy(()=>import('./components/Cart/CartPage'));



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <CafeBody />
      },
      {
        path: '/about',
        element: <Suspense fallback={<ShimmerUI />}> <About /> </Suspense>
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<ShimmerUI />}> <Grocery /> </Suspense>
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />
      },
      {
        path: '/cart',
        element: <Suspense fallback={<ShimmerUI />}> <CartPage /> </Suspense>
      },
    ],
    errorElement: <PageNotFound />
  },

])

root.render(
  <React.StrictMode>
      <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
