import { Outlet } from "react-router-dom";
import PatientSidebar from "../components/patient-dashboard/PatientSidebar";
import { BiBell } from "react-icons/bi";

const PaitentPortal = () => {
  return (
    <div className="grid grid-cols-10 h-screen">
      <div className="col-span-2 p-5 border-r border-gray-100">
        <PatientSidebar />
      </div>
      <div className="col-span-8 py-5 h-screen overflow-hidden">
        <div className="h-10 p-5 flex justify-between items-center bg-white border-b border-gray-100">
          <h2 className="font-semibold text-lg">Patient Portal</h2>
          <BiBell />
        </div>
        <div className="px-5 py-5 bg-gray-50 h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PaitentPortal;
