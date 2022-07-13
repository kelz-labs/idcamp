import { useDarkMode } from "../../../hooks/useDarkMode";
import SearchNote from "../searchNote";
import DarkModeButton from "../darkModeButton";

const Header = ({ filterSearch, setFilterSearch }) => {
  const [darkMode, setDarkMode] = useDarkMode();
  const changeMode = () => setDarkMode(darkMode === "dark" ? "light" : "dark");

  return (
    <header className="w-full flex items-center flex-col md:flex-row justify-center md:justify-between">
      <h1 className="text-center font-bold text-3xl">notes.app</h1>
      <DarkModeButton darkMode={darkMode} changeMode={changeMode} />
      <SearchNote
        filterSearch={filterSearch}
        setFilterSearch={setFilterSearch}
      />
    </header>
  );
};

export default Header;
