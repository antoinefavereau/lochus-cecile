import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SliceInTextProps {
  addRef?: (ref: RefObject<HTMLDivElement | null>) => void;
  triggerRef?: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}

export default function SliceInText({
  addRef,
  triggerRef,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & SliceInTextProps) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxRef.current) return;

    if (addRef) {
      addRef(boxRef);
    } else {
      gsap.from(boxRef.current, {
        y: 100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerRef?.current || boxRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    }
  }, [addRef, triggerRef]);

  return (
    <span className="relative overflow-hidden">
      <div ref={boxRef} {...props}>
        {children}
      </div>
    </span>
  );
}
