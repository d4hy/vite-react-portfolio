import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    //semantical
    <section
      /* Needs to have the same id as the href section within the navbar.
    
    */
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      
      <div className="w-32 h-32 overflow-hidden rounded-full relative">
        {/*Object position: x% y% offsett
        */}
        <img src="/images/portfolio-pfp.jpg" alt="David Hoang profile photo" className="absolute top-0 left-0 w-full h-full object-cover [object-position:50%_-30%] scale-150 " />
      </div>
      {/* Needs to have the same id as the href section within the navbar.
       The sentences are in different containers as they have different styling.
        */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Tracking-tight: letter-spacing: -0.015em;

        */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> David</span>
            <span className=" ml-2 opacity-0 animate-fade-in-delay-2"> Hoang</span>
          </h1>

          <p className="text-lg md:text-xl  max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">As a recent graduate, I am looking for entry roles within tech!</p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      {/* 
       

  // left: 50% (centered horizontally)
    transform: translateX(-50%) to perfectly center it
    animate: bounce (a built-in Tailwind animation)
      */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm  mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
