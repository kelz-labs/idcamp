const newElement = document.createElement("li");
newElement.innerText = "test";

const daftar = document.getElementById("daftar");

// append child
daftar.appendChild(newElement);

// insert before
// menerima 2 argumen
// insertBefore(elementAwal, itemAwal);
const elementAwal = document.createElement("li");
elementAwal.innerText = "Hidupkan insert before";

const itemAwal = document.getElementById("awal");
itemAwal.insertBefore(elementAwal, itemAwal);
