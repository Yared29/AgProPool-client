const SignInPage = () => {
  return (
    <div>
      <nav className='bg-white border-gray-200 mx-2 px-2 py-2.5 rounded dark:bg-gray-800'>
        <div className='container flex justify-between items-center mx-auto pt-3'>
          <div className='flex items-center mx-auto'>
            <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
              Welcome To AgProPool
            </span>
          </div>
        </div>
        <div className='m-5 p-0.5 bg-gray-600'></div>
      </nav>
      <div className='container flex justify-between items-center mx-auto'>
        <div className='flex items-center mx-auto '>
          <div className='grid place-items-center'>
            <div className='bg-white p-12 w-9/12 sm:w-9/12 md:w-9/12 lg:w-10/12 '>
              <h1 className='text-xl font-semibold'>
                Hello there ?,{" "}
                <span className='font-normal'>
                  please fill in your information to continue
                </span>
              </h1>
              <form className='mt-6'>
                <label
                  htmlFor='phone'
                  className='block mt-2 text-xs font-semibold text-gray-600 uppercase'>
                  Phone
                </label>
                <input
                  id='phone'
                  type='phone'
                  name='phone'
                  placeholder='0911223344'
                  autoComplete='phone'
                  className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
                  required
                />
                <label
                  htmlFor='password'
                  className='block mt-2 text-xs font-semibold text-gray-600 uppercase'>
                  Password
                </label>
                <input
                  id='password'
                  type='password'
                  name='password'
                  placeholder='********'
                  autoComplete='new-password'
                  className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
                  required
                />
                <button
                  type='submit'
                  className='w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none'>
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
