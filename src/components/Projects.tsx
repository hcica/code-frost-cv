import { useState } from "react";
import { projects } from "../data/portfolio";

const categories = ["All", "DevOps", "Security", "Research", "Development"];

const categoryColors: Record<string, string> = {
  DevOps: "from-orange-400 to-amber-500",
  Security: "from-cyan-400 to-blue-500",
  Research: "from-purple-400 to-violet-500",
  Development: "from-green-400 to-emerald-500",
};

const categoryBadge: Record<string, string> = {
  DevOps: "bg-orange-500/10 border-orange-500/30 text-orange-400",
  Security: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
  Research: "bg-purple-500/10 border-purple-500/30 text-purple-400",
  Development: "bg-green-500/10 border-green-500/30 text-green-400",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-cyan-500" />
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Work</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            A curated collection of security research, DevOps tooling, and full-stack development projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-slate-800/60 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <div
              key={idx}
              className="group bg-[#111827] border border-slate-800 rounded-2xl p-6 hover:border-slate-600 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Icon & Category */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                    categoryColors[project.category] || "from-slate-400 to-slate-600"
                  } flex items-center justify-center text-2xl shadow-lg`}
                >
                  {project.icon}
                </div>
                <span
                  className={`px-3 py-1 rounded-full border text-xs font-semibold ${
                    categoryBadge[project.category] || "bg-slate-700 border-slate-600 text-slate-300"
                  }`}
                >
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-slate-500 mb-3 font-medium uppercase tracking-wider">{project.subtitle}</p>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-400 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
