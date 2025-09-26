import { Link } from "react-router-dom";
 
export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-t-3xl p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">آموزش به والدین</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-yellow-200">خانه</Link>
        <Link to="/acetaminophen" className="hover:text-yellow-200">محاسبه استامینوفن</Link>
      </div>
    </nav>
  );
}