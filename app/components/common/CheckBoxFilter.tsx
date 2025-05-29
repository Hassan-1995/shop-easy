"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

type CheckBoxFilterProps = {
  filter: string;
};

const CheckBoxFilter = ({ filter }: CheckBoxFilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const isChecked = searchParams.get("type") === filter;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (checked) {
      current.set("type", filter);
    } else {
      current.delete("type");
    }
    router.push(`?${current.toString()}`);
  };

  return (
    <div className="flex h-15">
      <div className="flex items-center space-x-2">
        <div>
          <input
            type="checkbox"
            id={filter}
            checked={isChecked}
            onChange={handleChange}
            className="accent-green-600 h-5 w-5"
          />
        </div>
        <div>
          <label
            htmlFor={filter}
            className="md:text-xs lg:text-base font-semibold"
          >
            {filter}
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckBoxFilter;
