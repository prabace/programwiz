import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../Redux/Slices/filterSlice";
import Select from "react-select";


const Filter = (props) => {



  // const filter = useSelector(
  //   (state) => state.jobFilter.filter
  //   )

  //   const dispatch = useDispatch()

  const options = props.allKeywords.map((keyword) => ({
    value: keyword,
    label: keyword,
  }));


  return (
    <div>
      <div className="rounded-lg -mt-4 flex flex-row items-center justify-center">
        <Select
          closeMenuOnSelect={false}
          defaultValue={[options[0], options[1]]}
          isMulti
          options={options}
          onChange={props.handleSelect}
          value={props.selectedOptions}
          
        />

        {/* <input
            alt='search'
            class="bg-gray-200 rounded-lg px-40 py-6 absolute"
            onChange={(e) => dispatch(setFilter(e.target.value))}
            type="text"
            value={filter}
            placeholder="Job name or keyword..."
          />
         
          <div class="py-3 px-5 text-white font-semibold rounded-lg transition duration-3000 cursor-pointer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 opacity-30 relative left-56  text-dark hover:text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div> */}
      </div>
    </div>
  );
};

export default Filter;
