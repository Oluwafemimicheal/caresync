import { NavLink } from "react-router-dom";
import ProjectLogo from "../../utilis/ProjectLogo";

const urlLinks = [
  {
    title: "Overview",
    url: "/overview",
  },
  {
    title: "Book Appointment",
    url: "/book-appointment",
  },
  {
    title: "Appointment",
    url: "/appointment",
  },
  {
    title: "Health Records",
    url: "/health-records",
  },
  {
    title: "Payments",
    url: "/payments",
  },
];

const PatientSidebar = () => {
  return (
    <div className="space-y-5">
      <div>
        <ProjectLogo />
      </div>

      <ul className="space-y-2">
        {urlLinks.map((url, index) => (
          <li key={index} className="w-full">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border p-2 border-blue-700 w-full block rounded-2xl"
                  : "border border-transparent p-2 w-full block "
              }
              to={url.url}
            >
              {url.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientSidebar;
