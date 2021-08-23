// CatImage.tsx
import React, { FC, useState } from "react";
import { getCategories } from "./get-cats-service/get-category";
import { CatImageType, catsCatsCats } from "./get-cats-service/get-cats";
import DropdownMenu from "./shared-componenets/dropdown-menu/dropdown-menu";
import "./App.css";

export const App: FC = () => {
  const catService = new catsCatsCats();
  const categories = getCategories();

 
  const [category, setCategory] = useState({category: ''});
  const catsByCategory = catService.getCatsByCategory(category);

  const catPics = catsByCategory?.map((cat) => {
    return <img key={cat.id} src={cat.url}></img>;
  });
  const catCategories = categories?.map((category) => {
    return {
      id: category.id,
      name: category.name,
    };
  });

  const updateSelectedCategory = (categoryId: string) => {
    setCategory({category: categoryId});
  };
  return (
    <>
      {catCategories ? (
        <>
          <DropdownMenu
            selection={catCategories}
            returnSelected={updateSelectedCategory}
          ></DropdownMenu>
          <div className="crop">
          {catPics}
          </div>
        </>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default App;
