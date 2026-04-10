export default function About() {
  const stats = [
    { value: "3+", label: "Years of Study", icon: "🎓" },
    { value: "9+", label: "Projects Completed", icon: "🚀" },
    { value: "Top 8%", label: "TryHackMe Rank", icon: "🏆" },
    { value: "3.00", label: "GPA", icon: "⭐" },
  ];

  const highlights = [
    { icon: "🔐", title: "Security First", desc: "Embedding security into every stage of the SDLC through DevSecOps practices." },
    { icon: "⚙️", title: "CI/CD Mastery", desc: "Building automated pipelines with Jenkins, GitHub Actions, and Docker." },
    { icon: "🐧", title: "Linux Expertise", desc: "Deep experience with RHEL-based systems, server hardening, and VPS management." },
    { icon: "☁️", title: "Cloud Foundations", desc: "AWS certified with hands-on containerization using Docker and VMware." },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-cyan-500" />
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Am</span>
          </h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#111827] border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all group"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-black text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-slate-500 text-xs uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-[#111827] border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
