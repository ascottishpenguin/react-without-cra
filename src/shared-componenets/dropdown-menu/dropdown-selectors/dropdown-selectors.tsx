import React, { FC } from "react";
import "./dropdown-selectors.css";

type DropdownSelectorsProps = {
  selection: any[];
  returnSelected: (selected: string, selectedId: string) => void;
  isOpen: boolean;
};

export const DropdownSelectors: FC<DropdownSelectorsProps> = (props) => {
  const { selection, returnSelected, isOpen } = props;
  const handleClick = (name: string, index: string) => {
    returnSelected(name, index);
  };
  const selectionDivs = selection.map((data, index) => {
    return (
      <div
        onClick={() => handleClick(data.name, data.id)}
        className={isOpen ? "select" : "select-hide"}
        key={index}
      >
        {data.name}
      </div>
    );
  });

  return <div>{selectionDivs}</div>;
};

export default DropdownSelectors;
