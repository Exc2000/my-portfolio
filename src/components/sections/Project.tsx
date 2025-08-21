import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import image from "../../assets/image.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio built with React, Tailwind, and shadcn/ui. Includes smooth animations, dark/light mode, and responsive design.",
    link: "https://github.com/username/portfolio",
    image:
      "https://unsplash.com/photos/man-sitting-on-rock-surrounded-by-water--Q_t4SCN8c4",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio built with React, Tailwind, and shadcn/ui. Includes smooth animations, dark/light mode, and responsive design.",
    link: "https://github.com/username/portfolio",
    image:
      "https://unsplash.com/photos/man-sitting-on-rock-surrounded-by-water--Q_t4SCN8c4",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio built with React, Tailwind, and shadcn/ui. Includes smooth animations, dark/light mode, and responsive design.",
    link: "https://github.com/username/portfolio",
    image:
      "https://unsplash.com/photos/man-sitting-on-rock-surrounded-by-water--Q_t4SCN8c4",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio built with React, Tailwind, and shadcn/ui. Includes smooth animations, dark/light mode, and responsive design.",
    link: "https://github.com/username/portfolio",
    image:
      "https://unsplash.com/photos/man-sitting-on-rock-surrounded-by-water--Q_t4SCN8c4",
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
                src={image}
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
