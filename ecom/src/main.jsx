import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home'; 
import CartPage from './pages/CartPage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import { CartProvider } from './components/CartContext'; 

// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", 
        element: <Home /> 
      },
      
      {
        path: "cart", 
        element: <CartPage /> 
      },
      {
        path: "about", 
        element: <About /> 
      },
      {
        path: "contact", 
        element: <Contact /> 
      },
    ]
  },
]);

// Create the root and render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider> {/* Wrap the router in CartProvider */}
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
