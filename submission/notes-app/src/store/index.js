import { atom } from "jotai";
import { initialDataNotes } from "../utils/notes";

export const notesAtom = atom(initialDataNotes);
export const limitCharAtom = atom(`Jumlah Karakter: ${0}`);
export const isUpdateAtom = atom({ id: null, status: false });

export const formDataAtom = atom({
  id: "",
  judul: "",
  keterangan: "",
  createdAt: "",
  archived: false,
});

export const filterSearchAtom = atom("");

export const filteredSearchAtom = atom((get) =>
  get(notesAtom).filter((note) =>
    note.judul.toLowerCase().includes(get(filterSearchAtom).toLowerCase())
  )
);
