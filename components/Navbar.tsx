export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-between rounded-2xl border border-green-500/20 bg-black/60 backdrop-blur-xl px-5 sm:px-6 py-4 shadow-2xl shadow-green-900/20">

        {/* Logo + Branding */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="KrishAIWorks Logo"
            className="w-11 h-11 rounded-xl object-cover border border-green-500/30"
          />

          <div>
            <h1 className="text-lg font-bold text-white leading-tight">
              KrishAIWorks
            </h1>

            <p className="text-xs text-green-400 mt-1">
              AI Solutions That Work
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-zinc-300">

          <a
            href="#"
            className="hover:text-green-400 transition"
          >
            Home
          </a>

          <a
            href="#features"
            className="hover:text-green-400 transition"
          >
            Features
          </a>

          <a
            href="#how"
            className="hover:text-green-400 transition"
          >
            How To Use
          </a>

          <a
            href="#faq"
            className="hover:text-green-400 transition"
          >
            FAQ
          </a>

          <a
            href="https://instagram.com/krishaiworks"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-green-500 hover:bg-green-400 text-black font-semibold transition"
          >
            Follow
          </a>

        </div>

      </div>
    </nav>
  );
}