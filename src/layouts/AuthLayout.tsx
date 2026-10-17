import { BiCheck } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { CgLock } from "react-icons/cg";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-6xl mx-auto flex justify-center items-center h-screen">
      <div className="flex justify-between bg-gray-100 w-full h-150">
        <div className="flex flex-col justify-center items-center text-center p-5 bg-blue-700 text-white w-full space-y-5">
          <p className="uppercase text-xs font-semibold text-gray-300">
            Caresync Hosipital Network
          </p>
          <h3 className="text-4xl font-bold">
            Modern Healthcare, <br />
            Simplified.
          </h3>

          <p className="w-100 mx-auto text-gray-300">
            Securely sign in to manage consultations, payments, schedules, and
            registration workflows in one modern hosipital portal
          </p>

          <div className="flex gap-5 w-100">
            <div className="bg-white/30 rounded-lg p-3 flex items-start gap-2 shadow-md">
              <div className="w-6 h-6 bg-white/10 rounded-full p-1.5 flex justify-center items-center">
                <BiCheck />
              </div>
              <div className="text-left space-y-1">
                <h3 className="text-sm font-semibold">Easy Registration</h3>
                <p className="text-xs">Seemless patient onboarding.</p>
              </div>
            </div>
            <div className="bg-white/30 rounded-lg p-3 flex items-start gap-2 shadow-md">
              <div className="w-6 h-6 bg-white/10 rounded-full p-1.5 flex justify-center items-center">
                <BsClock />
              </div>
              <div className="text-left space-y-1">
                <h3 className="text-sm font-semibold">Easy Registration</h3>
                <p className="text-xs">Seemless patient onboarding.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-5 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
