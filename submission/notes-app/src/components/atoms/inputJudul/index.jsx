const InputJudul = ({ formData, limitChar, handleChangeJudul }) => {
  return (
    <div className="relative w-full mb-6 group">
      <input
        type="text"
        name="judul"
        value={formData.judul}
        onChange={handleChangeJudul}
        className="block text-lg font-semibold py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        required
      />
      <div className="flex justify-between mt-2">
        <label htmlFor="name">Judul</label>
        <p>{limitChar}</p>
      </div>
    </div>
  );
};

export default InputJudul;
