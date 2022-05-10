import image1 from "../assets/img-mock-1.jpg";
import image2 from "../assets/img-mock-2.jpg";
import image3 from "../assets/img-mock-3.jpg";
import { RCalendar } from "../components/RCalendar";
import { RCarousel } from "../components/RCarousel";

export function Home() {
  return (
    <>
      <div className="flex flex-row gap-6">
        <RCarousel image1={image1} image2={image2} image3={image3} />
        <RCalendar />
      </div>
    </>
  );
}
