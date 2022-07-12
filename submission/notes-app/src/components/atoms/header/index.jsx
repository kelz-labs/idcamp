import SearchNote from "../searchNote";

const Header = ({ filterSearch, setFilterSearch }) => {
  return (
    <header className="w-full flex items-center flex-col md:flex-row justify-center md:justify-between">
      <h1 className="text-center font-bold text-3xl">notes.app</h1>
      <SearchNote
        filterSearch={filterSearch}
        setFilterSearch={setFilterSearch}
      />
    </header>
  );
};

export default Header;
