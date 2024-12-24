export default function Hero() {
  const domains = [
    "Audiovisuel",
    "UI/UX Design",
    "Design graphique",
    "Social Média",
  ];

  return (
    <section className="relative flex flex-col items-center justify-center h-screen">
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        {domains.map((domain, index) => (
          <div
            key={domain}
            className={`absolute rounded-full border-2 border-light animate-[customSpin_20s_linear_infinite]`}
            style={{
              width: `${(index + 3) * 200}px`,
              height: `${(index + 3) * 200}px`,
              animationDuration: `${20000 + index * 2000}ms`,
            }}
          >
            <span
              className="absolute top-0 left-1/2 bg-background animate-[centeredSpin_20s_linear_infinite]"
              style={{
                animationDuration: `${20000 + index * 2000}ms`,
              }}
            >
              {domain}
            </span>
          </div>
        ))}
      </div>
      <h1 className="relative flex flex-col items-center gap-5 text-7xl font-extrabold text-center">
        <span className="text-6xl font-medium text-primary">Portfolio</span>
        <span>LOCHUS Cécile</span>
      </h1>
    </section>
  );
}
