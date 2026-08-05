export default function HowToUse() {
  const steps = [
    {
      icon: "📤",
      title: "Upload PDF",
      desc: "Upload your study material with a single click.",
    },
    {
      icon: "🤖",
      title: "AI Analysis",
      desc: "Gemini AI reads and understands your document.",
    },
    {
      icon: "📚",
      title: "Get Smart Notes",
      desc: "Receive clean, structured and exam-ready notes instantly.",
    },
  ];

  return (
    <section
      id="how-to-use"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <div className="text-center">

        <span className="text-green-400 font-semibold uppercase tracking-widest">
          How It Works
        </span>

        <h2 className="text-5xl font-bold text-white mt-4">
          Get Notes in{" "}
          <span className="text-green-400">3 Easy Steps</span>
        </h2>

      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        {steps.map((step, index) => (

          <div
            key={index}
            className="relative rounded-3xl border border-green-500/20 bg-zinc-900/70 p-8 backdrop-blur-xl text-center hover:border-green-400 transition-all duration-300"
          >

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center font-bold">
              {index + 1}
            </div>

            <div className="text-5xl mt-6">
              {step.icon}
            </div>

            <h3 className="text-2xl font-bold text-white mt-6">
              {step.title}
            </h3>

            <p className="text-zinc-400 mt-4 leading-7">
              {step.desc}
            </p>

          </div>

        ))}

      </div>
    </section>
  );
}