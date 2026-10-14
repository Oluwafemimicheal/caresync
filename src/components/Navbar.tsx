import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow py-4 sticky top-0">
      <nav className="w-full px-10 lg:px-0 lg:w-6xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="font-bold text-blue-700 text-2xl">CareSync</h1>
        </div>
        <div className="flex items-center gap-8">
          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">How it work</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <Link
            to={"/login"}
            className="bg-blue-700 text-white shadow px-5 py-1.5 rounded-md font-semibold"
          >
            Log In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
