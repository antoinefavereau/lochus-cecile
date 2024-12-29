export default function Hero() {
  const domains = [
    "Audiovisuel",
    "UI/UX Design",
    "Design graphique",
    "Social Média",
  ];

  return (
    <section className="relative flex flex-col items-center justify-center gap-16 h-screen">
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        style={{
          perspective: "1000px",
        }}
      >
        {domains.map((domain, index) => {
          const animationDuration = 20000 + index * 2000;
          const animationDelay = animationDuration * Math.random();

          return (
            <div
              key={domain}
              className={`absolute rounded-full border-2 border-veryLight animate-[customSpin_20s_linear_infinite]`}
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
          );
        })}
      </div>
      <h1 className="relative flex flex-col items-center gap-5 text-7xl font-extrabold text-center">
        <span className="text-6xl font-medium text-primary">Portfolio</span>
        <span>LOCHUS Cécile</span>
      </h1>
      <button
        type="button"
        className="relative bg-transparent border-none outline outline-[3px] w-6 h-10 rounded-xl"
        title="Voir plus"
      >
        <div className="absolute top-2 start-0 h-6 w-full flex flex-col items-center justify-end gap-0.5 overflow-hidden animate-[scrollDashes_2s_linear_infinite]">
          <div className="w-0.5 h-1 rounded-sm bg-white shrink-0"></div>
          <div className="w-0.5 h-1 rounded-sm bg-white shrink-0"></div>
          <div className="w-0.5 h-1 rounded-sm bg-white shrink-0"></div>
          <div className="w-0.5 h-1 rounded-sm bg-white shrink-0"></div>
          <div className="w-0.5 h-1 rounded-sm bg-white shrink-0"></div>
        </div>
        <div className="absolute w-2 h-2 bg-white rounded-full top-2 start-2 animate-[scrollDot_2s_linear_infinite]"></div>
      </button>
    </section>
  );
}
