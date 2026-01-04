"use client";
import { useState } from "react";
// Perhatikan import di bawah ini menunjuk ke folder root
import { DecryptedText } from "@/components/DecryptedText";
import { ProjectCard } from "@/components/ProjectCard";
import { Project, ProjectCategory } from "@/types";
import { Github, Linkedin, Mail } from "lucide-react";

// --- DATA PROJECT (Silahkan diedit) ---
const myProjects: Project[] = [
  {
    id: "1",
    title: "Catatan Belajar Golang",
    description:
      "Platform dokumentasi perjalanan belajar Golang saya. Dibangun untuk mencatat sintaks, struktur data, dan concurrency patterns.",
    techStack: ["React.js", "Tailwind CSS", "Vercel"],
    category: "deployed",
    // Ingat ganti URL gambar ini dengan path file lokal di folder /public nanti
    images: [
      "https://placehold.co/800x450/1e293b/FFF?text=Golang+Log+1",
      "https://placehold.co/800x450/1e293b/FFF?text=Golang+Log+2",
      "https://placehold.co/800x450/1e293b/FFF?text=Golang+Log+3",
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
    <main className="min-h-screen bg-black text-zinc-100 selection:bg-blue-500/30">
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
        {/* HEADER / HERO SECTION */}
        <header className="mb-24 space-y-8">
          <div className="space-y-4">
            <h2 className="text-blue-400 font-mono text-sm tracking-wider uppercase">
              Portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              <DecryptedText text="Chornael Damar Kesuma" />
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
              Software Engineer.
              <span className="block text-zinc-500 text-lg mt-2">
                Frontend Specialist crafting Full-Stack & Web3 Solutions.
              </span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Jikoyuo"
              target="_blank"
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-white hover:text-black transition-all"
            >
              <Github size={20} />
            </a>
            {/* Tambahkan link LinkedIn/Email asli kamu di sini */}
            <button className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-white hover:text-black transition-all">
              <Linkedin size={20} />
            </button>
            <button className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-white hover:text-black transition-all">
              <Mail size={20} />
            </button>
          </div>
        </header>

        {/* PROJECTS SECTION */}
        <section>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold text-white">Selected Works</h2>
              <p className="text-zinc-500 text-sm">
                Menampilkan project live dan eksperimen kode.
              </p>
            </div>

            {/* Custom Tab Switcher */}
            <div className="bg-zinc-900 p-1.5 rounded-xl inline-flex border border-zinc-800">
              <button
                onClick={() => setActiveTab("deployed")}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === "deployed"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                Deployed 🚀
              </button>
              <button
                onClick={() => setActiveTab("undeployed")}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === "undeployed"
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                Undeployed 💻
              </button>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center border border-dashed border-zinc-800 rounded-2xl">
              <p className="text-zinc-500">
                Belum ada project di kategori ini.
              </p>
            </div>
          )}
        </section>

        {/* FOOTER */}
        <footer className="mt-32 pt-8 border-t border-zinc-900 text-center text-zinc-600 text-sm">
          <p>
            © {new Date().getFullYear()} Chornael Damar Kesuma. Built with
            Next.js.
          </p>
        </footer>
      </div>
    </main>
  );
}
