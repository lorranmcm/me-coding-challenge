type SliderProps = {
  image: string;
  id: number;
  previous: number;
  next: number;
  text: string;
};

type CarouselProps = {
  objects: SliderProps[];
};
