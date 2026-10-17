// A seeded sky stays in place across re-renders, resizing, and route changes.
const random = (seed) => {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
};

const stars = Array.from({ length: 160 }, (_, id) => {
  const bright = id % 13 === 0;
  return {
    id,
    bright,
    x: ((id % 16) + random(id + 1)) / 16 * 100,
    y: (Math.floor(id / 16) + random(id + 201)) / 10 * 100,
    size: bright ? 2.2 + random(id + 401) : 0.7 + random(id + 401) * 1.1,
    opacity: bright ? 0.8 : 0.2 + random(id + 601) * 0.4,
    duration: 4 + random(id + 801) * 6,
    delay: random(id + 1001) * -10,
  };
});

const meteors = [
  { x: "12%", y: "8%", delay: "2s", duration: "19s" },
  { x: "62%", y: "18%", delay: "9s", duration: "27s" },
  { x: "35%", y: "48%", delay: "16s", duration: "31s" },
];

export const StarBackground = () => (
  <div className="starfield" aria-hidden="true">
    <div className="starfield-haze" />
    {stars.map((star) => (
      <span
        key={star.id}
        className={`sky-star${star.bright ? " sky-star-bright" : ""}`}
        style={{
          left: `${star.x}%`,
          top: `${star.y}%`,
          width: `${star.size}px`,
          height: `${star.size}px`,
          "--star-opacity": star.opacity,
          animationDuration: `${star.duration}s`,
          animationDelay: `${star.delay}s`,
        }}
      />
    ))}
    {meteors.map((meteor, index) => (
      <span
        key={index}
        className="sky-meteor"
        style={{
          left: meteor.x,
          top: meteor.y,
          animationDelay: meteor.delay,
          animationDuration: meteor.duration,
        }}
      />
    ))}
  </div>
);
