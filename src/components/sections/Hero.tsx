import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Briefcase,
  FileArchive,
} from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6 pt-46 pb-24 overflow-hidden"
    >
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-44 h-44 bg-accent/10 rounded-full  animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-accent/10 rounded-full  animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-accent/10 rotate-45 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" />
      </div>

      <h1 className="flex md:flex-row flex-col text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-sm">
        <span>Hi, I’m&nbsp;</span>
        <span className="text-primary">Ali Babagana Musa</span>
      </h1>

      <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl">
        Software Engineer passionate about crafting sleek, scalable, and
        intuitive digital experiences.
      </p>

      <div className="flex gap-5 mb-8">
        <Link
          to="/"
          className="flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <Briefcase className="w-5 h-5" /> Projects
        </Link>
        <Link
          to="/"
          className="flex justify-center items-center gap-2 px-6 py-3 rounded-xl border font-medium hover:bg-accent transition shadow-sm hover:shadow-md"
        >
          <FileArchive className="w-5 h-5" /> Résumé
        </Link>
      </div>

      {/* Social Links */}
      <div className="flex gap-6">
        <a
          href="https://github.com/exc2000"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/ali-babagana-musa-3aa605243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a
          href="https://x.com/AliBabagnaMusa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Twitter className="h-6 w-6" />
        </a>
        <a
          href="https://instagram.com/dev.alibabaganamusa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Instagram className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};
