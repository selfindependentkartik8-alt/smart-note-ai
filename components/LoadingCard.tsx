export default function LoadingCard() {
  return (
    <section className="max-w-4xl mx-auto mt-10">

      <div className="rounded-3xl border border-green-500/20 bg-zinc-900/70 backdrop-blur-xl p-10">

        <div className="flex flex-col items-center">

          <div className="w-20 h-20 rounded-full border-4 border-green-500 border-t-transparent animate-spin"></div>

          <h2 className="mt-8 text-3xl font-bold text-white">
            AI is Creating Smart Notes...
          </h2>

          <p className="mt-3 text-zinc-400">
            Please wait while Gemini analyzes your study material.
          </p>

          <div className="mt-8 w-full bg-zinc-800 rounded-full h-3 overflow-hidden">

            <div className="h-full w-2/3 bg-gradient-to-r from-green-500 to-emerald-300 animate-pulse rounded-full"></div>

          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-10 w-full">

            <div className="rounded-2xl bg-zinc-800/70 p-5 border border-zinc-700">
              📚 Reading PDF...
            </div>

            <div className="rounded-2xl bg-zinc-800/70 p-5 border border-zinc-700">
              🧠 Finding Key Concepts...
            </div>

            <div className="rounded-2xl bg-zinc-800/70 p-5 border border-zinc-700">
              ✨ Preparing Smart Notes...
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
