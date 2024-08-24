import SearchField from "../components/ui/productPage/SearchField";
import Category from "../components/ui/productPage/Category";
import SortingField from "../components/ui/productPage/SortingField";
import ClearFilterBtn from "../components/ui/productPage/ClearFilterBtn";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import productApi from "../redux/features/product/productApi";
import { useAppSelector } from "../redux/hooks";
import LoadingBar from "../global/LoadingBar/ProgressBar";
import ErrorPage from "../global/ErrorPage/ErrorPage";
import { TProduct } from "../types";

const ProductPage = () => {
  const navigate = useNavigate();

  //view details  button functionality
  const handleViewDetails = (id: string) => {
    navigate(`/products/details/${id}`);
  };

  // grab filtering value from local state
  const { searchTerm, sort, categories } = useAppSelector(
    (state: RootState) => state.filters
  );
  //fetching data
  const {
    data: products,
    error,
    isLoading,
  } = productApi.useGetProductsQuery({
    searchTerm,
    sort,
    categories,
  });
  //if state is loading return loading page
  if (isLoading) {
    return (
      <div className="h-full flex justify-center items-center">
        <LoadingBar></LoadingBar>
      </div>
    );
  }
  //if state is error return error page
  if (error) {
    return (
      <div className="h-full flex justify-center items-center">
        <ErrorPage></ErrorPage>
      </div>
    );
  }

  return (
    <>
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <SearchField></SearchField>
          {/* category */}
          <Category></Category>

          {/* sorting */}
          <SortingField></SortingField>
          {/* clear button */}
          <ClearFilterBtn></ClearFilterBtn>
        </div>

        <h1 className="text-2xl font-bold mb-4">Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.data?.map((product: TProduct) => (
            <div key={product._id} className="border p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl">{product.name}</h2>
              <p>Price: ${product.price}</p>
              <button
                onClick={() => handleViewDetails(product._id!)}
                className="btn btn-primary mt-2"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
