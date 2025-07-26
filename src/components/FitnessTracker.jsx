import { projectsList } from "../pages/Projects";
import { Github, ExternalLink } from "lucide-react";

export const FitnessTracker = () => {
  // Instead of using useParams, we directly select the project with id 1
  const project = projectsList.find((p) => p.id === 2);

  if (!project) {
    return <div className="text-center text-red-500 mt-8">Project not found.</div>;
  }

  return (
    <div className=" bg-card p-6 rounded-lg shadow-md border border-border relative text-left ">
      <h2 className="text-3xl font-bold text-center mb-4">{project.title}</h2>
      <img src={"/images/fitness-tracker-images/fitness-tracker1st.png"} alt={project.title} className="w-full h-full object-cover rounded-md mb-4 " />
      <p className="text-foreground mb-4 indent-5 ">A simple and intuitive web application that lets users log their workout sessions with ease. Users can record sets, reps, and weights for each exercise, helping them track progress over time.</p>

      <ul className="flex items-start flex-col gap-4 mt-4">
        {/* Stack Label */}
        <li>
          {" "}
          <span className="inline border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">Stack</span>
          <p className="inline"> HTML, CSS, JavaScript, JQuery, Express.js, Node.js, Bootstrap, VS Code </p>
        </li>

        <li>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded hover:opacity-90 transition">
            Source Code
            <Github size={18} />
          </a>
        </li>
        <a href="/a3.html"  target="_blank" className="inline-flex items-center gap-2 border border-primary bg-primary px-2 py-1 rounded mr-1 hover:opacity-90 transition">
          Documentation
          <ExternalLink size={18} />
        </a>
  
      </ul>
      <h1 className="text-xl  text-center mb-4"> Gallery:</h1>

      <p className="my-4"> To edit a previous workout, click 'Read' in the navigation menu, then select 'Edit' to update the date, sets, reps, and weights. </p>
      <img src={"/images/fitness-tracker-images/fitness-tracker-preview.png"} alt="fitness tracker preview" className="w-full h-full object-cover  my-4 " />

       <h1 className="my-4"> Update page</h1>
      <img src={"/images/fitness-tracker-images/fitness-tracker-edit.png"} alt="edit page" className="w-full h-full object-cover  my-4 " />

      <h1 className="my-4"> View page</h1>
      <img src={"/images/fitness-tracker-images/fitness-tracker-view.png"} alt="view page" className="w-full h-full object-cover  my-4 " />

        <h1 className="my-4"> Create page</h1>
      <img src={"/images/fitness-tracker-images/fitness-tracker-create.png"} alt="create page" className="w-full h-full object-cover  my-4 " />

      
      <h1 className="my-4"> Successfully adding a page.</h1>
      <img src={"/images/fitness-tracker-images/fitness-tracker-create-success.png"} alt="create success image" className="w-full h-full object-cover  my-4 " />

      
      <h1 className="my-4"> Pr page</h1>
      <img src={"/images/fitness-tracker-images/fitness-tracker-pr.png"} alt="pr page" className="w-full h-full object-cover  my-4 " />

    </div>
  );
};
