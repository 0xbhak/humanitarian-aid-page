import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TableSection = ({ title, columns, data }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8 overflow-hidden">
    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
      <h3 className="text-lg font-bold text-gray-800 font-serif">{title}</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-600">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="px-6 py-3 font-semibold">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} className="bg-white border-b hover:bg-gray-50 transition-colors">
               {columns.map((_, colIdx) => (
                 <td key={colIdx} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                   {row[colIdx] || "-"}
                 </td>
               ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function ReportPage() {
  // Dummy Data Generators
  const generateData = (rows, cols, prefix) => {
    return Array.from({ length: rows }, (_, r) => 
        Array.from({ length: cols }, (_, c) => `${prefix} Data ${r + 1}-${c + 1}`)
    );
  };

  // 1. Wilayah Penyaluran (5 row, 3 column)
  const wilayahData = [
    ["Aceh Utara", "Kec. Lhoksukon", "Siaga 1"],
    ["Aceh Timur", "Kec. Idi Rayeuk", "Siaga 2"],
    ["Aceh Tamiang", "Kec. Karang Baru", "Waspada"],
    ["Bireuen", "Kec. Pandrah", "Normal"],
    ["Lhokseumawe", "Kec. Banda Sakti", "Pemulihan"]
  ];

  // 2. Bantuan yang disalurkan (10 row, 5 column)
  const bantuanData = generateData(10, 5, "Bantuan");

  // 3. Kerusakan Fasilitas Umum (10 row, 5 column)
  const kerusakanData = generateData(10, 5, "Fasilitas");

  // 4. Daftar Korban Jiwa (30 row, 4 column) - Showing subset for brevity in code, but UI handles scroll
  const korbanData = Array.from({ length: 30 }, (_, i) => [
      `${i + 1}`, `Nama Korban ${i + 1}`, `Desa ${i % 5 + 1}`, "Luka Ringan"
  ]);

  // 5. Informasi Lainnya (10 row, 5 column)
  const infoData = generateData(10, 5, "Info");

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
            <div>
                 <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-brand-red mb-2 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Kembali ke Beranda
                </Link>
                <h1 className="text-3xl font-bold text-gray-900 font-serif">Laporan Situasi Terkini</h1>
                <p className="text-gray-500">Dashboard data real-time penanganan bencana banjir Aceh 2025.</p>
            </div>
            <div className="hidden md:block">
                 <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded border border-green-400">
                    Live Updated
                 </span>
            </div>
        </div>

        {/* Tables */}
        <TableSection 
            title="1. Wilayah Penyaluran" 
            columns={["Kabupaten/Kota", "Kecamatan", "Status"]} 
            data={wilayahData} 
        />
        
        <TableSection 
            title="2. Bantuan Yang Disalurkan" 
            columns={["Jenis Bantuan", "Jumlah", "Satuan", "Target Penerima", "Tanggal Distribusi"]} 
            data={bantuanData} 
        />

        <TableSection 
            title="3. Kerusakan Fasilitas Umum" 
            columns={["Jenis Fasilitas", "Lokasi", "Tingkat Kerusakan", "Estimasi Biaya", "Status Perbaikan"]} 
            data={kerusakanData} 
        />
        
        {/* Scrollable container for long table */}
        <div className="max-h-[500px] overflow-y-auto border border-gray-200 rounded-xl mb-8 custom-scrollbar shadow-sm">
             <TableSection 
                title="4. Daftar Korban Jiwa (30 Data)" 
                columns={["No", "Nama", "Lokasi", "Kondisi"]} 
                data={korbanData} 
            />
        </div>

        <TableSection 
            title="5. Informasi Lainnya" 
            columns={["Kategori", "Deskripsi", "Sumber", "Validasi", "Catatan"]} 
            data={infoData} 
        />

      </div>

      <Footer />
    </div>
  );
}
