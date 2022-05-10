import { IconLink } from "./IconLink";
import {
  faBarsProgress,
  faCartShopping,
  faDollar,
  faEarthAmerica,
  faHouseChimney,
  faQuestionCircle,
  faTags,
} from "@fortawesome/free-solid-svg-icons";

export function Sidebar() {
  return (
    <aside
      className="lg:w-24 xl:w-1/4 h-full top-0 group lg:hover:w-96 transition-all duration-400 linear"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto pl-4 bg-gray-500">
        <ul className="space-y-4">
          <li>
            <IconLink
              className="text-gray-200 hover:text-white p-2"
              iconClasses="mr-4 w-8 h-8"
              href="#"
              icon={faHouseChimney}
              text="Home"
            />
          </li>
          <li>
            <IconLink
              className="text-gray-200 hover:text-white p-2"
              iconClasses="mr-4 w-8 h-8"
              href="#"
              icon={faBarsProgress}
              text="Lorem Ipsum"
            />
          </li>
          <li>
            <IconLink
              className="text-gray-200 hover:text-white p-2"
              iconClasses="mr-4 w-8 h-8"
              href="#"
              icon={faDollar}
              text="Lorem Ipsum"
            />
          </li>
          <li>
            <IconLink
              className="text-gray-200 hover:text-white p-2"
              iconClasses="mr-4 w-8 h-8"
              href="#"
              icon={faCartShopping}
              text="Lorem Ipsum"
            />
          </li>
          <li>
            <IconLink
              className="text-gray-200 hover:text-white p-2"
              iconClasses="mr-4 w-8 h-8"
              href="#"
              icon={faEarthAmerica}
              text="Lorem Ipsum"
            />
          </li>
          <li>
            <IconLink
              className="text-gray-200 hover:text-white p-2"
              iconClasses="mr-4 w-8 h-8"
              href="#"
              icon={faTags}
              text="Lorem Ipsum"
            />
          </li>
          <li>
            <IconLink
              className="text-gray-200 hover:text-white p-2"
              iconClasses="mr-4 w-8 h-8"
              href="#"
              icon={faQuestionCircle}
              text="Lorem Ipsum"
            />
          </li>
        </ul>
      </div>
    </aside>
  );
}
