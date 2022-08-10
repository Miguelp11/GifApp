import { useState } from "react"

export const AddCategory = ({ AddCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => setInputValue(target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length <= 1) return;
    AddCategory(categories => [inputValue, ...categories]);
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
