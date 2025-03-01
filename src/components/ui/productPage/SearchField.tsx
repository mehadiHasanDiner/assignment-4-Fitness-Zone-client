import { setSearchTerm } from "../../../redux/features/filter/filterSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { useCallback } from "react";
import _ from "lodash";

const SearchField = () => {
  const dispatch = useAppDispatch();
  // implementing debounce using lodash
  const debouncedSetSearchTerm = useCallback(
    _.debounce((term) => {
      dispatch(setSearchTerm(term));
    }, 500),
    []
  );
  return (
    <>
      <div className="border-2 border-gray-500 p-1 rounded-lg flex items-center mt-3  sm:flex-wrap justify-end">
        <input
          // onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          onChange={(e) => debouncedSetSearchTerm(e.target.value)}
          type="text"
          className="grow max-w-full"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-5 w-5 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </>
  );
};

export default SearchField;
