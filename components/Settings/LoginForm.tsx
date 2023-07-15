import { Formik, Field, Form } from 'formik';
import toast from 'react-hot-toast';
import { useState } from 'react';
import Cookies from 'js-cookie';

type Props = {
  onLogin: () => void;
  username: string | undefined;
  password: string | undefined;
};

const validCredentials = [
  { username: 'SWIFTY', password: '@swifty' }
];

export default function LoginForm({ onLogin, username, password }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const bypassAuth = false; // Set to true to enable bypass, set to false to disable bypass

  const handleSubmit = async (values: { username: string; password: string }) => {
    setIsLoading(true);

    if (
      bypassAuth &&
      values.username.trim() === '' &&
      values.password.trim() === ''
    ) {
      console.log('Bypassing authentication');
      Cookies.set('isLoggedIn', 'true', { expires: 1 });
      onLogin();
      setIsLoading(false);
      return;
    }

    // Check if the entered username and password match the ones from the .env file
    const isAuthenticated = validCredentials.some(
    (cred) =>
      cred.username === values.username && cred.password === values.password
  );

  if (isAuthenticated) {
    console.log('Credentials match.');
    Cookies.set('isLoggedIn', 'true', { expires: 15 }); // Set a cookie for 15 day
    onLogin();
  } else {
    console.log('Credentials do not match.');
    // If the authentication fails, show an error message
    toast.error('Invalid username or password.');
  }

  setIsLoading(false);
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Formik initialValues={{ username: '', password: '' }} onSubmit={handleSubmit}>
        <Form className="bg-gray-700 p-8 rounded-md shadow-md">
          <h1 className="text-2xl font-medium text-white mb-4">Login to WaveAI</h1>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-300 font-medium mb-2">
              Username
            </label>
            <Field
              id="username"
              name="username"
              placeholder="Username"
              className="border border-gray-600 p-2 rounded-md w-full bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300 font-medium mb-2">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="border border-gray-600 p-2 rounded-md w-full bg-gray-800 text-white"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </Form>
      </Formik>
    </div>
  );
}
