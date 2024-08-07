import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';
import { useState } from 'react';
import useAxiosPublice from '../../../Hooks/useAuthPublice/useAxiosPublice';

const SignUp = () => {
  const { handileClickCreate, handileUpdate } = useAuth();
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
    const { fullName, email, photo, password } = data;

    const img = photo[0];
    const formData = new FormData();
    formData.append('image', img);

    handileClickCreate(email, password)
      .then(res => {
        if (res.user) {
          console.log(res.user);
          axios
            .post(
              `https://api.imgbb.com/1/upload?key=${
                import.meta.env.VITE_IMG_HOSTING_KEY
              }`,
              formData
            )
            .then(res => {
              const image = res?.data?.data?.display_url;
              const userInfo = {
                email,
                fullName,
                image,
              };

              handileUpdate(fullName, image).then(res => {
                console.log(res);

                axiosPublice.post('/users', userInfo).then(res => {
                  console.log(res.data);
                });
              });
            });
        }
      })
      .catch(error => {
        console.log(error);
        setErrors(error.message);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-[100px]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-[#82b440]">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full input input-bordered text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
              id="name"
              type="text"
              placeholder="Enter your name"
              style={{ borderColor: '#82b440' }}
              {...register('fullName', { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full  input input-bordered text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
              id="email"
              type="email"
              placeholder="Enter your email"
              style={{ borderColor: '#82b440' }}
              {...register('email', { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="photo"
            >
              Photo
            </label>
            <input
              className="shadow appearance-none border rounded w-full  input input-bordered text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
              id="photo"
              type="file"
              placeholder="Upload your photo"
              style={{ borderColor: '#82b440' }}
              {...register('photo', { required: true })}
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
              className="shadow appearance-none border rounded w-full  input input-bordered text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              style={{ borderColor: '#82b440' }}
              {...register('password', { required: true })}
            />
          </div>
          <p className="text-center text-red-600 font-semibold">{error}</p>
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-gradient-to-r btn w-full from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <Link to={'/login'}>
              <a className="text-green-500 font-bold hover:text-green-800">
                Login
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
