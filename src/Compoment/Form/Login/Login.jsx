import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import useAxiosPublice from '../../../Hooks/useAuthPublice/useAxiosPublice';

const Login = () => {
  const { handileClickSignUser, handileClickGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setErrors] = useState('');
  const axiosPublice = useAxiosPublice();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    const { email, password } = data;
    handileClickSignUser(email, password)
      .then(res => {
        if (res.user) {
          setErrors('');
          navigate(location.state || '/');
        }
      })
      .catch(error => {
        console.log(error);
        setErrors('Invalid email or password. Please try again');
      });
  };

  const handileClicksGoogleLogin = () => {
    handileClickGoogle()
      .then(res => {
        console.log(res.user);
        const userInfo = {
          email: res.user.email,
          fullName: res.user.displayName,
          image: res.user.photoURL,
          role: 'user',
        };

        if (res.user) {
          navigate(location.state || '/');
          axiosPublice.post('/users', userInfo).then(res => {
            console.log(res.data);
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-[100px]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full input input-bordered text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
              id="email"
              type="email"
              placeholder="Enter your email"
              style={{ borderColor: '#82b440' }}
              {...register('email', { required: true })}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full input input-bordered text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              style={{ borderColor: '#82b440' }}
              {...register('password', { required: true })}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <a
              href="#"
              className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
            >
              Forgot Password?
            </a>
          </div>
          <p className="font-semibold text-center text-red-600">{error}</p>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 w-full  hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none btn focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm mb-2">Or login with</p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handileClicksGoogleLogin}
              className="flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <FaGoogle className="mr-2" />
              Google
            </button>
            <button
              className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <FaFacebook className="mr-2" />
              Facebook
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Don't have an account?{' '}
            <Link to={'/signUp'}>
              <a className="text-green-500 font-bold hover:text-green-800">
                Sign up
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
