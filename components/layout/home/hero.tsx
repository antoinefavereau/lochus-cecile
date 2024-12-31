export default function Hero() {
  const domains = [
    { name: "Audiovisuel", index: 1, delayMultiplicator: Math.random() / 3 },
    {
      name: "UI/UX Design",
      index: 1,
      delayMultiplicator: Math.random() / 3 + 0.5,
    },
    {
      name: "Design graphique",
      index: 2,
      delayMultiplicator: Math.random() / 3,
    },
    {
      name: "Social Média",
      index: 2,
      delayMultiplicator: Math.random() / 3 + 0.5,
    },
    { name: "", index: 3, delayMultiplicator: 0 },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center gap-16 h-screen">
      <div
        className="absolute -inset-16 xs:-inset-8 md:inset-0 flex items-center justify-center select-none pointer-events-none"
        style={{
          perspective: "1000px",
        }}
      >
        {domains.map((domain) => {
          const animationDuration = 20000 + domain.index * 2000;
          const animationDelay = animationDuration * domain.delayMultiplicator;

          return (
            <div
              key={domain.name}
              className={`absolute aspect-square rounded-full border-2 border-veryLight animate-[customSpin_20s_linear_infinite]`}
              style={{
                width: `${100 - (3 - domain.index) * 25}%`,
                animationDuration: `${animationDuration}ms`,
                animationDelay: `-${animationDelay}ms`,
                transformStyle: "preserve-3d",
              }}
            >
              <span
                className="absolute top-0 left-1/2 text-light text-sm xs:text-lg md:text-2xl animate-[centeredSpin_20s_linear_infinite]"
                style={{
                  animationDuration: `${animationDuration}ms`,
                  animationDelay: `-${animationDelay}ms`,
                }}
              >
                {domain.name}
              </span>
            </div>
          );
        })}
      </div>
      <h1 className="relative flex flex-col items-center gap-5 text-4xl xs:text-5xl md:text-7xl font-extrabold text-center">
        <span className="text-3xl xs:text-4xl md:text-6xl font-medium text-primary">
          Portfolio
        </span>
        <span>LOCHUS Cécile</span>
      </h1>
      <button
        type="button"
        className="relative bg-transparent border-none outline outline-2 w-6 h-10 rounded-xl"
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
