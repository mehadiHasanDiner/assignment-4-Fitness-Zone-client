import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

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
    ],
  },

]);

export default router;
