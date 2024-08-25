import { clearFilters } from "../../../redux/features/filter/filterSlice";
import { useAppDispatch } from "../../../redux/hooks";

const ClearFilterBtn = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-end ">
      <button
        className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-700 mt-4"
        onClick={() => dispatch(clearFilters())}
      >
        Clear Filter
      </button>
    </div>
  );
};

export default ClearFilterBtn;
