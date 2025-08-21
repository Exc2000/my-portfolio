import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6 pt-36 pb-28 overflow-hidden">
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-44 h-44 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-muted/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-accent/10 rotate-45 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" />
      </div>

      {/* Hero Content */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-sm">
        Hi, I’m <span className="text-primary">Ali Babagana Musa</span>
      </h1>

      <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
        A passionate{" "}
        <span className="font-medium text-foreground">Software Engineer</span>{" "}
        crafting sleek, performant, and delightful digital experiences with
        modern technologies. I specialize in building{" "}
        <span className="font-medium">scalable web applications</span>, intuitive{" "}
        <span className="font-medium">user interfaces</span>, and exploring{" "}
        <span className="font-medium">cutting-edge tools</span> that push the
        boundaries of what’s possible on the web. My mission is to turn complex
        problems into elegant, human-friendly solutions.
      </p>

      <div className="flex gap-5 mb-8">
        <Link
          to="/projects"
          className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
        >
          View Projects
        </Link>
        <Link
          to="/resume"
          className="px-6 py-3 rounded-xl border font-medium hover:bg-accent transition shadow-sm hover:shadow-md"
        >
          Download Resume
        </Link>
      </div>

      {/* Social Links */}
      <div className="flex gap-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Twitter className="h-6 w-6" />
        </a>
        <a
          href="https://instagram.com/yourusername"
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
