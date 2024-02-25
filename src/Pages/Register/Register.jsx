import { Link } from "react-router-dom";
import Navbar from "../../Shared/Header/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = ( ) => {
  const {createUser} = useContext(AuthContext)
  const handleRegister = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password, name, photo)
    
    createUser(email, password)
      
      .then(res => {
      console.log(res.user)
      })
      .catch(err => {
      console.log(err)
    })

  }
  
   
  return (
    <div>
      <Navbar></Navbar>
      <form onSubmit={handleRegister} className=" rounded-lg m-40 card-body  w-[400px] md:w-[500px] mx-auto  bg-sky-100">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="input input-bordered"
            required
          />
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            placeholder="photo url"
            name="photo"
            className="input input-bordered"
            required
          />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
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
            placeholder="password"
            name="password"
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
          <button className="btn bg-pink-600">Register</button>
        </div>
        <h1>Go to <Link to={'/login'}>Login</Link></h1>
      </form>
    </div>
  );
};

export default Register;