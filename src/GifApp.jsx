import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  
  const onAddCategory = () => {
    setCategories(['Nuevo', ...categories]);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifApp</h1>

      {/* Input */}
      <AddCategory AddCategory={setCategories}/>

      {/* Listado de Gifs */}
      
      <ol>
        {categories.map(category => <li key={category}>{category}</li>)}
      </ol>
        {/* Gifs Items */}
    </>
  );
}
