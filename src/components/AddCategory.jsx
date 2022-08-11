import { useState } from "react";

export const AddCategory = ({ onNewValue }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => setInputValue(target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    const newInputValue = inputValue.trim();
    if(newInputValue.length <= 1) return;
    onNewValue(newInputValue);
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
