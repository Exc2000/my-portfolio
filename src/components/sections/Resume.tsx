import { Briefcase, GraduationCap, Code, Award } from "lucide-react";

export const Resume = () => {
  return (
    <section id="resume" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
        Resume
      </h2>

      <div className="space-y-16">
        {/* Experience */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
            <Briefcase className="h-5 w-5 text-primary" />
            Experience
          </h3>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
              <h4 className="text-lg font-semibold">Software Engineer</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Tech Company • Jan 2023 – Present
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Building modern web apps with React, Node.js, and cloud
                technologies. Led a small team to design scalable, high-quality
                solutions that improved performance by 40%.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
              <h4 className="text-lg font-semibold">Frontend Developer</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Startup Inc • 2022 – 2023
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Focused on crafting sleek, performant user interfaces using
                TypeScript, Tailwind, and Next.js. Delivered multiple SaaS
                products serving thousands of users.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
            <GraduationCap className="h-5 w-5 text-primary" />
            Education
          </h3>
          <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold">B.S. in Computer Science</h4>
            <p className="text-sm text-muted-foreground mb-2">
              University of Maiduguri • 2024 – Present
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Specialized in software engineering, data structures, and cloud
              computing.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
            <Code className="h-5 w-5 text-primary" />
            Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Node.js",
              "Next.js",
              "Tailwind",
              "MongoDB",
              "PostgreSQL",
              "AWS",
              "Docker",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-xl bg-muted text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Awards / Certifications */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
            <Award className="h-5 w-5 text-primary" />
            Certifications & Awards
          </h3>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
              <h4 className="text-lg font-semibold">
                AWS Certified Developer – Associate
              </h4>
              <p className="text-sm text-muted-foreground">Issued 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
