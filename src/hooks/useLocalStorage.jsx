import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const localData = localStorage.getItem(key);
    return localData ? JSON.parse(localData) : initialValue;
  });

  const setFavoriteCharacters = (characterData) => {
    const foundValue = storedValue.find((value) => {
      return value.id === characterData.id;
    });
    const storedValueCopy = [...storedValue];
    if (!foundValue) {
      storedValueCopy.push(characterData);
      setStoredValue(storedValueCopy);
      localStorage.setItem(key, JSON.stringify(storedValueCopy));
    } else {
      const indexToRemove = storedValueCopy.findIndex((value) => {
        return value.id === characterData.id;
      });
      if (indexToRemove > -1) {
        storedValueCopy.splice(indexToRemove, 1);
      }
      setStoredValue(storedValueCopy);
      localStorage.setItem(key, JSON.stringify(storedValueCopy));
    }
  };
  return [storedValue, setFavoriteCharacters];
};

export default useLocalStorage;
