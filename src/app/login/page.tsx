const Login = () => {
  return (
      <div className="px-4 md:px-8 lg:px-16">
          {/* Logo Section */}
          <div className="flex justify-center my-8">
              <img
                  src="/images/Frame (2).png"
                  alt="Logo"
                  className="h-12 md:h-16"
              />
          </div>

          {/* Login Form */}
          <form className="space-y-6 font-sans max-w-md mx-auto">
              {/* Email Input */}
              <div className="relative flex items-center">
                  <input
                      type="email"
                      placeholder="Enter Email"
                      className="px-4 py-3 bg-white text-black w-full text-sm md:text-base border-b-2 focus:border-blue-500 outline-none"
                  />
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-5 h-5 absolute right-4"
                      viewBox="0 0 682.667 682.667"
                  >
                      <g transform="matrix(1.33 0 0 -1.33 0 682.667)">
                          <path
                              fill="none"
                              strokeMiterlimit={10}
                              strokeWidth={40}
                              d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                          />
                          <path
                              d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                          />
                      </g>
                  </svg>
              </div>

              {/* Password Input */}
              <div className="relative flex items-center">
                  <input
                      type="password"
                      placeholder="Enter Password"
                      className="px-4 py-3 bg-white text-black w-full text-sm md:text-base border-b-2 focus:border-blue-500 outline-none"
                  />
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-5 h-5 absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                  >
                      <path
                          d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      />
                  </svg>
              </div>

              {/* Keep Me Signed In */}
              <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4" />
                  <label className="text-sm ml-4">Keep me signed in</label>
              </div>

              {/* Privacy Policy */}
              <p className="text-gray-500 text-sm md:text-base">
                  By logging in, you agree to Nike's <u>Privacy Policy</u> and <u>Terms of Use</u>.
              </p>

              {/* Sign In Button */}
              <div className="flex flex-col items-center mt-6">
                  <button
                      type="button"
                      className="w-full md:w-80 h-10 bg-black text-white text-sm md:text-base hover:bg-gray-800 rounded-md mb-4"
                  >
                      SIGN IN
                  </button>
                  <p className="text-gray-500 text-sm md:text-base">
                      Not a Member? <u className="cursor-pointer">Join Us</u>.
                  </p>
              </div>
          </form>
      </div>
  );
};

export default Login;




// https://github.com/rkhansa053/Hackathon-02.git