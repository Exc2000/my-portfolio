import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export const GetInTouch = () => {
  return (
    <section className="relative py-24 px-6 max-w-4xl mx-auto text-center overflow-hidden">
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-muted/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/10 rotate-45 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" />
      </div>

      {/* Section Content */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Let’s <span className="text-primary">Work Together</span>
      </h2>
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        I’m always open to discussing new projects, creative ideas, or
        opportunities to collaborate.  
        Whether you have a question or just want to say hi — feel free to reach out.
      </p>

      {/* Contact Button */}
      <a
        href="mailto:alibabaganamusa@email.com"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
      >
        <Mail className="h-5 w-5" />
        Say Hello
      </a>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-10">
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
          href="https://twitter.com/AliBabaganaMusa"
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