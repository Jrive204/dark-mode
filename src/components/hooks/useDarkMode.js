import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, intialValue) => {
  const [darkmode, setDarkmode] = useLocalStorage(key, intialValue);

  const toggleMode = e => {
    e.preventDefault();
    setDarkmode(!darkmode);
  };
  useEffect(() => {
    if (darkmode === false) {
      document.querySelector("body").classList.remove("dark-mode");
    }
    if (darkmode === true) {
      document.querySelector("body").classList.toggle("dark-mode");
    }
  }, [darkmode]);
  return [darkmode, toggleMode];
};
