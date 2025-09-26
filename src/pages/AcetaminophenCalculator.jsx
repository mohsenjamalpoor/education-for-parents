import { useState } from "react";
 
export default function AcetaminophenCalculator() {
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);
 
  const calculateDose = () => {
    if (!weight || isNaN(weight)) {
      alert("لطفا وزن کودک را وارد کنید");
      return;
    }
    const dropDose = 2 * weight;   // قطره = دو برابر وزن
    const syrupDose = 0.5 * weight; // شربت = نصف وزن
    setResult({ dropDose, syrupDose });
  };
 
  return (
    <div className="bg-gray-50 shadow-md rounded-xl p-6">
      <h2 className="text-lg font-bold mb-4 text-center">محاسبه دوز استامینوفن</h2>
      <div className="flex gap-4">
        <input
          type="number"
          placeholder="وزن کودک (کیلوگرم)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          onClick={calculateDose}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
        >
          محاسبه
        </button>
      </div>
 
      {result && (
        <div className="mt-4 text-center">
          <p>💧 قطره: <b>{result.dropDose} قطره</b></p>
          <p className="mt-2">🧴 شربت: <b>{result.syrupDose} سی‌سی</b></p>
        </div>
      )}
    </div>
  );
}
 