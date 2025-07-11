import React from "react";

const Checkbox = () => {
  return (
    <>
      <div className="mb-5">
        <label
          for="language"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Language
        </label>
        <input type="checkbox" name="language" value="Male" className="mr-2" />
        <span className="mr-5">Male</span>
        <input
          type="checkbox"
          name="language"
          value="Female"
          className="mr-2"
        />
        <span className="mr-5">Female</span>
        <input
          type="checkbox"
          name="language"
          value="Others"
          className="mr-2"
        />{" "}
        Others
      </div>
    </>
  );
};

export default Checkbox;
