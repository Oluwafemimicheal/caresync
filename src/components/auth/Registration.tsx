//@ts-nocheck
import { useState } from "react";
import { BiErrorAlt } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { FaNairaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Registration = () => {
  const [selected, setSelected] = useState("choose"); // "choose", "registration", "password", "loading"
  const [accountType, setAccountType] = useState(""); // "paying", "hmo"

  return (
    <div className="space-y-8 w-full h-full overflow-y-auto scrollbar-none p-4">
      {/* Header Section */}
      <div className="flex justify-center items-center space-y-3 flex-col text-center">
        <h1 className="text-lg font-extrabold text-blue-700">CareSync</h1>
        <div className="space-y-3">
          <div>
            <h2 className="text-2xl font-semibold">Create an account</h2>
            <p className="text-xs text-gray-600">
              Please enter your details to register
            </p>
          </div>

          <Link
            to={"/login"}
            className="text-blue-700 flex items-center justify-center text-sm gap-2 font-semibold hover:underline"
          >
            <BsArrowLeft size={14} /> Back to login
          </Link>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="grid grid-cols-3 gap-5">
        <div
          className="space-y-2 cursor-pointer"
          onClick={() => setSelected("choose")}
        >
          <div
            className={`${selected === "choose" || selected === "registration" || selected === "password" ? "bg-blue-700" : "bg-gray-400"} w-full h-1 rounded-2xl`}
          ></div>
          <p className="text-gray-600 text-xs font-semibold text-center">
            1. Choose type
          </p>
        </div>
        <div className="space-y-2">
          <div
            className={`${selected === "registration" || selected === "password" ? "bg-blue-700" : "bg-gray-400"} w-full h-1 rounded-2xl`}
          ></div>
          <p className="text-gray-600 text-xs font-semibold text-center">
            2. Details
          </p>
        </div>
        <div className="space-y-2">
          <div
            className={`${selected === "password" ? "bg-blue-700" : "bg-gray-400"} w-full h-1 rounded-2xl`}
          ></div>
          <p className="text-gray-600 text-xs font-semibold text-center">
            3. Password
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {/* STEP 1: CHOOSE ACCOUNT TYPE */}
        {selected === "choose" && (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-center">
              Select Account Type
            </h2>

            {/* Paying Customer Option */}
            <div
              onClick={() => {
                setAccountType("paying");
                setSelected("registration");
              }}
              className="w-full flex justify-between items-center bg-white shadow rounded-lg border border-gray-300 p-4 cursor-pointer hover:border-blue-500 transition-all"
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg">Paying Customer</h3>
                <p className="text-xs text-gray-500">
                  Pay a one-time fee to access services instantly.
                </p>
                <small className="text-blue-700 font-semibold flex items-center gap-1">
                  Registration fee{" "}
                  <span className="flex items-center">
                    <FaNairaSign /> 5,000.00
                  </span>
                </small>
              </div>
              <div
                className={`${accountType === "paying" ? "bg-blue-700 border-blue-700" : "bg-transparent border-gray-400"} w-5 h-5 rounded-full border`}
              />
            </div>

            {/* HMO Customer Option */}
            <div
              onClick={() => {
                setAccountType("hmo");
                setSelected("registration");
              }}
              className="w-full flex justify-between items-center bg-white shadow rounded-lg border border-gray-300 p-4 cursor-pointer hover:border-blue-500 transition-all"
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg">HMO Customer</h3>
                <p className="text-xs text-gray-500">
                  Register using your HMO provider details.
                </p>
              </div>
              <div
                className={`${accountType === "hmo" ? "bg-blue-700 border-blue-700" : "bg-transparent border-gray-400"} w-5 h-5 rounded-full border`}
              />
            </div>
          </div>
        )}

        {/* STEP 2: REGISTRATION DETAILS (Conditional based on accountType) */}
        {selected === "registration" && (
          <>
            {accountType === "paying" && (
              <div className="space-y-5 bg-white p-4 rounded-lg shadow">
                <h2 className="font-bold text-lg border-b border-gray-300 text-gray-800 pb-2">
                  Basic Information
                </h2>
                <form className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="font-semibold text-sm">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full p-2 border border-gray-400 rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="font-semibold text-sm">Last Name</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full p-2 border border-gray-400 rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold text-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john.doe@gmail.com"
                      className="w-full p-2 border border-gray-400 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-sm">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="+234 ..."
                      className="w-full p-2 border border-gray-400 rounded-lg"
                    />
                  </div>
                  <div className="p-3 border border-gray-400 rounded-lg bg-gray-100 space-y-1">
                    <h3 className="font-semibold">Registration Fee</h3>
                    <h1 className="flex items-center text-blue-700 text-2xl font-bold">
                      <FaNairaSign /> 5,000.00
                    </h1>
                    <p className="text-xs text-gray-600">
                      Secure processing completes after password setup.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelected("password")}
                    className="p-2 bg-blue-700 text-white w-full rounded-lg font-semibold hover:bg-blue-600"
                  >
                    Continue to Password Setup
                  </button>
                </form>
              </div>
            )}

            {accountType === "hmo" && (
              <div className="space-y-5 bg-white p-4 rounded-lg shadow">
                <h2 className="font-bold text-lg border-b border-gray-300 text-gray-800 pb-2">
                  HMO Registration Details
                </h2>
                <form className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="font-semibold text-sm">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full p-2 border border-gray-400 rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="font-semibold text-sm">Last Name</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full p-2 border border-gray-400 rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold text-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john.doe@gmail.com"
                      className="w-full p-2 border border-gray-400 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-sm">
                      HMO Provider
                    </label>
                    <select className="w-full p-2 border border-gray-400 rounded-lg bg-white">
                      <option value="">Select your provider</option>
                      <option value="total">Total Health Trust</option>
                      <option value="axa">AXA Mansard Health</option>
                    </select>
                  </div>
                  <div className="flex items-start gap-4 text-blue-700 p-3 border border-gray-400 rounded-lg bg-gray-100">
                    <BiErrorAlt className="shrink-0" />
                    <p className="text-xs text-gray-600">
                      HMO registration requires verification. Activation may
                      take up to 24 hours.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelected("password")}
                    className="p-2 bg-blue-700 text-white w-full rounded-lg font-semibold hover:bg-blue-600"
                  >
                    Continue to Password Setup
                  </button>
                </form>
              </div>
            )}
          </>
        )}

        {/* STEP 3: PASSWORD */}
        {selected === "password" && (
          <div className="space-y-5 bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-center">
              Create Your Account Password
            </h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="font-semibold text-sm">
                  Password{" "}
                  <em className="text-xs text-gray-600 font-normal">
                    (min 6 chars, add a symbol)
                  </em>
                </label>
                <input
                  type="password"
                  placeholder="***********"
                  className="w-full p-2 border border-gray-400 rounded-lg"
                />
              </div>
              <div>
                <label className="font-semibold text-sm">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="***********"
                  className="w-full p-2 border border-gray-400 rounded-lg"
                />
              </div>
              <button
                type="submit"
                onClick={() => setSelected("loading")}
                className="p-2 bg-blue-700 text-white w-full rounded-lg font-semibold hover:bg-blue-600"
              >
                Register Now
              </button>
            </form>
          </div>
        )}

        {/* LOADING STATE */}
        {selected === "loading" && (
          <div className="space-y-5 bg-white p-4 rounded-lg shadow h-40 flex justify-center items-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700 mx-auto mb-2"></div>
              <h3 className="font-medium">Creating Account...</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
