//@ts-nocheck

import { useState } from "react";
import { BiErrorAlt } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { FaNairaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Registration = () => {
  const [selected, setSelected] = useState("choose");
  const [accountType, setAccountType] = useState("");
  return (
    <div className="space-y-8 w-100 h-full overflow-y-auto scrollbar-none">
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
            className="text-blue-700 flex items-center justify-center text-sm  gap-2 font-semibold hover:underline"
          >
            <BsArrowLeft size={14} /> Back to login
          </Link>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-3 gap-5">
          <div
            onClick={() => {
              (setSelected("choose"), setAccountType(""));
            }}
            className="space-y-2"
          >
            <div
              className={`${selected === "choose" || selected === "registration" ? "bg-blue-700" : "bg-gray-400"} w-full h-1 rounded-2xl`}
            ></div>
            <p className="text-gray-600 text-xs font-semibold">
              1. Choose type
            </p>
          </div>
          <div className="space-y-2">
            <div
              className={`${selected === "registration" || selected === "password" ? "bg-blue-700" : "bg-gray-400"} w-full h-1 rounded-2xl`}
            ></div>
            <p className="text-gray-600 text-xs font-semibold">
              2. Registration details
            </p>
          </div>
          <div className="space-y-2">
            <div
              className={`${selected === "password" ? "bg-blue-700" : "bg-gray-400"} w-full h-1 rounded-2xl`}
            ></div>
            <p className="text-gray-600 text-xs font-semibold">
              3. Create password
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {selected === "choose" && (
          <div className="space-y-3 ">
            <h2 className="text-lg font-semibold text-center">
              Seleted Account Type
            </h2>
            <div
              onClick={() => {
                (setAccountType("paying"), setSelected("registration"));
              }}
              className="w-full flex justify-between items-start bg-white shadow rounded-lg h-30 border border-gray-300 p-3 overflow-hidden space-y-2"
            >
              <div className="flex flex-col justify-center h-full gap-1">
                <h3 className="font-semibold text-lg">Paying Customer</h3>
                <p className="text-xs text-gray-500">
                  Pay a one registration fee to access our services instantly.
                </p>
                <small className="text-blue-700 font-semibold flex items-center gap-1">
                  Registration fee{" "}
                  <span className="flex items-center">
                    <FaNairaSign />
                    5,000.00
                  </span>
                </small>
              </div>
              <button
                className={`${accountType === "paying" ? "bg-blue-700 border-blue-700" : "bg-transparent border-gray-400"} w-5 h-5 rounded-full border`}
              ></button>
            </div>

            <div
              onClick={() => {
                (setAccountType("hmo"), setSelected("registration"));
              }}
              className="w-full flex justify-between items-start bg-white shadow rounded-lg h-30 border border-gray-300 p-3 overflow-hidden space-y-2"
            >
              <div className="flex flex-col justify-center h-full gap-1">
                <h3 className="font-semibold text-lg">HMO Customer</h3>
                <p className="text-xs text-gray-500">
                  Pay a one registration fee to access our services instantly.
                </p>
              </div>

              <button
                className={`${accountType === "hmo" ? "bg-blue-700 border-blue-700" : "bg-transparent border-gray-400"} w-5 h-5 rounded-full border p-2 outline-2 outline-blue-700`}
              ></button>
            </div>
          </div>
        )}

        {accountType === "paying" && (
          <div className="space-y-5 bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold text-lg border-b border-gray-300 text-gray-800">
              Basic Information
            </h2>
            <form className="space-y-5">
              <div className="space-x-5 flex">
                <div>
                  <label htmlFor="email" className="font-semibold text-sm">
                    First Name
                  </label>
                  <div className="p-2 border border-gray-400 rounded-lg  hover:shadow-md">
                    <input
                      type="text"
                      placeholder="John"
                      id="email"
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="font-semibold text-sm">
                    Last Name
                  </label>
                  <div className="p-2 border border-gray-400 rounded-lg  hover:shadow-md">
                    <input
                      type="text"
                      placeholder="Don"
                      id="email"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="font-semibold text-sm">
                  Email Address
                </label>
                <div className="p-2 border border-gray-400 rounded-lg hover:shadow-md">
                  <input
                    type="email"
                    placeholder="john.doe@gmail.com"
                    id="email"
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="font-semibold text-sm">
                  Phone Number
                </label>
                <div className="p-2 border border-gray-400 rounded-lg hover:shadow-md">
                  <input
                    type="text"
                    pattern="[0-9]-g"
                    max={11}
                    min={9}
                    placeholder="+234 4532 332 435"
                    id="email"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="p-2 border border-gray-400 rounded-lg hover:shadow-md space-y-2 bg-gray-100">
                <div>
                  <h3 className="font-semibold text-lg">Registration Fee</h3>
                  <h1 className="flex items-center text-blue-700 text-2xl font-bold">
                    <FaNairaSign />
                    5,000.00
                  </h1>
                </div>
                <p className="text-sm text-gray-600">
                  Secure processing is complete after your account password is
                  created.
                </p>
              </div>

              <button className="p-2 bg-blue-700 text-white w-full rounded-lg cursor-pointer font-semibold hover:bg-blue-600 hover:shadow-md">
                Continue to Password Setup
              </button>
            </form>
          </div>
        )}

        {accountType === "hmo" && (
          <div className="space-y-5 bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold text-lg border-b border-gray-300 text-gray-800">
              HMO Registration Details
            </h2>
            <form className="space-y-5">
              <div className="space-x-5 flex">
                <div>
                  <label htmlFor="email" className="font-semibold text-sm">
                    First Name
                  </label>
                  <div className="p-2 border border-gray-400 rounded-lg  hover:shadow-md">
                    <input
                      type="text"
                      placeholder="John"
                      id="email"
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="font-semibold text-sm">
                    Last Name
                  </label>
                  <div className="p-2 border border-gray-400 rounded-lg  hover:shadow-md">
                    <input
                      type="text"
                      placeholder="Don"
                      id="email"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="font-semibold text-sm">
                  Email Address
                </label>
                <div className="p-2 border border-gray-400 rounded-lg hover:shadow-md">
                  <input
                    type="email"
                    placeholder="john.doe@gmail.com"
                    id="email"
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="font-semibold text-sm">
                  Phone Number
                </label>
                <div className="p-2 border border-gray-400 rounded-lg hover:shadow-md">
                  <input
                    type="text"
                    pattern="[0-9]-g"
                    max={11}
                    min={9}
                    placeholder="+234 4532 332 435"
                    id="email"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="provider">HMO Provider</label>
                <div className="p-2 border border-gray-400 rounded-lg hover:shadow-md">
                  <select name="" id="" className="w-full">
                    <option value="">Select your provider</option>
                    <option value="">Total Health Trust</option>
                    <option value="">AXA Mansard Health</option>
                    <option value="">AIICO MultiShield Nigeria Limited</option>
                    <option value="">Novo Health Africa</option>
                    <option value="">Clearline HMO</option>
                  </select>
                </div>
              </div>

              <div className="flex items-start gap-4 text-blue-700 p-2 border border-gray-400 rounded-lg hover:shadow-md space-y-2 bg-gray-100">
                <div>
                  <BiErrorAlt />
                </div>
                <p className="text-sm text-gray-600">
                  HMO registration require verification by our administration
                  team. Activation may take up to 24 hours.
                </p>
              </div>

              <button className="p-2 bg-blue-700 text-white w-full rounded-lg cursor-pointer font-semibold hover:bg-blue-600 hover:shadow-md">
                Continue to Password Setup
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
