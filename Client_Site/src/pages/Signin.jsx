import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);
      if (!res.ok) {
        toast.error(data.message);
        return;
      }
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-4xl font-semibold text-center my-6">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="p-3 rounded-lg bg-slate-300"
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          className="p-3 rounded-lg bg-slate-300"
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          value={formData.password}
        />
        <button
          className="p-3 bg-slate-700 text-white font-semibold uppercase rounded-lg hover:opacity-95"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5 font-medium">
        <p>Dont Have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
