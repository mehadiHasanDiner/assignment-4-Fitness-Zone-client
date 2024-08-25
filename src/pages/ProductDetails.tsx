import { toast } from "sonner";
import { setToCart } from "../redux/features/cart/cartSlice";
import ErrorPage from "../global/ErrorPage/ErrorPage";
import LoadingBar from "../global/LoadingBar/ProgressBar";
import { RootState } from "../redux/store";
import productApi from "../redux/features/product/productApi";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import ProductDetailsCard from "../components/ui/productDetailsCard/ProductDetailsCard";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = productApi.useGetSpecificProductQuery(id);
  // destructure single product
  const product = data?.data;
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart);

  if (isLoading) {
    return <LoadingBar></LoadingBar>;
  }

  if (error) {
    return <ErrorPage></ErrorPage>;
  }

  // find matching cart item
  const cartItem = cart.items.find((item) => item._id === product._id);
  //check is the product out of stock or not
  const isProductOutOfStock = cartItem
    ? cartItem.quantity >= product.stock
    : false;

  const handleAddToCart = async () => {
    if (!isProductOutOfStock) {
      dispatch(setToCart(product));
      toast.success("Successfully added cart!");
    }
  };
  return (
    <div>
      <ProductDetailsCard
        product={product}
        handleAddToCart={handleAddToCart}
        isProductOutOfStock={isProductOutOfStock}
      ></ProductDetailsCard>
    </div>
  );
};

export default ProductDetails;
