"use client";
import { CardStack } from "../../components/ui/card-stack";
import { cn } from "@/lib/utils";

export function CardStackDemo() {
  return (
    <div className="h-auto flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Kris Steigerwald",
    designation: "Product Designer",
    content: (
      <p>
        Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum
        bibendum ipsum massa cursus aliquet feugiat.
      </p>
    ),
  },
  {
    id: 1,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: <p>These cards are amazing. Framer motion is a godsend!</p>,
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of Fight Club is that you do not talk about Fight Club.
      </p>
    ),
  },
];
