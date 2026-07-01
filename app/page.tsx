import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Networks from "@/components/Networks";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b1c] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-250px] top-[-200px] h-[700px] w-[700px] rounded-full bg-blue-600/20 blur-[180px]" />

        <div className="absolute right-[-250px] bottom-[-200px] h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[180px]" />

        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[150px]" />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="flex min-h-[52vh] flex-col items-center justify-center px-6 pt-20 pb-6 text-center">

        <p className="uppercase tracking-[6px] text-blue-400">
          Professional Validator
        </p>

        <h1 className="mt-4 text-6xl font-bold leading-tight md:text-7xl">
          Secure Blockchain
          <br />
          Infrastructure
        </h1>

        <p className="mt-5 max-w-xl text-lg text-gray-400">
          Enterprise-grade validator services, RPC endpoints,
          archive nodes and monitoring for Proof-of-Stake
          networks.
        </p>

      </section>

      {/* Statistics */}
      <div className="-mt-10">
         <Stats />
      </div>

      {/* Networks */}
      <Networks />

      {/* Services */}
      <Services />

      {/* About */}
      <About />

      {/* Footer */}
      <Footer />

    </main>
  );
}