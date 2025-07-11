import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-black text-white max-w-screen h-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between pt-4">
            <h1>Learn RTK</h1>
            <div className="flex gap-5 cursor-pointer">
              <Link to="/">Home</Link>
              <Link to="/trad">Fetch Old</Link>
              <Link to="/rq">Fetch RQ</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
