import { clearFilters } from "../../../redux/features/filter/filterSlice";
import { useAppDispatch } from "../../../redux/hooks";

const ClearFilterBtn = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        className="main-button mt-4"
        onClick={() => dispatch(clearFilters())}
      >
        Clear Filters
      </button>
    </>
  );
};

export default ClearFilterBtn;
