import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    if (!name) {
      setError("You must need to add your name");
      return;
    }
    if (password.length <= 0 || email.length <= 0) {
      setError("You must need to provide a valid email and password");
      return;
    }
    if (password.length < 6) {
      setError("password must be at least 6 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const currentUser = result.user;
        console.log(currentUser);
        form.reset();
        setSuccess("Registration successful, Welcome to RannaGhor");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Here!!!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                />
                <label className={`label ${error && "mb-5"}`}>
                  <button className="label-text-alt text-sm">
                    Already have an account?{" "}
                    <Link to="/login">
                      <span className="link">Login</span>
                    </Link>
                  </button>
                </label>
                {error && (
                  <div>
                    <p className="text-error">{error}</p>
                  </div>
                )}
                {success && (
                  <div>
                    <p className="text-success">{success}</p>
                  </div>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
