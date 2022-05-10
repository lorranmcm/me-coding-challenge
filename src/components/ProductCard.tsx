import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ProductCard({
  barCode,
  image,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="p-4 flex h-full flex-col bg-white shadow-sm rounded-sm text-gray-600 w-1/3 place-content-between">
      <div className="flex flex-col gap-3">
        <span className="font-bold">{barCode}</span>
        <img className="h-32 w-32 bg-cover" src={image} alt={description} />
        <p>{description}</p>
        <span className="text-5xl font-bold pb-4">{price}</span>
      </div>
      <a
        href="#"
        className="flex flex-row items-center justify-center bg-blue-400 text-white h-12 px-4 py-2 shadow-sm gap-2 font-semibold"
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        CARRINHO
      </a>
    </div>
  );
}
