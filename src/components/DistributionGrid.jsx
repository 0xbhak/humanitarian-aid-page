import { Link } from 'react-router-dom';

export default function DistributionGrid() {
  const cards = [
    { value: "17.800", label: "Jiwa", icon: "blue" },
    { value: "2.500", label: "Paket", icon: "green" },
    { value: "85", label: "Korban", icon: "red" },
    { value: "3", label: "Kerusakan", icon: "orange" },
    { value: "Rp 12,4", label: "Miliar", icon: "purple" },
    { value: "45", label: "Titik", icon: "teal" },
    { value: "8", label: "Tim Medis", icon: "pink" },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold font-serif text-center mb-10 text-gray-800">Informasi Sebaran Bantuan</h2>

        {/* Using CSS Grid for the irregular layout */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {/* Row 1 */}
          <div className="col-span-1 md:col-span-3 bg-white p-6 rounded-lg shadow-sm text-center">
             <span className="block text-2xl md:text-3xl font-bold text-blue-600 mb-1">17.800</span>
             <span className="text-sm text-gray-500 font-medium">Jiwa</span>
          </div>
          <div className="col-span-1 md:col-span-3 bg-white p-6 rounded-lg shadow-sm text-center">
             <span className="block text-2xl md:text-3xl font-bold text-green-600 mb-1">2.500</span>
             <span className="text-sm text-gray-500 font-medium">Paket</span>
          </div>

          {/* Row 2 */}
          <div className="col-span-2 md:col-span-2 bg-white p-6 rounded-lg shadow-sm text-center">
             <span className="block text-2xl md:text-3xl font-bold text-red-600 mb-1">85</span>
             <span className="text-sm text-gray-500 font-medium">Korban</span>
          </div>
          <div className="col-span-2 md:col-span-2 bg-white p-6 rounded-lg shadow-sm text-center">
             <span className="block text-2xl md:text-3xl font-bold text-orange-600 mb-1">3</span>
             <span className="text-sm text-gray-500 font-medium">Kerusakan</span>
          </div>
           <div className="col-span-2 md:col-span-2 bg-white p-6 rounded-lg shadow-sm text-center">
             <span className="block text-2xl md:text-3xl font-bold text-purple-600 mb-1">Rp 12,4</span>
             <span className="text-sm text-gray-500 font-medium">Miliar</span>
          </div>

           {/* Row 3 */}
          <div className="col-span-1 md:col-span-3 bg-white p-6 rounded-lg shadow-sm text-center">
             <span className="block text-2xl md:text-3xl font-bold text-teal-600 mb-1">45</span>
             <span className="text-sm text-gray-500 font-medium">Titik</span>
          </div>
          <div className="col-span-1 md:col-span-3 bg-white p-6 rounded-lg shadow-sm text-center">
             <span className="block text-2xl md:text-3xl font-bold text-pink-600 mb-1">8</span>
             <span className="text-sm text-gray-500 font-medium">Tim Medis</span>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/report" className="inline-block bg-white border hover:bg-gray-50 text-gray-700 font-semibold py-2.5 px-8 rounded shadow-sm transition-colors text-sm uppercase tracking-wider">
            Laporan
          </Link>
        </div>
      </div>
    </div>
  );
}
