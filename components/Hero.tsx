export default function Hero() {
  return (
    <section className="text-center py-20">

      <div className="flex flex-col items-center">

        <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm text-green-400">
          🚀 Powered by Gemini AI
        </span>

        <p className="mt-3 text-sm text-zinc-500">
          Built by{" "}
          <span className="font-semibold text-green-400">
            KrishAIWorks
          </span>
        </p>

      </div>

      <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">

        <span className="text-white">
          Smart
        </span>

        <span className="text-green-400">
          {" "}Notes AI
        </span>

      </h1>

      <p className="mt-8 max-w-3xl mx-auto text-zinc-400 text-lg leading-8">
        Turn long PDFs into clean, structured study notes in seconds.

        Generate chapter-wise notes, key points, important questions,

        quick revision notes and much more with AI.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <div className="rounded-xl border border-green-500/20 bg-zinc-900/60 px-5 py-3 text-zinc-300">
          📚 Smart Notes
        </div>

        <div className="rounded-xl border border-green-500/20 bg-zinc-900/60 px-5 py-3 text-zinc-300">
          ⚡ AI Powered
        </div>

        <div className="rounded-xl border border-green-500/20 bg-zinc-900/60 px-5 py-3 text-zinc-300">
          🎯 Exam Ready
        </div>

      </div>

    </section>
  );
}