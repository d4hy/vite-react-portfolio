

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-2 border-primary inline-block">
          About <span className="text-primary"> Me</span>
        </h2>

        <p className="text-muted-foreground text-lg md:text-xl mt-4 text-left indent-8">
        I graduated from the University of Washington with a BS in Computer Science. 
        I’m passionate about technology and love spending my time tinkering with new tools and exploring how the fundamentals work. I’m eager to continue learning and applying my skills to build impactful software solutions. Outside of coding, I enjoy building and soldering keyboards.


        </p>

        <div className="pt-6">
          <a
            href="#contact"
            className="cosmic-button"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};
