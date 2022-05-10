import React from "react";
import { Link } from "react-router-dom";
interface Props {
  label: string;
  icon?: (props: React.ComponentProps<"svg">) => JSX.Element;
  color?: string;
}
function NavItemBase({ icon: Icon, label, color }: Props) {
  const handleRightClick: React.HTMLAttributes<HTMLDivElement>["onContextMenu"] =
    (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

  return (
    <div
      className="transition duration-200 hover:bg-[#e9e9e9] p-2 px-4 flex items-center rounded-md"
      onContextMenu={handleRightClick}
    >
      {/* <div className="w-[3px] bg-[#005fb8] h-3 rounded-md mr-2" /> */}
      {Icon && <Icon className="h-5 w-5 mr-3" color={color} />}
      <span>{label}</span>
    </div>
  );
}

export interface NavLinkProps extends Props {
  to: string;
}
export function NavLink({ to, ...props }: NavLinkProps) {
  return (
    <li>
      <Link {...{ to }}>
        <NavItemBase {...props} />
      </Link>
    </li>
  );
}

export default NavItemBase;
