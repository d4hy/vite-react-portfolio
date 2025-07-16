import { projectsList } from "../pages/Projects";
import { Github, ExternalLink } from "lucide-react";

export const BeabadoobeeTrivia = () => {
  // Instead of using useParams, we directly select the project with id 1
  const project = projectsList.find((p) => p.id === 1);

  if (!project) {
    return <div className="text-center text-red-500 mt-8">Project not found.</div>;
  }

  return (
    <div className=" bg-card p-6 rounded-lg shadow-md border border-border relative text-left ">
      <h2 className="text-3xl font-bold text-center mb-4">{project.title}</h2>
      <img src={"/images/bea-trivia-images/bea-1st.png"} alt={project.title} className="w-full h-full object-cover rounded-md mb-4 " />
      <p className="text-foreground mb-4 ">Navigate the maze where you will be tested to see if you are an ample fan of Beabadobee!</p>

      <ul className="flex items-start flex-col gap-4 mt-4">
        {/* Stack Label */}
        <li>
          {" "}
          <span className="inline border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">Stack</span>
          <p className="inline"> Java, Java Swing, SQLite, IntelliJ </p>
        </li>

        <li>
          {" "}
          <a href="/Bea-trivia-maze-files/TCSS360A Final Project Demo.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded hover:opacity-90 transition">
            Demo
            <ExternalLink size={18} />
          </a>
        </li>
        <a href="https://drive.google.com/file/d/1rIeHFAy6DcNrxMztzO-C4fPwWIEzofgf/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded hover:opacity-90 transition">
          Installer
          <ExternalLink size={18} />
        </a>
        <li>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded hover:opacity-90 transition">
            Source Code
            <Github size={18} />
          </a>
        </li>
      </ul>
      <h1 className="text-xl  text-center mb-4"> Gallery:</h1>
      <p className=" indent-5 "> Answer multiple types of questions to unlock the next room. Featuring multiple choice, true/false, and short answer questions. If the player answers the question false, the door to that room will lock. Be careful to not answer false too many questions wrong or you may lose the game.</p>
      
      <p className="my-4">Multiple choice</p>
      <img src={"/images/bea-trivia-images/bea-short-answer.png"} alt= "multiple choice preview" className="w-full h-full object-cover  my-4 " />

      
      <p className="my-4"> True/ False</p>
      <img src={"/images/bea-trivia-images/bea-true-false.png"} alt= "true/ false preview" className="w-full h-full object-cover  my-4 " />

      <p className="my-4">Short answer</p>
      <img src={"/images/bea-trivia-images/bea-short-answer.png"} alt= "short answer preview" className="w-full h-full object-cover  my-4 " />

      <h1 className="my-4 text-lg font-bold text-center">Instructions </h1>
      <img src={"/images/bea-trivia-images/bea-instructions.png"} alt= "Intstructions preview" className="w-full h-full object-cover  my-4 " />
    </div>
  );
};
