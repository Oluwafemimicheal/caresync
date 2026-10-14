import { Link } from "react-router-dom";
import heroPic from "../../assets/image/hero-pic.jpg";

const Hero = () => {
  return (
    <div className="">
      <div className="w-full px-5 lg:px-0 lg:w-6xl mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center h-screen gap-20">
        <div className="space-y-5">
          <div className="w-max bg-blue-100 text-blue-700 rounded-2xl text-xs px-2 py-0.5 font-semibold shadow">
            Trusted by millions of patience
          </div>
          <h1 className="text-5xl lg:text-6xl font-semibold">
            Healthcare at Your <br className="hidden lg:block" />
            <span className="text-blue-700">Fingretips</span>
          </h1>
          <p className="lg:w-140">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, dicta repellat. Doloremque soluta mollitia dicta natus,
            libero similique odit illo vero saepe, architecto esse, porro
            dolorem sunt assumenda iure sit!
          </p>

          <div className="my-14 flex flex-wrap justify-center lg:justify-start gap-5 ">
            <Link
              to={"/login"}
              className="bg-blue-700 text-white shadow px-5 py-2 rounded-md font-semibold hover:shadow-lg"
            >
              Book Appointment
            </Link>
            <Link
              to={"/login"}
              className="bg-white text-gray-800 shadow px-5 py-2 rounded-md font-semibold hover:shadow-lg"
            >
              join with HMO
            </Link>
          </div>
          <div className="hidden lg:grid grid-cols-3 w-max gap-5 pt-10">
            <div>
              <h1 className="font-bold text-2xl">24/7</h1>
              <p>Online Support</p>
            </div>
            <div>
              <h1 className="font-bold text-2xl">1M+</h1>
              <p>Successful Visits</p>
            </div>
            <div>
              <h1 className="font-bold text-2xl">98%</h1>
              <p>Patient Satification</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-full h-90 bg-blue-700 rounded-2xl overflow-hidden shadow">
          <img src={heroPic} alt="Docto image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
