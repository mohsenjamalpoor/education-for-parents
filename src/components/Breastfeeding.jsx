import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBaby, FaCheckCircle } from "react-icons/fa"; // FaCheckCircle اضافه شد

export default function Breastfeeding() {
  const breastfeedingTips = [
    {
      title: "روش صحیح شیردهی",
      items: [
        "وضعیت صحیح بدن مادر و نوزاد حین شیردهی",
        "علائم گرسنگی نوزاد را بشناسید",
        "تکنیک‌های مختلف شیردهی (گهواره‌ای، فوتبالی و ...)",
        "نحوه صحیح قرار دادن نوزاد روی پستان"
      ]
    },
    {
      title: "مشکلات شایع شیردهی",
      items: [
        "درمان شقاق و درد نوک پستان",
        "پیشگیری و درمان احتقان پستان",
        "روش‌های افزایش شیر مادر",
        "برخورد با نفخ و کولیک نوزاد"
      ]
    },
    {
      title: "تغذیه مادر شیرده",
      items: [
        "مواد غذایی افزایش‌دهنده شیر",
        "مواد غذایی نفاخ و ممنوعه",
        "میزان آب مورد نیاز مادر شیرده",
        "ویتامین‌ها و مکمل‌های ضروری"
      ]
    },
    {
      title: "شیردهی در شرایط خاص",
      items: [
        "شیردهی به نوزاد نارس",
        "شیردهی در زمان بیماری مادر",
        "شیردهی و مصرف داروها",
        "شیردهی به دوقلوها"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* هدر */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-pink-100 p-3 rounded-full">
              <FaBaby className="text-pink-600" size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                آموزش کامل شیردهی
              </h1>
              <p className="text-gray-600 mt-1">راهنمای جامع برای مادران شیرده</p>
            </div>
          </div>
        </div>

        {/* محتوای آموزشی */}
        <div className="grid gap-6">
          {breastfeedingTips.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-pink-500" />
                {section.title}
              </h2>
              <div className="grid gap-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg">
                    <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-1">
                      {itemIndex + 1}
                    </span>
                    <span className="text-gray-700 leading-7">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* دکمه بازگشت */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors"
          >
            بازگشت به صفحه اصلی
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}