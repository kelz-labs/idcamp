const SearchNote = ({ filterSearch, setFilterSearch }) => {
  return (
    <input
      placeholder="Cari berdasarkan judul...."
      value={filterSearch}
      onChange={(event) => setFilterSearch(event.target.value)}
      className="block font-semibold py-2.5 mt-3 text-gray-900 bg-transparent border-2 focus:border-4 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 p-3 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    />
  );
};

export default SearchNote;
