export default function WhyChoose() {
  const features = [
    {
      icon: "🧠",
      title: "AI Generated Notes",
      desc: "Create smart and structured study notes in seconds using Gemini AI.",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Generate detailed notes instantly without wasting hours reading PDFs.",
    },
    {
      icon: "📚",
      title: "Chapter-wise Notes",
      desc: "Automatically organize notes into clean chapters for better learning.",
    },
    {
      icon: "🎯",
      title: "Exam Ready",
      desc: "Important questions, key points and quick revision notes included.",
    },
    {
      icon: "🔒",
      title: "Private & Secure",
      desc: "Your uploaded documents stay safe and are processed securely.",
    },
    {
      icon: "🌍",
      title: "Access Anywhere",
      desc: "Works on desktop, tablet and mobile without installing anything.",
    },
  ];

  return (
    <section
      id="features"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <div className="text-center">

        <span className="text-green-400 font-semibold uppercase tracking-widest">
          Features
        </span>

        <h2 className="text-5xl font-bold text-white mt-4">
          Why Choose{" "}
          <span className="text-green-400">
            Smart Notes AI?
          </span>
        </h2>

        <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
          Everything you need to convert lengthy study material into
          organized, exam-ready notes within seconds.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {features.map((item, index) => (

          <div
            key={index}
            className="rounded-3xl border border-green-500/20 bg-zinc-900/70 backdrop-blur-xl p-8 hover:border-green-400 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-green-900/10"
          >

            <div className="text-5xl">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold text-white mt-6">
              {item.title}
            </h3>

            <p className="text-zinc-400 mt-4 leading-7">
              {item.desc}
            </p>

          </div>

        ))}

      </div>
    </section>
  );
}