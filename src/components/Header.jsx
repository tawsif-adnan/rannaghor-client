import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar max-w-7xl mx-auto rounded-b-lg py-5 bg-[#DAF7A6] text-primary-content flex justify-between">
      <Link to="/">
        <button className="btn btn-ghost normal-case text-3xl">
          RannaGhor
        </button>
      </Link>
      <div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="/blog" className="btn btn-ghost normal-case text-xl">
          Blog
        </Link>
        <button className="btn btn-outline btn-error">
          <Link to="/login" className="normal-case text-xl">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
