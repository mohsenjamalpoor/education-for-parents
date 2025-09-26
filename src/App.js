import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AcetaminophenCalculator from "./pages/AcetaminophenCalculator";
import DiseaseDetail from "./pages/DiseasseDitail";
 
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-purple-100 flex flex-col items-center">
        <div className="bg-white rounded-3xl shadow-lg mt-10 w-full max-w-5xl">
          <Navbar />
 
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/disease/:id" element={<DiseaseDetail />} />
              <Route path="/acetaminophen" element={<AcetaminophenCalculator />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
 
export default App;
 