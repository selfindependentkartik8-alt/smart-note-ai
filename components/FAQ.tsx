export default function FAQ() {
  const faqs = [
    {
      question: "Is Smart Notes AI free?",
      answer: "Yes! You can use Smart Notes AI for free.",
    },
    {
      question: "Which file formats are supported?",
      answer: "Currently PDF is supported. More formats will be added soon.",
    },
    {
      question: "Which AI model does Smart Notes AI use?",
      answer: "Smart Notes AI is powered by Google's Gemini AI.",
    },
    {
      question: "Is my uploaded PDF secure?",
      answer: "Yes. Your files are processed securely and are not permanently stored.",
    },
  ];

  return (
    <section id="faq" className="max-w-5xl mx-auto py-24 px-6">
      <div className="text-center">
        <span className="text-green-400 uppercase tracking-widest font-semibold">
          FAQ
        </span>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-12 space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-green-500/20 bg-zinc-900/70 p-6 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold text-white">
              {faq.question}
            </h3>

            <p className="mt-3 text-zinc-400 leading-7">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}