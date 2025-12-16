import { ArrowRight } from 'lucide-react';

export default function NewsFeed() {
  const newsItems = [
    {
      id: 1,
      category: "Program Response",
      date: "01 Januari 2025",
      title: "RESPONS BANJIR DAN LONGSOR PADANG PARIAMAN",
      excerpt: "Save the Children telah mendistribusikan bantuan awal kepada 500 keluarga yang terdampak...",
      image: "bg-gray-300"
    },
    {
       id: 2,
       category: "Program Response",
       date: "28 Desember 2024",
       title: "BANTUAN PENDIDIKAN UNTUK ANAK-ANAK TERDAMPAK GEMPA",
       excerpt: "Kami mendirikan tenda belajar darurat untuk memastikan anak-anak tetap bisa bersekolah...",
       image: "bg-gray-400"
    },
    {
       id: 3,
       category: "Press Release",
       date: "20 Desember 2024",
       title: "COLLABORATION FOR SUSTAINABLE DEVELOPMENT",
       excerpt: "Kerjasama strategis baru untuk memperluas jangkauan program kesehatan ibu dan anak...",
       image: "bg-gray-500"
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold font-serif mb-10 text-gray-800 border-l-4 border-red-600 pl-4">
          Informasi Terkini
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="flex flex-col group cursor-pointer">
              <div className={`h-48 w-full ${item.image} mb-4 rounded overflow-hidden relative`}>
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="flex items-center text-xs text-gray-500 font-semibold uppercase space-x-2 mb-2">
                <span>{item.date}</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className="text-brand-red">{item.category}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3 group-hover:text-brand-red transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {item.excerpt}
              </p>
              <div className="mt-auto pt-2">
                 <span className="text-brand-red font-bold text-sm flex items-center group-hover:underline">
                    SELENGKAPNYA <ArrowRight className="w-4 h-4 ml-1" />
                 </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <button className="text-gray-500 font-bold text-sm tracking-widest hover:text-gray-800 transition-colors">
                LIHAT SEMUA BERITA
            </button>
        </div>
      </div>
    </div>
  );
}
