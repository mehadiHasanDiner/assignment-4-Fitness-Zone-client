import {
  removeCategory,
  setCategory,
} from "../../../redux/features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { categoriesData } from "../../../utils/categoriesData";

const Category = () => {
  const dispatch = useAppDispatch();
  //get local categories
  const { categories } = useAppSelector((state: RootState) => state.filters);


  //dispatch category
  const handleCategoryChange = (category: string) => {
    if (categories.includes(category)) {
      dispatch(removeCategory(category));
    } else {
      dispatch(setCategory(category));
    }
  };

  return (
    <>
      <div className="space-x-4 mt-4">
        <label className="text-md font-semibold">Filter product :</label>
        {categoriesData.map((category) => (
          <label key={category.name} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="checkbox"
              checked={categories.includes(category.name)}
              onChange={() => handleCategoryChange(category.name)}
            />
            <span>{category.name}</span>
          </label>
        ))}
      </div>
    </>
  );
};

export default Category;
