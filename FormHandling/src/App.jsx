import { useState, React, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const notify = (msg) => toast.success(msg);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting,isSubmitSuccessful, },
  } = useForm();
  useEffect(() => {
    if (isSubmitSuccessful) {
      toast.success('Form submitted successfully');
    }
  }, [isSubmitSuccessful]); 
 
  const onSubmit = (data) => console.log(data);
  {isSubmitSuccessful&&notify("Form submited successfully")}
  return (
    <>
      <ToastContainer theme="dark"/>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-gray-800 dark:bg-gray-700 mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="font-semibold text-sm text-gray-600 dark:text-gray-400 pb-1 block"
                    htmlFor="fullname"
                  >
                    Full Name
                  </label>
                  <input
                    {...register("Name", {
                      required:"This field is Required *",
                      minLength: { value: 3, message: "Minimum length is 3" },
                      maxLength: { value: 30, message: "Minimum length is 30" },
                    })}
                    className={`border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-800 dark:text-gray-200 ${
                      errors.Name ? "border-red-500" : "border-gray-300"
                    }`}
                    type="text"
                    id="fullname"
                  />
                  {errors.Name && (
                    <span className="text-red-500 text-sm">
                      {errors.Name.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    className="font-semibold text-sm text-gray-600 dark:text-gray-400 pb-1 block"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    {...register("Email", {required:'Email is Required'})} 
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-800 dark:text-gray-200"
                    type="email"
                    id="email"
                  />
                  {errors.Email && (
                    <span className="text-red-500 text-sm">
                      {errors.Email.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    className="font-semibold text-sm text-gray-600 dark:text-gray-400 pb-1 block"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    {...register("Username", {required:'Username is required'}) }
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-800 dark:text-gray-200"
                    type="text"
                    id="username"
                  />
                    {errors.Username && (
                    <span className="text-red-500 text-sm">
                      {errors.Username.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    className="font-semibold text-sm text-gray-600 dark:text-gray-400 pb-1 block"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    {...register("Password", {required:'Enter Password'})}
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-800 dark:text-gray-200"
                    type="password"
                    id="password"
                  />
                    {errors.Password && (
                    <span className="text-red-500 text-sm">
                      {errors.Password.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="font-semibold text-sm text-gray-600 dark:text-gray-400 pb-1 block"
                    htmlFor="dob"
                  >
                    Date of Birth
                  </label>
                  <input
                    {...register("DOB", {required:'This field is required',pattern:{
                      value:' [/[a-z]/, /[A-Z]/, /[0-9]/]+',
                      message:"special chater r"
                    }})}
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-800 dark:text-gray-200"
                    type="date"
                    id="dob"
                  />
                  {errors.DOB && (
                    <span className="text-red-500 text-sm">
                      {errors.DOB.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    className="font-semibold text-sm text-gray-600 dark:text-gray-400 pb-1 block"
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <select
                    {...register("gender")}
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-800 dark:text-gray-200"
                    id="gender"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                 
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="mt-5">
                  <input
                    type="submit"
                    disabled={isSubmitting}
                    className="py-2 px-20 bg-blue-700 hover:bg-blue-800 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  />
                  
                </div>
              </div>
              <div className="py-5">
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-center sm:text-left whitespace-nowrap">
                    <button className="transition ease-in duration-200 text-gray-500 dark:text-gray-400 text-sm font-semibold py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg">
                      Cancel
                    </button>
                  </div>
                  <div className="text-center sm:text-right whitespace-nowrap">
                    <button className="transition ease-in duration-200 text-gray-500 dark:text-gray-400 text-sm font-semibold py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg">
                      Forgot your password?
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
