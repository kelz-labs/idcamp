/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

let evenNumber = [];

for (let i = 1; i <= 100; i++) {
  // logicnya: bilangan genap pasti bisa dibagi 2, maka dari itu i modulus 2 == 0
  if (i % 2 == 0) {
    evenNumber.push(i);
  }
}
