import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PropsIconLink = {
  className?: string;
  href: string;
  icon: IconDefinition;
  text: string;
  iconClasses?: string;
};

export const IconLink: React.FC<PropsIconLink> = ({
  className,
  href,
  icon,
  text,
  iconClasses,
}) => {
  return (
    <a className={`${className} flex items-center`} href={href}>
      <FontAwesomeIcon className={iconClasses} icon={icon} />
      {text}
    </a>
  );
};
