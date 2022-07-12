const Note = ({ editNote, deleteNote, filteredSearch }) => {
  return (
    <>
      {filteredSearch.map((note, index) => (
        <div
          className="bg-slate-50 shadow-md p-4 hover:scale-105 duration-200 transition rounded-md flex flex-col justify-center items-center sm:justify-start sm:items-start cursor-pointer"
          key={index + 1}
        >
          <h2 className="mb-1 font-bold">ID: {note.id}</h2>
          <p className="mb-1 font-bold">Judul: {note.judul}</p>
          <p className="mb-1 font-bold">Tanggal: {note.createdAt}</p>
          <p className="font-bold mb-1">
            Keterangan: <span className="font-medium">{note.keterangan}</span>
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => editNote(note.id)}
              className="bg-rose-400 hover:bg-rose-500 focus:border-2 duration-300 transition focus:border-blue-500 px-4 py-2 font-bold rounded-md text-white"
            >
              Edit
            </button>
            <button
              onClick={() => deleteNote(note.id)}
              className="bg-rose-400 hover:bg-rose-500 focus:border-2 duration-300 transition focus:border-blue-500 px-4 py-2 font-bold rounded-md text-white"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Note;
