import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0d1428]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-cyan-500" />
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent hidden md:block" />

          {experience.map((job, idx) => (
            <div key={idx} className="relative md:pl-20 mb-12">
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-[#0d1428] hidden md:flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              <div className="bg-[#111827] border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-400 font-medium">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                      </svg>
                      {job.company}
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {job.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
