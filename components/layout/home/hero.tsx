import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-16 h-screen">
      <Image
        className="absolute max-w-none w-[240vw] xs:w-[200vw] md:w-[140vw] lg:w-[120vw] top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
        src="/ellipses.svg"
        alt="ellipses"
        width={1920}
        height={1080}
      />
      <h1 className="relative flex flex-col items-center gap-5 pt-16 text-4xl xs:text-5xl md:text-7xl font-extrabold text-center">
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
