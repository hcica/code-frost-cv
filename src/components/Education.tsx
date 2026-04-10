import { education, languages } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-cyan-500" />
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Education</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Background</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Main degree - featured */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#111827] to-[#0d1f3c] border border-cyan-500/20 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-2xl">
                  🎓
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                    {education[0].period}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold">
                    GPA {education[0].gpa}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{education[0].degree}</h3>
              <p className="text-cyan-400 font-medium mb-2">{education[0].specialization}</p>
              <p className="text-slate-400 text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {education[0].institution} · {education[0].location}
              </p>
            </div>
          </div>

          {/* Secondary qualifications */}
          <div className="space-y-4">
            {education.slice(1).map((edu, i) => (
              <div
                key={i}
                className="bg-[#111827] border border-slate-800 rounded-2xl p-5 hover:border-slate-600 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">{i === 0 ? "📚" : "📝"}</span>
                  <span className="text-slate-500 text-xs font-medium">{edu.period}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-slate-500 text-xs mb-2">{edu.institution}</p>
                {edu.results && (
                  <p className="text-cyan-400 text-xs font-mono">{edu.results}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-[#111827] border border-slate-800 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
            <span>🌐</span> Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{lang.name}</span>
                  <span className="text-slate-500 text-sm">{lang.level}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${lang.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
