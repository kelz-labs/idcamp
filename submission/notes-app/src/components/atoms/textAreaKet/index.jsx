const TextAreaKet = ({ formData, handleChange }) => {
  return (
    <div className="relative w-full my-6 group">
      <textarea
        type="text"
        name="keterangan"
        value={formData.keterangan}
        onChange={handleChange}
        className="block text-lg font-semibold h-24 py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        required
      />
      <div className="mt-2">
        <label htmlFor="keterangan">Keterangan</label>
      </div>
    </div>
  );
};

export default TextAreaKet;
