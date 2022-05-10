import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Slider({ image, id, previous, next, text }: SliderProps) {
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <img src={image} className="w-full bg-cover bg-center" />
      <div className="absolute flex items-center justify-between transform -translate-y-1/2 left-0 right-0 top-1/2 bg-grad text-gray-50">
        <a
          href={`#slide${previous}`}
          className="btn btn-circle px-4 flex items-center justify-center bg-transparent border-0 text-2xl hover:text-white"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle px-4 flex items-center justify-center bg-transparent border-0 text-2xl hover:text-white"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </a>
      </div>
      <div className="absolute flex items-end transform p-4 pb-5 left-0 right-0 bottom-0 bg-grad text-white font-bold text-xl bg-opacity-50 bg-black">
        <span>{text}</span>
        <span>
          <small className="ml-4 font-light">Status</small>
        </span>
      </div>
    </div>
  );
}
