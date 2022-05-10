import {
  faArrowRightFromBracket,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconLink } from "./IconLink";

interface ProfileModalProps {
  visibility?: boolean;
}

export function ProfileModal({ visibility }: ProfileModalProps) {
  return (
    <div
      className={`${
        visibility ? "" : "hidden "
      }flex flex-col text-gray-600 rounded-sm absolute py-4 px-6 bg-white shadow-md top-16 right-0`}
    >
      <div className=" flex flex-row gap-4 ">
        <div className="flex flex-none items-center justify-center h-20 w-20 rounded-full bg-blue-200">
          <span className="text-4xl text-white">JS</span>
        </div>
        <div className="flex flex-col gap-2 grow">
          <p>João da Silva</p>
          <p className="w-max text-gray-400">Último acesso: 10/10/15 09:39</p>
          <div className="flex flex-col">
            <a href="#">Alterar Cadastro</a>
            <a href="#">Alterar Senha</a>
          </div>
        </div>
      </div>
      <div className="flex place-content-between pt-6">
        <IconLink
          iconClasses="mr-2"
          text="Suporte Online"
          icon={faComments}
          href="#"
        />
        <IconLink
          iconClasses="mr-2"
          text="Logout"
          icon={faArrowRightFromBracket}
          href="#"
        />
      </div>
    </div>
  );
}
