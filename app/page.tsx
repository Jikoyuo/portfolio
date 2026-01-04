"use client";
import { useState } from "react";
import { DecryptedText } from "@/components/DecryptedText";
import { ProjectCard } from "@/components/ProjectCard";
import ColorBends from "@/components/ColorBends";
import { Project, ProjectCategory } from "@/types";
import { Github, Linkedin, Mail } from "lucide-react";
import LiquidEther from "@/components/LiquidEther";

// --- DATA PROJECT (Biarkan sama seperti sebelumnya) ---
const myProjects: Project[] = [
  {
    id: "1",
    title: "Catatan Belajar Golang",
    description:
      "Platform dokumentasi perjalanan belajar Golang saya. Dibangun untuk mencatat sintaks, struktur data, dan concurrency patterns.",
    techStack: ["React.js", "Tailwind CSS", "Vercel"],
    category: "deployed",
    images: [
      "https://placehold.co/800x450/1e293b/FFF?text=Golang+Log+1",
      "https://placehold.co/800x450/1e293b/FFF?text=Golang+Log+2",
    ],
    links: {
      demo: "https://personal-leaning-logbook-golang.vercel.app/",
      repo: "https://github.com/Jikoyuo",
    },
  },
  {
    id: "2",
    title: "Blockchain Voting System (Prototype)",
    description:
      "Sistem voting terdesentralisasi menggunakan Smart Contract Solidity. Memastikan integritas data suara tanpa pihak ketiga.",
    techStack: ["Solidity", "Hardhat", "Ethers.js", "React", "TypeScript"],
    category: "undeployed",
    images: [
      "https://placehold.co/800x450/4c1d95/FFF?text=Smart+Contract",
      "https://placehold.co/800x450/4c1d95/FFF?text=Voting+UI",
    ],
    links: {
      repo: "https://github.com/Jikoyuo",
    },
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("deployed");
  const filteredProjects = myProjects.filter((p) => p.category === activeTab);

  return (
    <main className="min-h-screen relative text-zinc-100 selection:bg-blue-500/30">
      {/* --- BACKGROUND UTAMA --- */}
      {/* Pastikan bg-black ada di paling bawah sebagai base, tapi ColorBends di atasnya */}
      {/* <div className="fixed inset-0 z-0 bg-black">
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={30}
          speed={0.3}
          scale={1.2}
          frequency={1.4}
          warpStrength={1.2}
          mouseInfluence={0.8}
          parallax={0.6}
          noise={0.08}
          transparent
        />
      </div> */}

      <div className="fixed inset-0 z-0 bg-black">
        <LiquidEther
          colors={["#271a00", "#d97706", "#fbbf24"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Overlay halus agar teks di bagian paling bawah tidak susah dibaca, tapi tetap transparan */}
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
        {/* HEADER */}
        <header className="mb-24 space-y-8">
          <div className="space-y-4">
            <h2 className="text-blue-400 font-mono text-sm tracking-wider uppercase">
              Portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mix-blend-overlay">
              <DecryptedText text="Chornael Damar Kesuma" />
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-relaxed">
              Software Engineer.
              <span className="block text-zinc-400 text-lg mt-2">
                Frontend Specialist crafting Full-Stack & Web3 Solutions.
              </span>
            </p>
          </div>

          {/* Social Links - UBAH DISINI: Lebih Glassy */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Jikoyuo"
              target="_blank"
              // Ganti bg-zinc-900/80 jadi bg-white/5
              className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/20 hover:text-white transition-all"
            >
              <Github size={20} />
            </a>
            <button className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/20 hover:text-white transition-all">
              <Linkedin size={20} />
            </button>
            <button className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/20 hover:text-white transition-all">
              <Mail size={20} />
            </button>
          </div>
        </header>

        {/* PROJECTS SECTION */}
        <section>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-white">Selected Works</h2>
              <p className="text-zinc-400 text-sm">
                Menampilkan project live dan eksperimen kode.
              </p>
            </div>

            {/* Custom Tab Switcher - UBAH DISINI: Lebih Glassy */}
            <div className="bg-black/30 backdrop-blur-md p-1.5 rounded-xl inline-flex border border-white/10">
              <button
                onClick={() => setActiveTab("deployed")}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === "deployed"
                    ? "bg-blue-600/80 text-white shadow-lg shadow-blue-500/25"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Deployed 🚀
              </button>
              <button
                onClick={() => setActiveTab("undeployed")}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === "undeployed"
                    ? "bg-purple-600/80 text-white shadow-lg shadow-purple-500/25"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Undeployed 💻
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center border border-dashed border-white/10 rounded-2xl bg-black/20 backdrop-blur-sm">
              <p className="text-zinc-500">
                Belum ada project di kategori ini.
              </p>
            </div>
          )}
        </section>

        {/* FOOTER */}
        <footer className="mt-32 pt-8 border-t border-white/10 text-center text-zinc-500 text-sm">
          <p>
            © {new Date().getFullYear()} Chornael Damar Kesuma. Built with
            Next.js.
          </p>
        </footer>
      </div>
    </main>
  );
}
