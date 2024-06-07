import React, { useState } from "react";

function Login() {
  const [login, setLogin] = useState(true);
  return (
    <div className="h-full min-h-screen w-full overflow-hidden bg-[#2148C0] flex justify-center items-center login">
      <span className="small"></span>
      <span className="medium"></span>
      <span className="large"></span>
      <div className="from-part w-full max-w-[350px] z-50">
        <div className="logo flex justify-center">
          <img className="w-full max-w-[80px]" src="/images/cart.png" alt="" />
        </div>

        {login ? (
          // ================Satrt Register Form================
          <form action="" className="mt-[30px]">
            <div className="flex gap-x-4">
              <label className="w-full flex items-center border-2 border-[#fff] rounded-md px-2 mb-4">
                <span className="text-[#fff] mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M234.38 210a123.36 123.36 0 0 0-60.78-53.23a76 76 0 1 0-91.2 0A123.36 123.36 0 0 0 21.62 210a12 12 0 1 0 20.77 12c18.12-31.32 50.12-50 85.61-50s67.49 18.69 85.61 50a12 12 0 0 0 20.77-12M76 96a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  className="w-full placeholder:text-[#fff] bg-transparent border-none outline-none focus:border-none focus:outline-none py-2 cursor-pointer px-3 text-[#fff]"
                />
              </label>
              <label className="w-full flex items-center border-2 border-[#fff] rounded-md px-2 mb-4">
                <span className="text-[#fff] mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.502 4.257A2 2 0 0 0 7.646 3H4.895A1.895 1.895 0 0 0 3 4.895C3 13.789 10.21 21 19.106 21A1.895 1.895 0 0 0 21 19.105v-2.751a2 2 0 0 0-1.257-1.857l-2.636-1.054a2 2 0 0 0-2.023.32l-.68.568a2.001 2.001 0 0 1-2.696-.122L9.792 12.29a2 2 0 0 1-.123-2.694l.567-.68a2 2 0 0 0 .322-2.024z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="LAST NAME"
                  className="w-full placeholder:text-[#fff] bg-transparent border-none outline-none focus:border-none focus:outline-none py-2 cursor-pointer px-3 text-[#fff]"
                />
              </label>
            </div>
            <label className="w-full flex items-center border-2 border-[#fff] rounded-md px-2 mb-4">
              <span className="text-[#fff] mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 16 14"
                >
                  <path
                    fill="currentColor"
                    d="M14.5 13h-13C.67 13 0 12.33 0 11.5v-9C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v9c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5z"
                  />
                  <path
                    fill="currentColor"
                    d="M8 8.96c-.7 0-1.34-.28-1.82-.79L.93 2.59c-.19-.2-.18-.52.02-.71s.52-.18.71.02l5.25 5.58c.57.61 1.61.61 2.18 0l5.25-5.57c.19-.2.51-.21.71-.02s.21.51.02.71L9.82 8.18c-.48.51-1.12.79-1.82.79Z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="EMAIL"
                className="w-full placeholder:text-[#fff] bg-transparent border-none outline-none focus:border-none focus:outline-none py-2 cursor-pointer px-3 text-[#fff]"
              />
            </label>
            <label className="w-full flex items-center border-2 border-[#fff] rounded-md px-2 mb-4">
              <span className="text-[#fff] mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.502 4.257A2 2 0 0 0 7.646 3H4.895A1.895 1.895 0 0 0 3 4.895C3 13.789 10.21 21 19.106 21A1.895 1.895 0 0 0 21 19.105v-2.751a2 2 0 0 0-1.257-1.857l-2.636-1.054a2 2 0 0 0-2.023.32l-.68.568a2.001 2.001 0 0 1-2.696-.122L9.792 12.29a2 2 0 0 1-.123-2.694l.567-.68a2 2 0 0 0 .322-2.024z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="PHONE"
                className="w-full placeholder:text-[#fff] bg-transparent border-none outline-none focus:border-none focus:outline-none py-2 cursor-pointer px-3 text-[#fff]"
              />
            </label>
            <label className="w-full flex items-center border-2 border-[#fff] rounded-md px-2 mb-4">
              <span className="text-[#fff] mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M13.35 16H2.65C1.74 16 1 15.26 1 14.35v-7.7C1 5.74 1.74 5 2.65 5h10.7c.91 0 1.65.74 1.65 1.65v7.69c0 .91-.74 1.65-1.65 1.65ZM2.65 6c-.36 0-.65.29-.65.65v7.69c0 .36.29.65.65.65h10.7c.36 0 .65-.29.65-.65V6.65c0-.36-.29-.65-.65-.65z"
                  />
                  <path
                    fill="currentColor"
                    d="M12.54 6H3.46V4.54C3.46 2.04 5.5 0 8 0s4.54 2.04 4.54 4.54zM4.46 5h7.08v-.46C11.54 2.59 9.95 1 8 1S4.46 2.59 4.46 4.54z"
                  />
                  <circle cx="12" cy="10.5" r="1" fill="currentColor" />
                  <circle cx="8" cy="10.5" r="1" fill="currentColor" />
                  <circle cx="4" cy="10.5" r="1" fill="currentColor" />
                </svg>
              </span>
              <input
                type="password"
                placeholder="PASSWORD"
                className="w-full placeholder:text-[#fff] bg-transparent border-none outline-none focus:border-none focus:outline-none py-2 cursor-pointer px-3 text-[#fff]"
              />
            </label>
            <button className="w-full bg-white rounded-md py-2 shadow-lg font-medium  text-[#2148c0]">
              SIGNUP
            </button>
            <div className="w-full  md:max-w-[300px] lg:max-w-[450px] mx-auto flex justify-end mt-3 text-[#fff]">
              <p>
                Are you all ready register ?{" "}
                <span
                  onClick={() => setLogin(!login)}
                  className="text-[#2148c0] bg-white rounded-sm  px-2 py-1 inline-block font-medium cursor-pointer"
                >
                  Login
                </span>
              </p>
            </div>
          </form>
           // ================End Register Form=================
        ) : (
         
          // ================Satrt Login Form================
          <form action="" className="mt-[30px]">
            <label className="w-full flex items-center border-2 border-[#fff] rounded-md px-2 mb-4">
              <span className="text-[#fff] mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 16 14"
                >
                  <path
                    fill="currentColor"
                    d="M14.5 13h-13C.67 13 0 12.33 0 11.5v-9C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v9c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5z"
                  />
                  <path
                    fill="currentColor"
                    d="M8 8.96c-.7 0-1.34-.28-1.82-.79L.93 2.59c-.19-.2-.18-.52.02-.71s.52-.18.71.02l5.25 5.58c.57.61 1.61.61 2.18 0l5.25-5.57c.19-.2.51-.21.71-.02s.21.51.02.71L9.82 8.18c-.48.51-1.12.79-1.82.79Z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="EMAIL"
                className="w-full placeholder:text-[#fff] bg-transparent border-none outline-none focus:border-none focus:outline-none py-2 cursor-pointer px-3 text-[#fff]"
              />
            </label>
            <label className="w-full flex items-center border-2 border-[#fff] rounded-md px-2 mb-4">
              <span className="text-[#fff] mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M13.35 16H2.65C1.74 16 1 15.26 1 14.35v-7.7C1 5.74 1.74 5 2.65 5h10.7c.91 0 1.65.74 1.65 1.65v7.69c0 .91-.74 1.65-1.65 1.65ZM2.65 6c-.36 0-.65.29-.65.65v7.69c0 .36.29.65.65.65h10.7c.36 0 .65-.29.65-.65V6.65c0-.36-.29-.65-.65-.65z"
                  />
                  <path
                    fill="currentColor"
                    d="M12.54 6H3.46V4.54C3.46 2.04 5.5 0 8 0s4.54 2.04 4.54 4.54zM4.46 5h7.08v-.46C11.54 2.59 9.95 1 8 1S4.46 2.59 4.46 4.54z"
                  />
                  <circle cx="12" cy="10.5" r="1" fill="currentColor" />
                  <circle cx="8" cy="10.5" r="1" fill="currentColor" />
                  <circle cx="4" cy="10.5" r="1" fill="currentColor" />
                </svg>
              </span>
              <input
                type="password"
                placeholder="PASSWORD"
                className="w-full placeholder:text-[#fff] bg-transparent border-none outline-none focus:border-none focus:outline-none py-2 cursor-pointer px-3 text-[#fff]"
              />
            </label>
            <button className="w-full bg-white rounded-md py-2 shadow-lg font-medium  text-[#2148c0]">
              LOGIN
            </button>
            <div className="w-full  md:max-w-[300px] lg:max-w-[450px] mx-auto flex justify-end mt-3 text-[#fff]">
              <p>
                If you are not register{" "}
                <span
                  onClick={() => setLogin(!login)}
                  className="text-[#2148c0] bg-white rounded-sm  px-2 py-1 inline-block font-medium cursor-pointer"
                >
                  Register
                </span>
              </p>
            </div>
          </form>
          // ================End Login Form================
        )}
      </div>
    </div>
  );
}

export default Login;
