import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  
  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifApp</h1>

      {/* Input */}
      <AddCategory onNewValue={(value) => onAddCategory(value)}/>

      {/* Listado de Gifs */}
      
      <ol>
        {categories.map(category => <li key={category}>{category}</li>)}
      </ol>
        {/* Gifs Items */}
    </>
  );
}
