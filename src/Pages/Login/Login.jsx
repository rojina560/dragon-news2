import React, { useContext } from 'react';

import Navbar from "../../Shared/Header/Navbar/Navbar";
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
  const {logIn} = useContext(AuthContext)
  const handleLogin = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)
    logIn(email, password)
      .then(res => {
      console.log(res.user)
      })
      .catch(err => {
      console.log(err)
    })
  }
  
  return (
    <div className="">
      
      <Navbar></Navbar>

      <form onSubmit={handleLogin} className=" rounded-lg m-40 card-body  w-[400px] md:w-[500px] mx-auto  bg-sky-100">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name='email'
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name='password'
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-pink-600">Login</button>
        </div>
        <h1>You dont have an account please ! <Link to={'/register'}>Register</Link></h1>
      </form>
    </div>
  );
};

export default Login;