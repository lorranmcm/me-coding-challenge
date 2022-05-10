import profile from "../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface ProfileSettingsProps {
  onClick: (any: any) => void;
}

export function ProfileSettings({ onClick }: ProfileSettingsProps) {
  return (
    <div className="flex items-center text-gray-500 gap-2">
      <img src={profile} className="h-9 w-auto " alt="Foto do usuário" />
      <div className="flex flex-col items-start">
        <span className="text-sm -mb-1">Bem vindo,</span>
        <span className="font-bold">João da Silva</span>
      </div>
      <button onClick={onClick} className="h-8 w-8 ml-4">
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
    </div>
  );
}
