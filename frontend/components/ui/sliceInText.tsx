import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function SliceInText({
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { children: React.ReactNode }) {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!boxRef.current) return;

    const box = boxRef.current;

    gsap.from(box, {
      y: 100,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: boxRef.current,
        toggleActions: "restart none restart none",
      },
    });
  });
  return (
    <span className="relative overflow-hidden">
      <div ref={boxRef} {...props}>
        {children}
      </div>
    </span>
  );
}
