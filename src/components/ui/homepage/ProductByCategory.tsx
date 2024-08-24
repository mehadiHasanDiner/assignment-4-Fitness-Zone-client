import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import ProductByCategoryCard from "./card/ProductByCategoryCard";
import { setCategory } from "../../../redux/features/filter/filterSlice";

const ProductByCategory = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // grab category name: navigate and dispatch categoryName basis on category name
  const handleCategory = (category: string) => {
    navigate("/products"), dispatch(setCategory(category));
  };

  return <ProductByCategoryCard handleCategory={handleCategory}></ProductByCategoryCard>;
};

export default ProductByCategory;