import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CarouselProps = {
  image1: string;
  image2: string;
  image3: string;
};

export function RCarousel({ image1, image2, image3 }: CarouselProps) {
  return (
    <>
      <Carousel>
        <div>
          <img src={image1} />
          <p className="legend">
            Campanha Copa 2014 <small>Status</small>
          </p>
        </div>
        <div>
          <img src={image2} />
          <p className="legend">
            Campanha Copa 2014 <small>Status</small>
          </p>
        </div>
        <div>
          <img src={image3} />
          <p className="legend">
            Campanha Copa 2014 <small>Status</small>
          </p>
        </div>
      </Carousel>
    </>
  );
}
