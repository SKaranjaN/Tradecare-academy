import { SignIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
export default function Page() {
  return (
    <main>
      <div className="w-full flex justify-center p-10">
        <SignIn />
      </div>
    </main>
    // <main>
    //   {/* <!-- component --> */}
    //   <div className="bg-gray-100 flex justify-center items-center h-screen">
    //     {/* <!-- Right: Login Form --> */}
    //     <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
    //       <h1 className="text-2xl font-semibold mb-4">Login</h1>
    //       <form action="#" method="POST">
    //         {/* <!-- Username Input --> */}
    //         <div className="mb-4">
    //           <label htmlFor="username" className="block text-gray-600">
    //             Username
    //           </label>
    //           <input
    //             type="text"
    //             id="username"
    //             name="username"
    //             className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
    //           />
    //         </div>
    //         {/* <!-- Password Input --> */}
    //         <div className="mb-4">
    //           <label htmlFor="password" className="block text-gray-600">
    //             Password
    //           </label>
    //           <input
    //             type="password"
    //             id="password"
    //             name="password"
    //             className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
    //           />
    //         </div>
    //         {/* <!-- Remember Me Checkbox --> */}
    //         <div className="mb-4 flex items-center">
    //           <input
    //             type="checkbox"
    //             id="remember"
    //             name="remember"
    //             className="text-blue-500"
    //           />
    //           <label htmlFor="remember" className="text-gray-600 ml-2">
    //             Remember Me
    //           </label>
    //         </div>
    //         {/* <!-- Forgot Password Link --> */}
    //         <div className="mb-6 text-blue-500">
    //           <a href="#" className="hover:underline">
    //             Forgot Password?
    //           </a>
    //         </div>
    //         {/* <!-- Login Button --> */}
    //         <Button className="w-full">Sign In</Button>
    //         {/* <button
    //           type="submit"
    //           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
    //         >
    //           Login
    //         </button> */}
    //       </form>
    //       {/* <!-- Sign up  Link --> */}
    //       <div className="mt-6 text-grey-500 text-center">
    //         Don't have an Account
    //         <a href="/sign-up" className="hover:underline hover:bg-teal-500 text-blue-600"> Sign Up Here</a>
    //       </div>
    //     </div>
        
    //     {/* <!-- Left: Image --> */}
    //     <div className="w-1/2 h-screen hidden lg:block">
    //       <img
    //         src="/images/tradeCareacademylogo.png"
    //         alt="TradeCare Academy Logo's"
    //         className="object-cover w-full h-full"
    //       />
    //     </div>
    //   </div>
    // </main>
  );
}
