import { useState, useRef } from "react";

// Custom Hook: useDebounce
export const useDebounce = () => {
  const [change, setChange] = useState("");
  const currentVal = useRef(null);

  const handleChange = (value) => {
    setChange(value);
    console.log(value, "Searching...");
  };

  const debounce = (e) => {
    if (currentVal.current) {
      clearTimeout(currentVal.current);
    }

    const inputValue = e.target.value;
    currentVal.current = setTimeout(() => {
      handleChange(inputValue);
    }, 2000);
  };

  return { change, debounce };
};

// Component: Search
function Search() {
  const { change, debounce } = useDebounce();

  return (
    <div>
      <input value={change} onChange={debounce} type="text" />
    </div>
  );
}

export default Search;
