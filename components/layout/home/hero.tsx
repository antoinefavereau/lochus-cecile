export default function Hero() {
  const domains = [
    "Audiovisuel",
    "UI/UX Design",
    "Design graphique",
    "Social Média",
  ];

  return (
    <section className="relative flex flex-col items-center justify-center h-screen">
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        style={{
          perspective: "2000px",
        }}>
        {domains.map((domain, index) => {
          const animationDuration = 20000 + index * 2000;
          const animationDelay = animationDuration * Math.random();

          return (
            <div
              key={domain}
              className={`absolute rounded-full border-2 border-light animate-[customSpin_20s_linear_infinite]`}
              style={{
                width: `${(index + 2) * 250}px`,
                height: `${(index + 2) * 250}px`,
                animationDuration: `${animationDuration}ms`,
                animationDelay: `-${animationDelay}ms`,
                transformStyle: "preserve-3d",
              }}
            >
              <span
                className="absolute top-0 left-1/2 text-light text-2xl animate-[centeredSpin_20s_linear_infinite]"
                style={{
                  animationDuration: `${animationDuration}ms`,
                  animationDelay: `-${animationDelay}ms`,
                }}
              >
                {domain}
              </span>
            </div>
          )
        })}
      </div>
      <h1 className="relative flex flex-col items-center gap-5 text-7xl font-extrabold text-center">
        <span className="text-6xl font-medium text-primary">Portfolio</span>
        <span>LOCHUS Cécile</span>
      </h1>
    </section>
  );
}
