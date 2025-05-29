"use client";
import { useState } from "react";
import CheckBoxFilter from "./common/CheckBoxFilter";

type Props = {
  filterValues: string[];
};

const FilterToggleClientMobile = ({ filterValues }: Props) => {
  const [options, setOptions] = useState(false);

  return (
    <div className="md:hidden w-full">
      <button
        className="md:hidden font-bold p-2 w-full"
        onClick={() => setOptions((prev) => !prev)}
      >
        Filters
      </button>

      {options && (
        <div className="md:hidden w-screen h-auto pt-3 bg-white transform transition-all">
          {filterValues.map((filterValue) => (
            <CheckBoxFilter key={filterValue} filter={filterValue} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterToggleClientMobile;
