import image1 from "../assets/img-mock-1.jpg";
import image2 from "../assets/img-mock-2.jpg";
import image3 from "../assets/img-mock-3.jpg";
import { ProductCard } from "../components/ProductCard";
import { RCalendar } from "../components/RCalendar";
import { Carousel } from "../components/Carousel/Carousel";

const carouselImages: SliderProps[] = [
  { image: image1, id: 1, previous: 3, next: 2, text: "Campanha Copa 2014" },
  { image: image2, id: 2, previous: 1, next: 3, text: "Campanha Copa 2014" },
  { image: image3, id: 3, previous: 2, next: 1, text: "Campanha Copa 2014" },
];

export function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row gap-6">
        <Carousel objects={carouselImages} />
        <RCalendar />
      </div>
      <div className="flex flex-row gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
