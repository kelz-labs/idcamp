import Note from "../../atoms/note";

const ListNote = ({ editNote, deleteNote, filteredSearch }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 w-full grid-rows-1">
        <Note
          editNote={editNote}
          deleteNote={deleteNote}
          filteredSearch={filteredSearch}
        />
      </div>
    </div>
  );
};

export default ListNote;
