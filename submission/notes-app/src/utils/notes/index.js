export const generateId = () => {
  return +new Date();
};

export const showFormattedDate = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date().toLocaleDateString("id-ID", options);
};

export const initialDataNotes = [
  {
    id: generateId() + 1,
    judul: "Babel",
    keterangan:
      "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: "Senin, 14 April 2020",
    archived: false,
  },
  {
    id: generateId() + 2,
    judul: "Functional Component",
    keterangan:
      "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: "Senin, 14 April 2020",
    archived: false,
  },
  {
    id: generateId() + 3,
    judul: "Modularization",
    keterangan:
      "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: "Senin, 14 April 2020",
    archived: false,
  },
  {
    id: generateId() + 4,
    judul: "Lifecycle",
    keterangan:
      "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: "Senin, 14 April 2020",
    archived: false,
  },
  {
    id: generateId() + 5,
    judul: "ESM",
    keterangan:
      "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: "Senin, 14 April 2020",
    archived: false,
  },
  {
    id: generateId() + 6,
    judul: "Module Bundler",
    keterangan:
      "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: "Senin, 14 April 2020",
    archived: false,
  },
];
