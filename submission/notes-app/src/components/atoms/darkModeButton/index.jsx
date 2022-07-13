import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkModeButton = ({ changeMode, darkMode }) => {
  return (
    <div className="p-4 fixed top-0 right-0">
      <button
        className=" p-3 bg-gray-200 dark:bg-gray-800 rounded-full"
        onClick={changeMode}
      >
        {darkMode === "dark" ? (
          <MdLightMode size="22" />
        ) : (
          <MdDarkMode size="22" />
        )}
      </button>
    </div>
  );
};

export default DarkModeButton;
