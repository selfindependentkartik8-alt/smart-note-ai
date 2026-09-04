export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-green-500/20 pt-12 pb-8">

      <div className="mx-auto max-w-6xl px-6">

        {/* =====================================================
            RELATED TOOLS
            ===================================================== */}

        <div className="mb-12">

          <div className="mb-7 text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-400/70">
              Explore More
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              More AI Learning Tools
            </h3>

            <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-500">
              Explore more free KrishAIWorks tools designed to make
              learning, studying and productivity easier.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* AI Study Assistant */}

            <a
              href="https://aistudyassistant.krishaiworks.com/"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-green-400/[0.04]"
            >

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10 text-lg">
                🎓
              </div>

              <h4 className="font-semibold text-white transition-colors group-hover:text-green-400">
                AI Study Assistant
              </h4>

              <p className="mt-2 text-xs leading-5 text-zinc-500">
                Get AI-powered help with studying, learning and revision.
              </p>

            </a>


            {/* PDF AI Summarizer */}

            <a
              href="https://pdfaisummarizer.krishaiworks.com/"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-green-400/[0.04]"
            >

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10 text-lg">
                📄
              </div>

              <h4 className="font-semibold text-white transition-colors group-hover:text-green-400">
                PDF AI Summarizer
              </h4>

              <p className="mt-2 text-xs leading-5 text-zinc-500">
                Summarize lengthy PDF documents quickly with AI.
              </p>

            </a>


            {/* YouTube AI Summarizer */}

            <a
              href="https://youtubeaisummarizer.krishaiworks.com/"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-green-400/[0.04]"
            >

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10 text-lg">
                ▶️
              </div>

              <h4 className="font-semibold text-white transition-colors group-hover:text-green-400">
                YouTube AI Summarizer
              </h4>

              <p className="mt-2 text-xs leading-5 text-zinc-500">
                Turn YouTube videos into quick and useful summaries.
              </p>

            </a>


            {/* Word Counter & Reading Time */}

            <a
              href="https://wordcounterreadingtime.krishaiworks.com/"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-green-400/[0.04]"
            >

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10 text-lg">
                📝
              </div>

              <h4 className="font-semibold text-white transition-colors group-hover:text-green-400">
                Word Counter &amp; Reading Time
              </h4>

              <p className="mt-2 text-xs leading-5 text-zinc-500">
                Count words, characters and estimate reading time instantly.
              </p>

            </a>

          </div>

        </div>


        {/* =====================================================
            MAIN FOOTER
            ===================================================== */}

        <div className="flex flex-col items-center justify-between gap-8 border-t border-zinc-800 pt-8 md:flex-row">

          <div className="text-center md:text-left">

            <h2 className="text-2xl font-bold text-white">
              Krish<span className="text-green-400">AIWorks</span>
            </h2>

            <p className="mt-3 max-w-md text-zinc-400">
              Building modern AI tools that simplify learning,
              productivity and everyday tasks.
            </p>

          </div>


          <div className="flex items-center gap-6">

            <a
              href="https://instagram.com/krishaiworks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition hover:text-green-400"
            >
              Instagram
            </a>

            <a
              href="#"
              className="text-zinc-400 transition hover:text-green-400"
            >
              Privacy
            </a>

            <a
              href="#faq"
              className="text-zinc-400 transition hover:text-green-400"
            >
              FAQ
            </a>

          </div>

        </div>


        {/* =====================================================
            COPYRIGHT
            ===================================================== */}

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center">

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-green-400">
              KrishAIWorks
            </span>
            . All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}