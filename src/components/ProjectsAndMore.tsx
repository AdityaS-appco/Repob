import { ExternalLink, Github, Linkedin, Play, GraduationCap, Award } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Rivava Ecosystem",
    description: "Engineered a 360-degree digital infrastructure including a Live Website, custom Internal CRM, and an official Play Store application for a fintech brand.",
    tags: ["Full-stack", "CRM", "Mobile App", "Fintech"],
    links: {
      web: "https://rivava.in",
    },
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Community Management System",
    description: "Lead Community Manager for a creator with 200k+ subscribers. Managed engagement across Discord and YouTube to drive brand loyalty and retention.",
    tags: ["Discord", "Community", "Automation"],
    links: {},
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Social Growth Proxy Network",
    description: "Architected specialized proxy networks to scale social operations and audience acquisition pathways for major OTT platforms.",
    tags: ["Infrastructure", "Networking", "Automation"],
    links: {},
    color: "from-emerald-500/20 to-teal-500/20"
  }
];

export default function ProjectsAndMore() {
  return (
    <div className="bg-zinc-950">
      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Featured Masterpieces</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-zinc-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-zinc-800 text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.links.web && (
                      <Link href={project.links.web} target="_blank" className="text-zinc-100 hover:text-blue-400 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Awards */}
      <section className="py-24 border-t border-zinc-900 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-10 flex items-center">
                <GraduationCap className="mr-4 w-8 h-8 text-emerald-400" />
                Education
              </h2>
              <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950">
                <h3 className="text-xl font-bold">Bachelor of Technology</h3>
                <p className="text-emerald-400 font-medium">Computer Science and Engineering</p>
                <p className="text-zinc-500 text-sm mt-1">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-zinc-400">2021 - 2025</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-bold">CGPA: 7.31/10</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-10 flex items-center">
                <Award className="mr-4 w-8 h-8 text-blue-400" />
                Recognition
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-100">Smart India Hackathon (SIH 2023)</h4>
                    <p className="text-sm text-zinc-500">National-level participant (Top 5% of applicants)</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Play className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-100">10+ Live Products Delivered</h4>
                    <p className="text-sm text-zinc-500">Successfully scaled digital solutions within 18 months.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Play className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-100">AI Strategy Expert</h4>
                    <p className="text-sm text-zinc-500">Expert in utilizing generative AI for creative workflows, video production, and automated copywriting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-24 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to Scale?</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Let&apos;s collaborate on your next technical masterpiece. Reach out for digital growth, automation, or full-stack development.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Link
              href="mailto:adityaz190zz@gmail.com"
              className="group flex items-center gap-3 text-2xl font-bold text-zinc-100 hover:text-blue-400 transition-colors"
            >
              adityaz190zz@gmail.com
              <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              href="tel:+919044761170"
              className="text-xl font-medium text-zinc-400 hover:text-white transition-colors"
            >
              +91 90447 61170
            </Link>
            <div className="flex gap-8 mt-4">
              <Link
                href="https://github.com/AdityaS-appco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="w-8 h-8" />
              </Link>
              <Link
                href="https://linkedin.com/in/aditya-singh-524a04360"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </Link>
            </div>
            <p className="text-zinc-600 text-sm mt-12">
              © {new Date().getFullYear()} Aditya Singh. Built with Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
