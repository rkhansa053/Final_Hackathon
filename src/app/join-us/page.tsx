
const JoinUs = () => {
    return(
        <div>
             {/* Logo Section */}
        <div className="flex justify-center my-8">
          <img
            src="/images/Frame (2).png" 
            alt="Logo"
            className="h-17 md:h-16" 
          />
        </div>
            <h1 className="text-center text-xl font-bold mt-4">
                BECOME A NIKE MEMBER
            </h1>
            <p className="text-[#8D8D8D] text-center mt-4 text-sm md:text-base max-w-2xl mx-auto">
            Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
            </p>

            <div className="flex flex-col justify-center max-w-lg mx-auto mt-8 space-y-6 font-[sans-serif] text-[#333]">
            <div>
               <input
               type="text"
               placeholder="Email address"
               className="px-4 py-2 text-sm md:text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
            </div>

            <div>
            <input
                  type="text"
                  placeholder="Password"
                  className="px-4 py-2 text-sm md:text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
            </div>

            <div>
            <input
                 type="text"
                 placeholder="First Name"
                 className="px-4 py-2 text-sm md:text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
            </div>
            <div>
            <input
                 type="text"
                 placeholder="Last Name"
                 className="px-4 py-2 text-sm md:text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
            </div>
            <div>
            <label className="mb-2 text-sm block"></label>
            <input
                 type="text"
                 placeholder="Date of Birth"
                 className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
            </div>

            <div>
               <input
                  type="date"
                  placeholder="Date of Birth"
                  className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500"/>
            </div>
            <p className="text-[#8D8D8D] text-center mt-4 text-sm max-w-xl mx-auto">
            Get a Nike Member Reward every year on your Birthday.
            </p>

            <div>
            <select className="px-4 py-2 text-sm md:text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500">
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
            </select>
            </div>

            <div className="flex gap-5">
                <input
                     type="text"
                     placeholder="Male"
                     className="px-4 py-2 md:text-base text-sm rounded-md bg-white border border-gray-400 outline-blue-500"
                />
                <label className="w-153.89 h-43 "></label>
                <input
                     type="text"
                     placeholder="Female"
                     className="px-4 py-2 text-sm md:text-base rounded-md bg-white border border-gray-400 outline-blue-500"
                />
            </div>


            <div className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 mt-1" />
            <label className="text-sm md:text-base text-[#8D8D8D] ">Sign up for emails to get updates from Nike on products, offers and your Member benefits</label>
          </div>

          <div>
          <p className="text-[#8D8D8D] text-sm md:text-base">
          By logging in, you agree to Nike's <u>Privacy Policy</u> and <u>Terms of Use</u>.
          </p>
          </div>

          <div className="flex flex-col items-center mt-6">
          <button
            type="button"
            className="w-full md:w-80 h-10 bg-black text-sm md:text-base text-white hover:bg-gray-800 rounded-md mb-4">
            JOIN US
          </button>
          <div className="text-[#8D8D8D]">
          <p className="text-gray-500 text-sm md:text-base">
          Already a Member? 
          <b className="text-black cursor-pointer">Sign In</b>.
          </p>
          </div>
          </div>

        </div>
        </div>
    )
};

export default JoinUs;
