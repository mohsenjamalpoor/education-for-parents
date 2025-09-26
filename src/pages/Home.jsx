import { Link } from "react-router-dom";
import { diseases } from "../utils/diseases";

 
export default function Home() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">آموزش به والدین بعد از ترخیص</h1>
      <div className="grid gap-4">
        {diseases.map((disease) => (
          <Link
            key={disease.id}
            to={`/disease/${disease.id}`}
            className="block p-4 bg-white shadow-md rounded-lg hover:bg-blue-50 transition"
          >
            <h2 className="text-xl font-semibold">{disease.name}</h2>
            <p className="text-gray-600">{disease.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
 