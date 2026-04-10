import { skills, certifications, softSkills } from "../data/portfolio";

const skillIcons: Record<string, string> = {
  "Cloud, Virtualization & Containers": "☁️",
  "CI/CD & Automation": "⚙️",
  "Operating Systems": "🐧",
  "Web Servers & Process Mgmt": "🌐",
  "Monitoring & Observability": "📊",
  "Programming & Scripting": "💻",
  "Database Management": "🗄️",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0d1428]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-cyan-500" />
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Arsenal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="lg:col-span-2 space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-[#111827] border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{skillIcons[category] || "🔧"}</span>
                  <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium hover:border-cyan-500/40 hover:text-cyan-300 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Certifications */}
            <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/20 transition-all">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-5 flex items-center gap-2">
                <span>🏅</span> Certifications & Achievements
              </h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all"
                  >
                    <span className="text-lg">{cert.icon}</span>
                    <span className="text-slate-300 text-sm font-medium">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/20 transition-all">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-5 flex items-center gap-2">
                <span>🤝</span> Soft Skills
              </h3>
              <div className="space-y-2">
                {softSkills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span className="text-slate-400 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TryHackMe */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="text-white font-bold">TryHackMe</p>
                  <p className="text-cyan-400 text-sm font-semibold">Top 8% Globally</p>
                </div>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" style={{ width: "92%" }} />
              </div>
              <p className="text-slate-500 text-xs mt-2">92nd percentile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
