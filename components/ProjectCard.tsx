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
        className="group relative flex flex-col overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
      >
        {/* Thumbnail Area - Klik untuk buka Gallery */}
        <div
          className="relative h-48 w-full overflow-hidden cursor-pointer bg-zinc-800"
          onClick={() => setIsGalleryOpen(true)}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10" />

          {/* Badge Gallery */}
          <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur px-2 py-1 rounded text-xs text-white flex items-center gap-1 border border-white/10">
            <Layers size={12} /> {project.images.length} Shots
          </div>

          <Image
            src={project.images[0]} // Gambar pertama sebagai thumbnail
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-sm mt-2 line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
            {project.category === "deployed" && project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors shadow-lg shadow-blue-900/20"
              >
                <ExternalLink size={14} /> Visit Demo
              </a>
            ) : (
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-500 text-xs font-bold rounded-lg cursor-not-allowed">
                <Code2 size={14} /> Development
              </div>
            )}

            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors ml-auto"
                title="View Source Code"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Gallery Modal Component */}
      <ProjectGallery
        images={project.images}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </>
  );
};
