import React, { useState } from "react";
import {Link} from 'react-router-dom'
import '../../src/App.css';

const SignUp = () => {
  const [FormData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onHandleSubmit = async(e) => {
    e.preventDefault()
    try{
      const response = await fetch('http://localhost:4000/signup',{
        method :'POST',
        headers : {
          'Content-Type':'application/json'
        },
        body : JSON.stringify(FormData)
      })
      if(response.ok)
      {
        const data = await response.json();
        console.log(data);
        console.log('User registered successfully')
      }
      else{
        console.error('Failed to register user')
      }
    }
    catch(err){
      console.error('Error Registering user : ',err)
    }
    console.log("Form Submitted", FormData);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="SingUp w-full max-w-md px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-medium text-center">Sing Up</h1>
        <form onSubmit={onHandleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              value={FormData.name}
              name="name"
              id="name"
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter you name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              value={FormData.email}
              name="email"
              id="email"
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter you email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              value={FormData.password}
              name="password"
              id="password"
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter you password"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <Link
             to='/login'
              type="button"
              className="text-sm text-indigo-600 hover:underline"
            >
             Already have an account
            </Link>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Sing Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
