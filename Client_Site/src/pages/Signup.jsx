import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-4xl font-semibold text-center my-6">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          className="p-3 rounded-lg bg-slate-300"
          type="text"
          placeholder="Username"
          id="usernsme"
        />
        <input
          className="p-3 rounded-lg bg-slate-300"
          type="email"
          placeholder="Email"
          id="email"
        />
        <input
          className="p-3 rounded-lg bg-slate-300"
          type="password"
          placeholder="Password"
          id="password"
        />
        <button className="p-3 bg-slate-700 text-white font-semibold uppercase rounded-lg hover:opacity-95">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5 font-medium">
        <p>Have an account ?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
