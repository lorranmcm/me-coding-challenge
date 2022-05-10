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
    <aside className="z-0 absolute w-72 h-full -top-0" aria-label="Sidebar">
      <div className="h-full overflow-y-auto py-24 px-3 bg-gray-500">
        <ul className="space-y-4">
          <li>
            <IconLink
              className="text-gray-200 hover:text-white hover:bg-gray-600 p-2 rounded-md"
              iconClasses="mr-4 w-8 h-8"
              href="#"
              icon={faHouseChimney}
              text="Home"
            />
          </li>
          <li>
            <IconLink
              className="text-gray-200 hover:text-white hover:bg-gray-600 p-2 rounded-md"
              iconClasses="mr-4 w-8 h-8"
              href="#"
              icon={faBarsProgress}
              text="Lorem Ipsum"
            />
          </li>
          <li>
            <IconLink
              className="text-gray-200 hover:text-white hover:bg-gray-600 p-2 rounded-md"
              iconClasses="mr-4 w-8 h-8"
              href="#"
              icon={faDollar}
              text="Lorem Ipsum"
            />
          </li>
          <li>
            <IconLink
              className="text-gray-200 hover:text-white hover:bg-gray-600 p-2 rounded-md"
              iconClasses="mr-4 w-8 h-8"
              href="#"
              icon={faCartShopping}
              text="Lorem Ipsum"
            />
          </li>
          <li>
            <IconLink
              className="text-gray-200 hover:text-white hover:bg-gray-600 p-2 rounded-md"
              iconClasses="mr-4 w-8 h-8"
              href="#"
              icon={faEarthAmerica}
              text="Lorem Ipsum"
            />
          </li>
          <li>
            <IconLink
              className="text-gray-200 hover:text-white hover:bg-gray-600 p-2 rounded-md"
              iconClasses="mr-4 w-8 h-8"
              href="#"
              icon={faTags}
              text="Lorem Ipsum"
            />
          </li>
          <li>
            <IconLink
              className="text-gray-200 hover:text-white hover:bg-gray-600 p-2 rounded-md"
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
