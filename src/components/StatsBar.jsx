export default function StatsBar() {
  const stats = [
    { label: "KORBAN", value: "5.231.231", unit: "Jiwa" },
    { label: "WILAYAH", value: "27", unit: "Kabupaten" },
    { label: "BANTUAN", value: "182", unit: "TON" },
  ];

  return (
    <div className="bg-brand-dark text-white py-8 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-bottom-24 lg:w-4/5 lg:rounded-md lg:shadow-xl z-10 w-full relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-center divide-y md:divide-y-0 md:divide-x divide-gray-700">
        {stats.map((stat, index) => (
          <div key={index} className="flex-1 flex flex-col items-center py-4 md:py-0 text-center">
            <span className="text-sm font-bold text-gray-400 tracking-wider mb-1">{stat.label}</span>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl md:text-4xl font-bold">{stat.value}</span>
              <span className="text-sm font-medium text-gray-400">{stat.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
