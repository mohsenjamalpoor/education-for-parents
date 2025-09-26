import { useParams, Link } from "react-router-dom";
import { diseases } from "../utils/diseases";

 
export default function DiseaseDetail() {
  const { id } = useParams();
  const disease = diseases.find((d) => d.id === parseInt(id));
 
  if (!disease) return <p className="p-6">بیماری یافت نشد</p>;
 
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{disease.name}</h1>
      <p className="mb-4 text-gray-700">{disease.description}</p>
 
      <h2 className="text-lg font-semibold mb-2">توصیه‌ها:</h2>
      <ul className="list-disc pl-6 space-y-2">
        {disease.instructions.map((item, index) => (
          <li key={index} className="text-gray-800">{item}</li>
        ))}
      </ul>
 
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        بازگشت
      </Link>
    </div>
  );
}