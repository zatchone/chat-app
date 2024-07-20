import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from "../../hooks/useLogin" // adjust this path as needed

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-bold text-center text-gray-500'>
          Login <span className='text-yellow-300'>Zander</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input 
              type="text" 
              placeholder="Enter username" 
              className="w-full input input-bordered input-primary h-10 p-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter password'
              className="w-full input input-bordered input-primary h-10 p-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link to='/signup' className='text-sm hover:underline hover:text-yellow-400 mt-2 inline-block'>
            Don't have an account?
          </Link>

          <div>
            <button 
              className='btn btn-block btn-sm mt-2 hover:text-yellow-300'
              disabled={loading}
            >
              {loading ? <span className='loading loading-spinner'></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;