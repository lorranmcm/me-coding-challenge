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
      <span className="flex items-center h-16 sm:max-w-0 xl:max-w-xl overflow-hidden sm:group-hover:max-w-xl md:group-hover:max-w-xl lg:group-hover:max-w-xl transition-all duration-400 linear">
        <span>{text}</span>
      </span>
    </a>
  );
};
