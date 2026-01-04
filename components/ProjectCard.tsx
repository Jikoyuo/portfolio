"use client";
import React, { useState } from "react";
import { Project } from "@/types";
import { Github, ExternalLink, Code2, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectGallery } from "./ProjectGallery";
import Image from "next/image";

export const ProjectCard = ({ project }: { project: Project }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // UBAH DISINI: Ganti bg-zinc-900 (solid) menjadi bg-black/40 (transparan) + backdrop-blur
        className="group relative flex flex-col overflow-hidden rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 shadow-xl"
      >
        {/* Thumbnail Area */}
        <div
          className="relative h-48 w-full overflow-hidden cursor-pointer bg-white/5" // Placeholder transparan
          onClick={() => setIsGalleryOpen(true)}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10" />

          <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs text-white flex items-center gap-1 border border-white/10">
            <Layers size={12} /> {project.images.length} Shots
          </div>

          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={true}
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-300 text-sm mt-2 line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Chips - UBAH DISINI: Lebih transparan */}
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions - UBAH DISINI: Tombol lebih menyatu */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            {project.category === "deployed" && project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600/90 hover:bg-blue-600 text-white text-xs font-bold rounded-lg transition-colors shadow-lg shadow-blue-900/20"
              >
                <ExternalLink size={14} /> Visit Demo
              </a>
            ) : (
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 text-zinc-400 text-xs font-bold rounded-lg cursor-not-allowed border border-white/5">
                <Code2 size={14} /> Development
              </div>
            )}

            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors ml-auto border border-white/5"
                title="View Source Code"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <ProjectGallery
        images={project.images}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </>
  );
};
