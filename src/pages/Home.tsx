import image1 from "../assets/img-mock-1.jpg";
import image2 from "../assets/img-mock-2.jpg";
import image3 from "../assets/img-mock-3.jpg";
import shopping from "../assets/shopping.png";
import { ProductCard } from "../components/ProductCard";
import { RCalendar } from "../components/RCalendar";
import { Carousel } from "../components/Carousel/Carousel";

const carouselImages: SliderProps[] = [
  { image: image1, id: 1, previous: 3, next: 2, text: "Campanha Copa 2014" },
  { image: image2, id: 2, previous: 1, next: 3, text: "Campanha Copa 2014" },
  { image: image3, id: 3, previous: 2, next: 1, text: "Campanha Copa 2014" },
];

const products: ProductCardProps[] = [
  {
    barCode: "#COD63021",
    description: "Papel Sulfite 75g Alcalino 210x297",
    image: shopping,
    price: "15,90",
  },
  {
    barCode: "#COD63021",
    description: "Papel Sulfite 75g Alcalino 210x297",
    image: shopping,
    price: "15,90",
  },
  {
    barCode: "#COD63021",
    description: "Papel Sulfite 90g Alcalino 210x297",
    image: shopping,
    price: "31,99",
  },
];

export function Home() {
  return (
    <div className="flex flex-col gap-6 h-full ">
      <div className="flex flex-row gap-6 h-2/5 pb-2">
        <Carousel objects={carouselImages} />
        <RCalendar />
      </div>
      <div className="flex flex-row items-stretch gap-6 h-2/5">
        {products.map((object: ProductCardProps, index: number) => (
          <ProductCard
            key={index}
            barCode={object.barCode}
            image={object.image}
            description={object.description}
            price={object.price}
          />
        ))}
      </div>
    </div>
  );
}
