import { FC } from "react";
import './dropdown-header.css'

type DropdownHeaderProps = {
  name: string | undefined;
  onChildClick: React.MouseEventHandler<HTMLDivElement>;
};

export const DropdownHeader: FC<DropdownHeaderProps> = (props) => {
  const { name, onChildClick } = props;
  return (
    <div onClick={onChildClick} className="custom-select font-face-roboto">
      <p className="text">{name}</p>
      <div className="arrow-down"></div>
    </div>
  );
};

export default DropdownHeader;
