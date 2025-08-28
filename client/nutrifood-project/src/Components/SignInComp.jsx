import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignInComp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    mot_de_passe: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/signin', formData);
      console.log('Signin successful:', response.data);

      const userData = response.data;
      
      // Store complete user data in localStorage (consistent with SignUp component)
      const userDataToStore = {
        id_clients: userData.id_clients,
        name: userData.name,
        email: userData.email,
        role: userData.role
      };
      
      // Store as 'user' object to match what other components expect
      localStorage.setItem('user', JSON.stringify(userDataToStore));
      
      // Also store just the ID for backward compatibility (if needed elsewhere)
      localStorage.setItem('id_clients', userData.id_clients);

      console.log('Stored user data:', userDataToStore);

      navigate('/journal', {
        state: {
          name: userData.name,
          email: userData.email,
          userId: userData.id_clients
        }
      });
    } catch (error) {
      console.error('Error during signin:', error.response?.data || error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* Logo */}
        <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>

        {/* Card */}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>

            {/* Form */}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="mot_de_passe" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="mot_de_passe"
                  id="mot_de_passe"
                  value={formData.mot_de_passe}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 
                  focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 
                  text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
              >
                Sign In
              </button>

              {/* Signup link */}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account?{' '}
                <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign up here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInComp;