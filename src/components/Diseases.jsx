import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBookMedical, FaStethoscope } from "react-icons/fa";

export default function Diseases() {
  const diseases = [
    {
      id: 1,
      name: "پنومونی (ذات‌الریه)",
      description: "عفونت ریه و راه‌های هوایی",
      icon: "🫁",
      color: "from-blue-100 to-cyan-100"
    },
    {
      id: 2,
      name: "گاستروآنتریت",
      description: "التهاب معده و روده",
      icon: "🤢",
      color: "from-green-100 to-emerald-100"
    },
    {
      id: 3,
      name: "تشنج",
      description: "اختلال در فعالیت الکتریکی مغز",
      icon: "⚡",
      color: "from-yellow-100 to-amber-100"
    },
    {
      id: 4,
      name: "دیابت و DKA",
      description: "اختلال در کنترل قند خون",
      icon: "🩸",
      color: "from-red-100 to-pink-100"
    },
    {
      id: 5,
      name: "نارسایی کلیوی (ESRD)",
      description: "اختلال در عملکرد کلیه‌ها",
      icon: "🧬",
      color: "from-purple-100 to-violet-100"
    },
    {
      id: 6,
      name: "غرق‌شدگی",
      description: "عوارض پس از غرق‌شدگی",
      icon: "🌊",
      color: "from-cyan-100 to-blue-100"
    },
    {
      id: 7,
      name: "ترومای سر",
      description: "آسیب‌های وارده به سر",
      icon: "🧠",
      color: "from-orange-100 to-red-100"
    },
    {
      id: 8,
      name: "سرطان خون",
      description: "بیماری‌های انکولوژی کودکان",
      icon: "🎗️",
      color: "from-pink-100 to-rose-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* هدر */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaBookMedical className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                آموزش بیماری‌های کودکان
              </h1>
              <p className="text-gray-600 mt-1">راهنمای کامل برای والدین</p>
            </div>
          </div>
        </div>

        {/* لیست بیماری‌ها */}
        <div className="grid gap-4">
          {diseases.map((disease) => (
            <Link
              key={disease.id}
              to={`/disease/${disease.id}`}
              className="block group"
            >
              <div className={`bg-gradient-to-r ${disease.color} rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300 transform group-hover:scale-[1.02]`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{disease.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{disease.name}</h3>
                      <p className="text-gray-600 text-sm">{disease.description}</p>
                    </div>
                  </div>
                  <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                    <FaStethoscope size={20} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* دکمه بازگشت */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            بازگشت به صفحه اصلی
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}