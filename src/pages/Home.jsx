import { Link } from "react-router-dom";
// import { diseases } from "../utils/diseases";
import { 
  FaBaby, 
  FaPills, 
  FaLungs,
  
  FaBookMedical 
} from "react-icons/fa";

export default function Home() {
  const mainItems = [
    {
      to: "/diseases",
      icon: <FaBookMedical size={28} />,
      title: "بیماران",
      description: "آموزش به والدین برای بیماری‌های مختلف",
      color: "from-blue-500 to-blue-600"
    },
    {
      to: "/breastfeeding",
      icon: <FaBaby size={28} />,
      title: "آموزش شیردهی",
      description: "راهنمای کامل شیردهی به نوزاد",
      color: "from-pink-500 to-pink-600"
    },
    {
      to: "/acetaminophen",
      icon: <FaPills size={28} />,
      title: "محاسبه استامینوفن",
      description: "محاسبه دوز دقیق استامینوفن برای کودکان",
      color: "from-green-500 to-green-600"
    },
    {
      to: "/tracheostomy",
      icon: <FaLungs size={28} />,
      title: "مراقبت از تراکئوستومی",
      description: "آموزش مراقبت‌های بیماران تراکئوستومی",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* هدر صفحه */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            سامانه آموزشی مراقبت از کودک
          </h1>
          <p className="text-gray-600">
            راهنمای جامع برای والدین 
          </p>
        </div>

        {/* کارت‌های اصلی */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {mainItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="block group"
            >
              <div className={`bg-gradient-to-r ${item.color} text-white rounded-xl shadow-lg p-6 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl h-full`}>
                <div className="flex items-center gap-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <h2 className="text-xl font-bold mb-1">{item.title}</h2>
                    <p className="text-white text-opacity-90 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* بخش بیماری‌ها */}
        {/* <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <FaHome className="text-blue-500" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">آموزش به والدین بعد از ترخیص</h2>
          </div>
          
          <div className="grid gap-4">
            {diseases.map((disease) => (
              <Link
                key={disease.id}
                to={`/disease/${disease.id}`}
                className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-200 border border-gray-200 hover:border-blue-300"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{disease.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{disease.description}</p>
                  </div>
                  <div className="text-blue-500 transform group-hover:translate-x-1 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}