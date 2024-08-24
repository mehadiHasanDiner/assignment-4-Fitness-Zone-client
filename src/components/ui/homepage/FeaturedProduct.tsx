import { useNavigate } from "react-router-dom";
import productApi from "../../../redux/features/product/productApi";
import LoadingBar from "../../../global/LoadingBar/ProgressBar";
import ErrorPage from "../../../global/ErrorPage/ErrorPage";
import FeaturedProductCard from "./card/FeaturedProduct";

const FeaturedProduct = () => {
  const {
    data: products,
    isLoading,
    error,
  } = productApi.useGetProductsQuery({ undefined });

  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate("/products");
  };

  const handleViewDetails = (id: string) => {
    navigate(`/products/details/${id}`);
  };

  //  loading progress
  if (isLoading) {
    return (
      <div>
        <LoadingBar></LoadingBar>
      </div>
    );
  }
  // showing error
  if (error) {
    return (
      <div className="w-1/2 mx-auto">
        <ErrorPage></ErrorPage>
      </div>
    );
  }
  return (
    <>
      <FeaturedProductCard
        products={products.data}
        handleExploreMore={handleExploreMore}
        handleViewDetails={handleViewDetails}
      ></FeaturedProductCard>
    </>
  );
};

export default FeaturedProduct;
