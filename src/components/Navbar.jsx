import { Menu, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-red-600 text-white shadow-md">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold font-serif tracking-tight">Save the Children</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 bg-white/10 rounded-full px-2 py-1 backdrop-blur-sm">
          <a href="#" className="px-4 py-1.5 text-sm font-semibold rounded-full bg-white text-red-600">HOME</a>
          <a href="#" className="px-4 py-1.5 text-sm font-semibold hover:bg-white/10 rounded-full transition-colors">SIGN IN</a>
          
          <div className="h-6 w-px bg-white/30 mx-2"></div>
          
          <button className="p-2 hover:bg-white/10 rounded-full transition">
             <div className="w-5 h-5 flex flex-col justify-center items-center space-y-1">
                 {/* Flag placeholder: ID Flag (Red/White) */}
                 <div className="w-5 h-3 border border-white/50 bg-red-600 relative overflow-hidden">
                    <div className="absolute inset-x-0 bottom-0 h-1.5 bg-white"></div>
                 </div>
             </div>
          </button>
           <button className="p-2 hover:bg-white/10 rounded-full transition">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
            <button className="p-2">
                <Menu className="w-6 h-6" />
            </button>
        </div>
      </div>
    </nav>
  );
}
