import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductManagement from "../pages/ProductManagement";
import ProductDetails from "../pages/ProductDetails";
import ProductUpdateForm from "../pages/ProductUpdateForm";
import ProductManagementForm from "../pages/ProductManagementForm";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import CheckoutSuccess from "../pages/CheckoutSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
    ],
  },

  {
    path: "/products",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <ProductPage></ProductPage>,
      },
      {
        path: "management",
        element: <ProductManagement></ProductManagement>,
      },
      {
        path: "details/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "update/:id",
        element: <ProductUpdateForm></ProductUpdateForm>,
      },
      {
        path: "create-product",
        element: <ProductManagementForm></ProductManagementForm>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "success",
        element: <CheckoutSuccess></CheckoutSuccess>,
      },
    ],
  },
]);

export default router;
