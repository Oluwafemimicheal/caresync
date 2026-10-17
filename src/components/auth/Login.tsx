import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-center items-center space-y-3 flex-col text-center">
        <h1 className="text-lg font-extrabold text-blue-700">CareSync</h1>
        <div className="space-y-0.5">
          <h2 className="text-2xl font-semibold">Welcome back</h2>
          <p className="text-xs text-gray-600">
            Please enter your details to sign in
          </p>
        </div>
        <div className="space-y-0.5">
          <h2 className="text-lg font-semibold">Sign in to your account</h2>
          <p className="text-xs text-gray-600">
            Access your appoinntments, records and portal tools.
          </p>
        </div>
      </div>


      <form className="space-y-3 w-90">
        <div>
          <label htmlFor="email" className="font-semibold text-sm">Email Address</label>
          <div className="p-2 border border-gray-400 rounded-lg  hover:shadow-md">
            <input type="text" placeholder="patient325@gmail.com" id="email" className="w-full" />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="font-semibold text-sm">Password</label>
          <div className="p-2 border border-gray-400 rounded-lg hover:shadow-md">
            <input type="password" placeholder="**********" id="password" className="w-full" />
          </div>
        </div>
        <button className="p-2 bg-blue-700 text-white w-full rounded-lg cursor-pointer font-semibold hover:bg-blue-600 hover:shadow-md">
          Sign in
        </button>
      </form>


      <div className="flex flex-col text-gray-700 text-sm gap-1">
        <p>
          Forget your password{" "}
          <span className="text-blue-700 hover:underline cursor-pointer">Reset it</span>
        </p>
        <p>
          New patient?{" "}
          <Link to={"/registration"} className="text-blue-700 hover:underline cursor-pointer">
            Start Registration
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
