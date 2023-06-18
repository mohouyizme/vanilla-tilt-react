import React, { HTMLAttributes, ReactNode, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { TiltProps } from "./Tilt.types";

type Props = {
  children: ReactNode;
  options: TiltProps;
} & HTMLAttributes<HTMLDivElement>;

export default function Tilt({ children, options, ...props }: Props) {
  const tilt = useRef<(HTMLDivElement & { destoy: () => void }) | null>(null);

  useEffect(() => {
    if (tilt.current !== null) {
      VanillaTilt.init(tilt.current, options);
    }

    return () => {
      if (tilt.current) {
        // @ts-ignore
        tilt.current.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div ref={tilt} {...props}>
      {children}
    </div>
  );
}
