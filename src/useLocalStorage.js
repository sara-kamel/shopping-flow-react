import { useState, useEffect } from "react";


function useLocalStorage(key) {
  const [items, setItems] = useState(() => {
    const locelStorge = localStorage.getItem(key);
    if (locelStorge) {
      return JSON.parse(locelStorge);
    }
    return [];
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(items));
    setItems(items);
  }, [items]);

  return {
    items,
    setItems,
  };
}
export default useLocalStorage;
