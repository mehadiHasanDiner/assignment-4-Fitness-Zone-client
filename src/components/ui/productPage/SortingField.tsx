import { setSort } from "../../../redux/features/filter/filterSlice";
import { useAppDispatch } from "../../../redux/hooks";

const SortingField = () => {
  const dispatch = useAppDispatch();
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "asc") {
      dispatch(setSort({ sort: "-price" }));
    }
    if (event.target.value === "desc") {
      dispatch(setSort({ sort: "price" }));
    }
  };

  return (
    <>
      <div className="mt-4">
        <label className="mr-2 text-md font-semibold">Sort By Price</label>
        <select
          className="border-2 p-1 rounded-md border-gray-500"
          onChange={handleSortChange}
        >
          <option value="">Price</option>
          <option value="asc">High to Low</option>
          <option value="desc">Low to High</option>
        </select>
      </div>
    </>
  );
};

export default SortingField;
