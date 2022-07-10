// Data structure

// 1. Object
let obj = [];

obj.push(1, 2, 3, 4);
console.log(obj);

obj.pop();
console.log(obj);

// mengubah dari array ke object dengan Object.assign();
let arr = Object.assign({}, obj);
console.log(arr);

const siswa = {
  nama: "Budi",
  umur: 16,
  tinggi: 180,
};

siswa.sekolah = "SMKN 2 PKP";
console.log(siswa);

// menghapus object
delete siswa.sekolah;
console.log(siswa);

// 2. Array
let myArray = ["True mint", true, false, "Apa iya"];
console.log(myArray.length);

// manipulasi array

// - Dengan push dan pop
myArray.push("Mengoding di pantai"); // Masukin data baru ke dalam array yang akan diletakin di akhir
myArray.pop(); // Ngehapus atau ngeluarin data dari urutan akhir

// - Dengan shift dan unshift
myArray.shift("Shift"); // Masukin data baru ke dalam array yang akan diletakin di awal
myArray.unshift(); // Masukin data barur ke dalam array dari urutan awal

// - Dengan delete
delete myArray[1]; // menghapus data di dalam array, tapi tetap meninggalkan elemen kosong
console.log(myArray); // [ true, <1 empty item>, 'Apa iya' ]

// - Dengan splice
// splice(mulaiDariIndexBerapa, sampaiIndexBerapa)
myArray.splice(1, 2);
console.log(myArray); // [ true ]
