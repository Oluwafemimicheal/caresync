//@ts-nocheck

import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaNairaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Registration = () => {
  const [selected, setSelected] = useState("choose");
  return (
    <div className="space-y-8 w-100">
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
          <div className="space-y-2">
            <div
              className={`${selected === "choose" ? "bg-blue-700" : "bg-gray-400"} w-full h-1 rounded-2xl`}
            ></div>
            <p className="text-gray-600 text-xs font-semibold">
              1. Choose type
            </p>
          </div>
          <div className="space-y-2">
            <div
              className={`${selected === "registration" ? "bg-blue-700" : "bg-gray-400"} w-full h-1 rounded-2xl`}
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
        <h2 className="text-lg font-semibold text-center">
          Seleted Account Type
        </h2>
        {selected === "choose" && (
          <div className="space-y-3 ">
            <div className="w-full flex justify-between items-start bg-white shadow rounded-lg h-30 border border-gray-300 p-3 overflow-hidden space-y-2">
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
              <button className="w-5 h-5 rounded-full border border-gray-400"></button>
            </div>
            <div className="w-full flex justify-between items-start bg-white shadow rounded-lg h-30 border border-gray-300 p-3 overflow-hidden space-y-2">
              <div className="flex flex-col justify-center h-full gap-1">
                <h3 className="font-semibold text-lg">HMO Customer</h3>
                <p className="text-xs text-gray-500">
                  Pay a one registration fee to access our services instantly.
                </p>
                
              </div>
              <button className="w-5 h-5 rounded-full border border-gray-400"></button>
            </div>
          
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
