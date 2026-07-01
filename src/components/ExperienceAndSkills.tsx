import { cn } from "@/lib/utils";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Atrangii / Ullu OTT Platforms",
    role: "Digital Growth & Content Strategist",
    period: "2026 - Present",
    location: "Mumbai, India",
    description: [
      "Oversaw the 'Woh Wali Film' community (1.74M+ subscribers), achieving peak realtime velocity of 950,000+ views per 48 hours.",
      "Orchestrated content strategies for Atrangii Tamil, resulting in a 517% increase in watch time.",
      "Leveraged recommendation engines for Atrangii Telugu, securing 260k+ views in under 30 days."
    ]
  },
  {
    company: "Hari Om OTT Platform",
    role: "Social Media Automation & Growth Engineer",
    period: "2026",
    location: "Remote",
    description: [
      "Developed custom web applications to automate complex spreadsheet management, reducing manual overhead by 80%.",
      "Analyzed content performance data to execute high-retention strategies, maximizing engagement rates to over 500%.",
      "Architected specialized proxy networks to scale social operations."
    ]
  },
  {
    company: "GAO.Tek Inc.",
    role: "SMM & SEO Specialist",
    period: "2025",
    location: "Remote",
    description: [
      "Leveraged Apollo.io to design and execute high-conversion email marketing campaigns.",
      "Managed backlink building and keyword optimization using MS Teams for global coordination."
    ]
  },
  {
    company: "Freelancer.com",
    role: "Independent Digital Solutions Provider",
    period: "2023 - 2024",
    location: "Global",
    description: [
      "Delivered 2+ years of gigs specializing in HTML/CSS landing pages and digital handle management.",
      "Runner-Up in an International Freelancer Content Writing Competition."
    ]
  }
];

const skills = {
  "Coding & Email": ["HTML5", "CSS3", "Responsive Design", "MJML", "User Journeys", "A/B Testing"],
  "Software & Platforms": ["Salesforce", "Mailchimp", "Apollo.io", "Metricool", "Zapier", "Google Analytics", "CRM"],
  "Automation & Data": ["Web-App Automation", "Advanced Excel", "Performance Analytics", "Python", "Sheet Automation"],
  "Core Competencies": ["Personal Branding", "Content Calendars", "Trend Analysis", "Generative AI", "B2B Outreach"]
};

export default function ExperienceAndSkills() {
  return (
    <section id="experience" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-12 flex items-center">
              <Briefcase className="mr-4 w-8 h-8 text-blue-400" />
              Professional Experience
            </h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l border-zinc-800 pb-12 last:pb-0">
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-400" />
                  <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end text-sm text-zinc-500">
                      <span className="flex items-center"><Calendar className="mr-2 w-4 h-4" /> {exp.period}</span>
                      <span className="flex items-center"><MapPin className="mr-2 w-4 h-4" /> {exp.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-zinc-400 leading-relaxed flex items-start">
                        <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div id="skills">
            <h2 className="text-3xl font-bold mb-12 flex items-center">
              Technical Arsenal
            </h2>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm hover:border-blue-500/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
