export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-2 border-primary inline-block">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="space-y-5  text-lg leading-relaxed text-foreground/80">
          <p>
            I am a software developer with experience building React applications, integrating REST APIs, and leading frontend development for an AI-powered Chrome extension. At Hawl Technologies, I built interfaces for AI Memory Box, contributed to refactoring a legacy codebase, and coordinated a rotating team of 3-4 developers.
          </p>
          <p>
            Through projects and technical training, I have built Java and Spring Boot REST APIs with relational database persistence. My projects include a React workout tracker connected to Express and MySQL, a layered Spring social message API, and a Java Swing trivia maze with SQLite, serialization, and JUnit tests.
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
