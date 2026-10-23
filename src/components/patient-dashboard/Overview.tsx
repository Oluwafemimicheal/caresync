import { FaStickyNote } from "react-icons/fa";
import { FaNotesMedical } from "react-icons/fa6";

const cardData = [
  {
    title: "Total Consultation",
    total: 6,
    icon: <FaStickyNote />,
    color: "white"
  },
  {
    title: "Total Appointment",
    total: 2,
    icon: <FaNotesMedical />,
    color: "white"
  },
  {
    title: "Upcoming Apponitment",
    total: 0,
    icon: null,
    color: "blue"
  },
];


const Overview = () => {
  const cardStyle = {
    backgroundColor: cardData[2].color
  }


  return (
    <div className="w-250 mx-auto space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Welcome, Oluwafemi</h1>
          <div className="text-gray-600">
            <p>Here's what's happening with your health today.</p>
            <small className="text-sm">
              Patient: <span>Oluwafem Michael</span>
            </small>
          </div>
        </div>

        <div>
          <button className="bg-blue-700 text-white shadow px-5 py-2 rounded-md font-semibold hover:shadow-lg">
            + Book Appointment
          </button>
        </div>
      </div>


      <div className="grid grid-cols-3 gap-5 h-40 overflow-hidden">

        {
          cardData.map((card, index) => (
            <div key={index} style={cardStyle}>
              {card.title}
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default Overview;
