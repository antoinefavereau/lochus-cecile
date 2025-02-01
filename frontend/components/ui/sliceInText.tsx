import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

interface SliceInTextProps {
  animationRef?: React.RefObject<HTMLDivElement | null>;
  triggerRef?: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}

export default function SliceInText({
  animationRef,
  triggerRef,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & SliceInTextProps) {
  const pathName = usePathname();

  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!boxRef.current) return;

    if (!animationRef) {
      gsap.from(boxRef.current, {
        y: "100%",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerRef?.current || boxRef.current,
          scroller: document.body,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    ScrollTrigger.refresh();
  }, [pathName]);

  return (
    <div className="relative overflow-hidden">
      <div ref={animationRef || boxRef} {...props}>
        {children}
      </div>
    </div>
  );
}
