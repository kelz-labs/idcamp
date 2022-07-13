import { useAtom } from "jotai";
import {
  filteredSearchAtom,
  filterSearchAtom,
  formDataAtom,
  isUpdateAtom,
  limitCharAtom,
  notesAtom,
} from "../../store";
import { generateId, showFormattedDate } from "../../utils/notes";
import { toast } from "react-toastify";
import Header from "../../components/atoms/header";
import TidakAda from "../../components/atoms/tidakAda";
import FormInput from "../../components/moleculs/formInput";
import ListNote from "../../components/moleculs/listNote";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [notes, setNotes] = useAtom(notesAtom);
  const [limitChar, setLimitChar] = useAtom(limitCharAtom);
  const [isUpdate, setIsUpdate] = useAtom(isUpdateAtom);
  const [formData, setFormData] = useAtom(formDataAtom);
  const [filterSearch, setFilterSearch] = useAtom(filterSearchAtom);
  const [filteredSearch] = useAtom(filteredSearchAtom);

  const handleChange = (event) => {
    let data = { ...formData };
    data[event.target.name] = event.target.value;
    setFormData(data);
  };

  const handleChangeJudul = (event) => {
    let data = { ...formData };
    data[event.target.name] = event.target.value.slice(0, 50);

    setFormData(data);

    if (event.target.value.length >= 0 && event.target.value.length <= 50) {
      setLimitChar(`Sisa Karakter: ${50 - event.target.value.length}`);
    } else {
      setLimitChar("Karakter melebihi batas!");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = [...notes];

    if (isUpdate.status) {
      data.forEach((note) => {
        if (note.id === isUpdate.id) {
          note.judul = formData.judul;
          note.keterangan = formData.keterangan;
        }
      });
    } else {
      data.push({
        id: generateId(),
        judul: formData.judul,
        keterangan: formData.keterangan,
        createdAt: showFormattedDate(),
      });
    }

    toast.success("🌸 Catatanmu berhasil ditambahkan!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });

    setNotes(data);
    setLimitChar(`Sisa Karakter: ${50}`);
    setFormData({ judul: "", keterangan: "", createdAt: "", archived: false });
    setIsUpdate({ id: null, status: false });
  };

  const editNote = (id) => {
    let data = [...notes];

    // cari datanya berdasarkan id
    let foundData = data.find((note) => note.id === id);

    // setFormData berdasarkan data yang kita temui
    setFormData({
      judul: foundData.judul,
      keterangan: foundData.keterangan,
      createdAt: foundData.createdAt,
    });

    // setIsUpdate status ke true
    setIsUpdate({ id: id, status: true });
  };

  const deleteNote = (id) => {
    let data = [...notes];
    let filteredData = data.filter((note) => note.id !== id);

    setNotes(filteredData);

    toast.success("🌸 Catatanmu berhasil dihapus!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  };

  return (
    <>
      <Header filterSearch={filterSearch} setFilterSearch={setFilterSearch} />
      <div className="w-full flex justify-center mt-5 items-center flex-col">
        <FormInput
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
          limitChar={limitChar}
          handleChangeJudul={handleChangeJudul}
        />
      </div>
      {notes == "" ? (
        <TidakAda />
      ) : (
        <ListNote
          editNote={editNote}
          deleteNote={deleteNote}
          filteredSearch={filteredSearch}
        />
      )}
    </>
  );
};

export default Home;
