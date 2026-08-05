import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UploadBox from "../components/UploadBox";
import NotesCard from "../components/NotesCard";
import WhyChoose from "../components/WhyChoose";
import HowToUse from "../components/HowToUse";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#021a13] via-[#071f18] to-black">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-green-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px]" />

      <Navbar />

      <section className="relative z-10">

        <Hero />

        <div className="max-w-7xl mx-auto px-6">

          <UploadBox />

          

          {/* Backend integration ke baad AI response yahan dikhega */}
          <NotesCard />

        </div>

        <WhyChoose />

        <HowToUse />

        <FAQ />

        <Footer />

      </section>

    </main>
  );
}