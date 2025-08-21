import { User } from "lucide-react";
import MyPic from "../../assets/mypic.png"

export const AboutMe = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative max-w-[400px] max-h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={MyPic}
              alt="Ali Musa"
              className="object-cover w-full h-full filter grayscale brightness-75 contrast-125"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-6">
          <p className="text-muted-foreground text-lg leading-relaxed">
            I’m <span className="font-medium text-foreground">Ali Babagana Musa</span>, a
            software engineer passionate about designing and building sleek,
            intuitive digital experiences. My journey into tech started with a
            curiosity for how things work, and it has grown into a career where I
            craft scalable applications and meaningful solutions.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            I thrive at the intersection of{" "}
            <span className="font-medium">creativity</span> and{" "}
            <span className="font-medium">technology</span>, always eager to
            explore new frameworks, optimize performance, and deliver user-first
            design. Beyond coding, I enjoy contributing to open-source, writing
            about development, and mentoring others.
          </p>

          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              Always learning, always building.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
