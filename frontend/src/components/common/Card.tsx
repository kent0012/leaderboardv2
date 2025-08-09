import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="relative flex flex-col text-white bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-lg">
      {children}
    </div>
  );
}