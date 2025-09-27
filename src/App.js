import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AcetaminophenCalculator from "./pages/AcetaminophenCalculator";
import Breastfeeding from "./components/Breastfeeding";
import Tracheostomy from "./components/Tracheostomy";
import Diseases from "./components/Diseases";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-purple-100 flex flex-col items-center">
        <div className="bg-white rounded-3xl shadow-lg mt-10 w-full max-w-5xl">
          <Navbar />
 
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/acetaminophen" element={<AcetaminophenCalculator />} />
              <Route path="/breastfeeding" element={<Breastfeeding />} />
              <Route path="/tracheostomy" element={<Tracheostomy />} />
              <Route path="/diseases" element={<Diseases />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;