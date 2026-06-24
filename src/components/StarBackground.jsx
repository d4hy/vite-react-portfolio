import { useEffect, useState } from "react";

//Star object values: id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration
/* Will return both the stars and the meteors */
export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
      generateMeteors();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    //
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        //1<= x < 4
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = Math.max(3, Math.min(6, Math.floor(window.innerWidth / 360)));
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      const travelX = Math.random() * 260 + 520;
      const travelY = Math.random() * 180 + 260;

      newMeteors.push({
        id: i,
        x: Math.random() * 95 - 25,
        y: Math.random() * 45 - 18,
        tailLength: Math.random() * 120 + 140,
        thickness: Math.random() * 1.2 + 1,
        opacity: Math.random() * 0.35 + 0.45,
        delay: Math.random() * 20,
        animationDuration: Math.random() * 5 + 7,
        angle: Math.atan2(travelY, travelX) * (180 / Math.PI),
        travelX,
        travelY,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div 
    className="
    fixed               /* position: fixed; */
    inset-0             /* top: 0; right: 0; bottom: 0; left: 0; */
    overflow-hidden     /* overflow: hidden;  */
    pointer-events-none /* pointer-events: none;  Prevents this div from capturing pointer events (like clicks or hovers)*/
    z-0                 /* z-index: 0; */
  ">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.tailLength + "px",
            height: meteor.thickness + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            opacity: meteor.opacity,
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            "--meteor-angle": meteor.angle + "deg",
            "--meteor-opacity": meteor.opacity,
            "--meteor-travel-x": meteor.travelX + "px",
            "--meteor-travel-y": meteor.travelY + "px",
            "--meteor-head-size": meteor.thickness * 3 + "px",
          }}
        />
      ))}
    </div>
  );
};
