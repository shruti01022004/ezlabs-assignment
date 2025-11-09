export default function Navbar() {
  return (
    <nav className="bg-black/70 backdrop-blur-sm fixed top-0 w-full z-20 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-widest text-blue-400 hover:text-blue-600 transition"
        >
          🚀 EZ Labs
        </a>

        {/* Links */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold justify-end">
          <a href="#home" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#team" className="relative group">
            Team
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#services" className="relative group">
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#portfolio" className="relative group">
            Portfolio
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
