export default function Mission() {
  return (
    <div className="bg-white pt-10 pb-16 px-4 md:pt-32"> {/* Large top padding to account for floating StatsBar */}
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-brand-red font-bold tracking-widest text-sm uppercase mb-4">Misi Kemanusiaan</h2>
        
        <blockquote className="font-serif text-2xl md:text-3xl text-gray-900 leading-relaxed italic mb-8">
          "Save the Children percaya bahwa setiap anak berhak atas masa depan yang cerah, sehat, dan terlindungi."
        </blockquote>
        
        <div className="text-gray-600 space-y-4 leading-relaxed text-justify md:text-center">
            <p>
                Kami bekerja keras di 27 kabupaten untuk memastikan bantuan tersalurkan kepada mereka yang paling membutuhkan.
                Dengan dukungan anda, kami telah menjangkau lebih dari 5 juta jiwa yang terdampak bencana.
            </p>
            <p>
                Melalui program kesehatan, pendidikan, dan perlindungan anak, kami membangun kembali harapan dan
                menciptakan perubahan yang berkelanjutan bagi komunitas yang rentan.
            </p>
        </div>
      </div>
    </div>
  );
}
