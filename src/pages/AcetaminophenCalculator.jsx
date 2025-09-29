import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPills, FaExclamationTriangle } from "react-icons/fa";

export default function AcetaminophenCalculator() {
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateDose = () => {
    if (!weight || weight <= 0) {
      alert("لطفاً وزن کودک را وارد کنید");
      return;
    }

    const weightNum = parseFloat(weight);
    
    // محاسبات ساده
    const dropDose = 2 * weightNum;   // قطره = دو برابر وزن
    const syrupDose = 0.5 * weightNum; // شربت = نصف وزن

    setResult({ 
      dropDose: dropDose.toFixed(0), 
      syrupDose: syrupDose.toFixed(1)
    });
  };

  const clearForm = () => {
    setWeight("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-4">
      <div className="max-w-2xl mx-auto">
        
        {/* هدر */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <FaPills className="text-green-600" size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                محاسبه دوز استامینوفن
              </h1>
              <p className="text-gray-600 mt-1">محاسبه دوز قطره و شربت کودکان</p>
            </div>
          </div>
        </div>

        {/* ماشین حساب */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="grid gap-4">
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                وزن کودک (کیلوگرم)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="مثال: 10"
                min="0"
                step="0.1"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={calculateDose}
                className="flex-1 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                محاسبه
              </button>
              <button
                onClick={clearForm}
                className="flex-1 bg-gray-300 text-gray-700 p-3 rounded-lg hover:bg-gray-400 transition-colors font-medium"
              >
                پاک کردن
              </button>
            </div>
          </div>

          {/* نتیجه */}
          {result && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-bold text-green-800 mb-3 text-center">نتیجه محاسبه:</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">💧</div>
                  <p className="text-sm text-gray-600">قطره استامینوفن</p>
                  <p className="text-xl font-bold text-green-700 mt-2">{result.dropDose} قطره</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">🧴</div>
                  <p className="text-sm text-gray-600">شربت استامینوفن</p>
                  <p className="text-xl font-bold text-green-700 mt-2">{result.syrupDose} سی‌سی</p>
                </div>
              </div>
            </div>
          )}

          {/* هشدار */}
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-center gap-2 text-yellow-800 mb-2">
              <FaExclamationTriangle />
              <span className="font-medium">توجه مهم:</span>
            </div>
            <p className="text-yellow-700 text-sm">
              • هر 4-6 ساعت یکبار قابل مصرف است<br/>
              • حداکثر 4 نوبت در 24 ساعت<br/>
              • قبل از مصرف با پزشک مشورت کنید
            </p>
          </div>
        </div>

        {/* دکمه بازگشت */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            بازگشت به صفحه اصلی
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}