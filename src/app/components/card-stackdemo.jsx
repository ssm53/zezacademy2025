"use client";
import { CardStack } from "../../components/ui/card-stack";

export function CardStackDemo() {
  const CARDS = [
    {
      id: 0,
      name: "Kris Steigerwald",
      designation: "Product Designer",
      videoUrl: "https://www.youtube.com/embed/HF0iqQ2ZzFU",
      description:
        "Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.",
    },
    {
      id: 1,
      name: "Manu Arora",
      designation: "Senior Software Engineer",
      videoUrl: "https://www.youtube.com/embed/HF0iqQ2ZzFU",
      description:
        "Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.Lorem ipsum dolor amet consectetur pellentesque scelerisqueLorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 2,
      name: "Tyler Durden",
      designation: "Manager Project Mayhem",
      videoUrl: "https://www.youtube.com/embed/HF0iqQ2ZzFU",
      description:
        "Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.Lorem ipsum dolor amet consectetur pellentesque scelerisqueLorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <div className="h-auto flex items-center justify-center  ">
      <CardStack items={CARDS} />
    </div>
  );
}
