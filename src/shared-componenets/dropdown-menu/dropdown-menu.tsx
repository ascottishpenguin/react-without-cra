import { FC, useState } from "react";
import DropdownHeader from "./dropdown-header/dropdown-header";
import "./dropdown-menu.css";
import DropdownSelectors from "./dropdown-selectors/dropdown-selectors";

export const DropdownMenu: FC<{ selection: any[], returnSelected: (selectedId: string) => void}> = ({ selection, returnSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerSelect, setHeaderSelect] = useState('');
  let initialTitle = "";
  
  function capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const selectionData = selection?.map((selection, index) => {
    selection.name = capitalizeFirstLetter(selection.name);
    if (index === 0) {
      initialTitle = selection.name;
    }
    return selection;
  });


  const handleMenuClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectionClick = (category: string, selectionId: string) => {
    setHeaderSelect(category);
    returnSelected(selectionId);
    setIsOpen(false);
  };

  return (
    <>
      <div className="dropdownContainer">
        <DropdownHeader
          onChildClick={handleMenuClick}
          name={headerSelect ? headerSelect : initialTitle}
        ></DropdownHeader>
        <DropdownSelectors
          isOpen={isOpen}
          returnSelected={handleSelectionClick}
          selection={selectionData}
        ></DropdownSelectors>
      </div>
    </>
  );
};

export default DropdownMenu;
