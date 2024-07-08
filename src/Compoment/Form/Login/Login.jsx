import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
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
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none btn focus:shadow-outline"
              type="button"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm mb-2">Or login with</p>
          <div className="flex justify-center space-x-4">
            <button
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
            <a
              href="#"
              className="text-green-500 font-bold hover:text-green-800"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
