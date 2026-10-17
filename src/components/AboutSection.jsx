export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-2 border-primary inline-block">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="space-y-5  text-lg leading-relaxed text-foreground/80">
          <p>
            I am a front-end and full-stack developer with experience across React, Node.js, Express, SQL, and Chrome extension development. I have built production-facing interfaces, connected responsive frontends to REST APIs, and helped modernize an AI memory platform with reusable React architecture.
          </p>
          <p>
            I enjoy translating complex product ideas into approachable user experiences, collaborating with teammates, and understanding the fundamentals behind the tools I use. Outside of software, I like building and soldering custom keyboards.
          </p>
        </div>

        <div className="pt-6">
          <a href="#contact" className="cosmic-button">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};
