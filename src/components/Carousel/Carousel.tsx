import { Slider } from "./Slider";

export function Carousel({ objects }: CarouselProps) {
  return (
    <div className="carousel w-full h-80">
      {objects.map((object: any, index: number) => (
        <Slider
          key={index}
          image={object.image}
          id={object.id}
          next={object.next}
          previous={object.previous}
          text={object.text}
        />
      ))}
    </div>
  );
}
