import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Pic1 from "../../assets/pic (1).png";
import Pic2 from "../../assets/pic (2).png";
import Pic3 from "../../assets/pic (3).png";
import Pic4 from "../../assets/pic (4).png";

const projects = [
  {
    title: "Loan Management System",
    description:
      "A web-based system for managing loan applications, approvals, and repayments. Features include multi-role access (admin, staff, client), automated interest calculations, payment tracking, and a responsive dashboard built with React, Tailwind, and AntD.",
    link: "https://github.com/exc2000/Sleepwell-Frontend",
    image: Pic1,
  },
  {
    title: "VTU Reselling Platform",
    description:
      "An online platform for reselling airtime, data, and utility bills. It supports secure wallet funding, transaction history, and user role management. Built with React, Tailwind, and shadcn/ui, with a focus on responsive UI and smooth user experience.",
    link: "https://github.com/exc2000/SmartByteSub-Frontend",
    image: Pic2,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal developer portfolio showcasing projects, skills, and contact information. Built with React, Tailwind, and shadcn/ui, it features theme switching (dark/light), smooth animations, and a mobile-friendly design.",
    link: "https://github.com/exc2000/my-portfolio",
    image: Pic3,
  },
  {
    title: "Payroll Management System",
    description:
      "A system for automating salary calculations, employee records, and payment reports. Includes role-based access, tax/deduction handling, and real-time payroll summaries. Developed with React, Tailwind, and shadcn/ui for a clean and efficient workflow.",
    link: "https://github.com/exc2000/nalv-payroll-system-frontend",
    image: Pic4,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative max-w-5xl mx-auto px-6 py-28">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-14 drop-shadow-sm">
        Featured <span className="text-primary">Projects</span>
      </h2>

      {/* Other Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border bg-card shadow-md hover:shadow-xl overflow-hidden"
          >
            <div className="md:px-6 px-4 md:pt-6 pt-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-50 object-cover rounded-2xl border"
              />
            </div>

            <div className="md:p-6 p-4 flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <Link
                to={project.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
              >
                View Project <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
