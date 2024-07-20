import React, { useState } from 'react'
import GenderCheckbox from './genderCheckbox.jsx';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup.js';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    })

    const {loading, signup} = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // to prevent from refreshing
        await signup(inputs);
       
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign up <span className='text-yellow-300'>Zorith</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input
                            type="text" 
                            placeholder="Enter full name" 
                            className="w-full input input-bordered input-primary h-10 p-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="Enter username" 
                            className="w-full input input-bordered input-primary h-10 p-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                            value={inputs.username}
                            onChange={(e) => setInputs({...inputs, username: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type="password" 
                            placeholder="Enter Password" 
                            className="w-full input input-bordered input-primary h-10 p-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Confirm password</span>
                        </label>
                        <input
                            type="password" 
                            placeholder="Confirm Password" 
                            className="w-full input input-bordered input-primary h-10 p-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

                    <div>
                        <button 
                            className='btn btn-block btn-sm mt-2 hover:text-yellow-300' 
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Signing up...' : 'Sign Up'}
                        </button>
                    </div>
                </form>

                <Link to='/login' className='text-sm hover:underline hover:text-yellow-400 mt-2 inline-block'>
                    Already have an account?
                </Link>
            </div>
        </div>
    )
}

export default SignUp