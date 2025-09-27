import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaLungs, FaHandHoldingWater, FaShieldAlt } from "react-icons/fa";

export default function Tracheostomy() {
  const careSections = [
    {
      icon: <FaShieldAlt className="text-purple-500" size={24} />,
      title: "مراقبت‌های ایمنی",
      items: [
        "همیشه یک کانولای یدکی در دسترس داشته باشید",
        "از قرار گرفتن در معرض دود و گردوغبار خودداری کنید",
        "از ورزش‌های آبی و شنا پرهیز کنید",
        "همراه بیمار یک کارت شناسایی تراکئوستومی حمل شود"
      ]
    },
    {
      icon: <FaHandHoldingWater className="text-blue-500" size={24} />,
      title: "مراقبت‌های روزانه",
      items: [
        "تمیز کردن داخلی کانولا هر 8-4 ساعت",
        "تعویض پانسمان روزانه یا هنگام خیس شدن",
        "مرطوب‌سازی هوای تنفسی با استفاده از مرطوب‌کننده",
        "ساکشن ترشحات بر اساس نیاز بیمار"
      ]
    },
    {
      icon: <FaLungs className="text-green-500" size={24} />,
      title: "مراقبت‌های تنفسی",
      items: [
        "بررسی صداهای تنفسی و علائم دیسترس",
        "مراقبت از پوست اطراف استوما",
        "فیزیوتراپی تنفسی منظم",
        "شناسایی علائم عفونت (قرمزی، ترشح، تب)"
      ]
    },
    {
      title: "اورژانس‌ها",
      items: [
        "خارج کردن کانولا در صورت انسداد و جایگزینی فوری",
        "در صورت عدم توانایی در جایگزینی، با اورژانس تماس بگیرید",
        "علائم هشدار: سیانوز، استریدور، دیسترس تنفسی",
        "همیشه شماره تماس پزشک معالج در دسترس باشد"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* هدر */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <FaLungs className="text-purple-600" size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                مراقبت از بیماران تراکئوستومی
              </h1>
              <p className="text-gray-600 mt-1">راهنمای جامع مراقبت در منزل</p>
            </div>
          </div>
        </div>

        {/* محتوای آموزشی */}
        <div className="grid gap-6">
          {careSections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>
              </div>
              <div className="grid gap-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-1">
                      {itemIndex + 1}
                    </span>
                    <span className="text-gray-700 leading-7">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* نکات مهم */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mt-6">
          <h3 className="font-bold text-yellow-800 mb-3">⚠️ نکات حیاتی:</h3>
          <div className="space-y-2 text-yellow-700">
            <p>• هرگز بیمار را با تراکئوستومی تنها نگذارید</p>
            <p>• همیشه تجهیزات اورژانس در دسترس باشد</p>
            <p>• آموزش کامل به تمام اعضای خانواده ضروری است</p>
            <p>• ویزیت‌های منظم با پزشک متخصص داشته باشید</p>
          </div>
        </div>

        {/* دکمه بازگشت */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
          >
            بازگشت به صفحه اصلی
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}