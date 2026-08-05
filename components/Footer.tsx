export default function Footer() {
  return (
    <footer className="mt-24 border-t border-green-500/20 pt-12 pb-8">

      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="text-center md:text-left">

            <h2 className="text-2xl font-bold text-white">
              Krish<span className="text-green-400">AIWorks</span>
            </h2>

            <p className="mt-3 text-zinc-400 max-w-md">
              Building modern AI tools that simplify learning,
              productivity and everyday tasks.
            </p>

          </div>

          <div className="flex items-center gap-6">

            <a
              href="https://instagram.com/krishaiworks"
              target="_blank"
              className="text-zinc-400 hover:text-green-400 transition"
            >
              Instagram
            </a>

            <a
              href="#"
              className="text-zinc-400 hover:text-green-400 transition"
            >
              Privacy
            </a>

            <a
              href="#faq"
              className="text-zinc-400 hover:text-green-400 transition"
            >
              FAQ
            </a>

          </div>

        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center">

          <p className="text-zinc-500 text-sm">
            © 2026 <span className="text-green-400 font-medium">KrishAIWorks</span>.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}