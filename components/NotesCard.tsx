export default function NotesCard() {
  return (
    <section className="max-w-5xl mx-auto mt-10">

      <div className="rounded-3xl border border-green-500/20 bg-zinc-900/70 backdrop-blur-xl p-8 shadow-2xl shadow-green-900/20">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold text-white">
              📚 Smart Notes
            </h2>

            <p className="mt-2 text-zinc-400">
              Generated using Gemini AI
            </p>

          </div>

          <span className="rounded-full bg-green-500/20 border border-green-500/30 px-4 py-2 text-green-300 text-sm">
            Ready
          </span>

        </div>

        <div className="mt-8 rounded-2xl bg-zinc-800/60 p-6">

          <h3 className="text-xl font-semibold text-green-300">
            📝 Chapter Summary
          </h3>

          <p className="mt-4 text-zinc-300 leading-8">
            Your AI generated notes will appear here.
            The summary will be structured chapter-wise for easy revision.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div className="rounded-2xl bg-zinc-800/70 p-5 border border-zinc-700">
            <h4 className="text-green-300 font-semibold">
              ⭐ Key Points
            </h4>

            <p className="mt-3 text-zinc-400 text-sm">
              Important concepts extracted from the document.
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-800/70 p-5 border border-zinc-700">
            <h4 className="text-green-300 font-semibold">
              ❓ Important Questions
            </h4>

            <p className="mt-3 text-zinc-400 text-sm">
              AI generated revision questions.
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-800/70 p-5 border border-zinc-700">
            <h4 className="text-green-300 font-semibold">
              ⚡ Quick Revision
            </h4>

            <p className="mt-3 text-zinc-400 text-sm">
              One-minute revision notes.
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-800/70 p-5 border border-zinc-700">
            <h4 className="text-green-300 font-semibold">
              🎯 Final Takeaways
            </h4>

            <p className="mt-3 text-zinc-400 text-sm">
              Main conclusions from the PDF.
            </p>
          </div>

        </div>

        <div className="flex flex-wrap gap-4 mt-10">

          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold transition">
            📋 Copy Notes
          </button>

          <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-xl font-semibold transition">
            ⬇ Download
          </button>

          <button className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-6 py-3 rounded-xl font-semibold transition">
            🔄 New PDF
          </button>

        </div>

      </div>

    </section>
  );
}
