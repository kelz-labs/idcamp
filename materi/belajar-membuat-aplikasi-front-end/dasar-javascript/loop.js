// Looping

// for of
let num = [1, 2, 3, 4, 5];

for (const arr of num) {
  console.log(arr);
}

// while
// akan mengeksekusi blok syarat sebelum melakukan perintah
let i = [9, 8, 7, 6];

while (i.length > 1) {
  console.log(i);
}

// do while
// mengeksuksi perintah dulu baru blok syaratnya

do {
  console.log(i);
} while (
  i.reduce((accumulator, currentValue) => accumulator + currentValue) <= 10
);
