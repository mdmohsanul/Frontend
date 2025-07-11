import React, { useState } from "react";
import Checkbox from "./Checkbox";

const BasicInput = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState([]);

  const [display, setDisplay] = useState(false);
  const submitHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setDisplay(true);
  };
  return (
    <>
      <form class="max-w-sm mx-auto pt-11" onSubmit={submitHandler}>
        <div class="mb-5">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Full Name
          </label>
          <div className="flex items-center justify-center ">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 border-r-0 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe"
            />
            <button
              className="bg-gray-50 border border-gray-300 rounded-r-lg p-2"
              onClick={() => setName("")}
            >
              ❌
            </button>
          </div>
        </div>
        <div class="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
          />
        </div>
        <div class="mb-5">
          <label
            for="feedback"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your feedback
          </label>
          <textarea
            id="feedback"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write something...."
          />
        </div>
        <Checkbox />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      {display && (
        <div>
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
      )}
    </>
  );
};

export default BasicInput;
