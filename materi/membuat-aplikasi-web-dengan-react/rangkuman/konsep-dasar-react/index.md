Anda sudah berada di akhir modul Konsep Dasar React. Semoga materi yang kami berikan dapat mengantarkan Anda menjadi React Developer yang andal. Di modul selanjutnya, kami akan menjelaskan bagaimana cara membangun antarmuka pengguna dengan React. Kita akan praktik langsung melalui sebuah studi kasus aplikasi yang akan dijelaskan nanti.

Untuk memantapkan pengetahuan pada modul Konsep Dasar React, kami telah merangkum beberapa poin penting.



React Element dan Component
Element merupakan blok terkecil dalam membangun antarmuka di aplikasi React. Seluruh UI yang tampak, merupakan sebuah element. Element dapat berupa paragraph, button, image, dan tipe lainnya. 

Component merupakan sebuah fungsi JavaScript yang mengembalikan React element. Dengan menggunakan component, Anda dapat membuat element yang reusable.



Composition
Composition atau komposisi merupakan proses menggabungkan banyak fungsi untuk menciptakan data yang lebih kompleks. Di React, komposisi sering dipraktikkan ketika membuat sebuah komponen. Alih-alih mengembalikan data, React component mengembalikan UI.

Function Composition
Component Composition
function getProfilePicture(userId) {
 return `https://avatars.githubusercontent.com/u/${userId}`;
}
 
function getProfileLink(username) {
 return `https://github.com/${username}`;
}
 
 
function getGithubInfo(username, userId) {
 return {
   profilePicture: getProfilePicture(userId),
   profileLink: getProfileLink(username),
 };
}
 
console.log(getGithubInfo('dimasmds', 25724809));
 
/**
* output:
 {
   profilePicture: 'https://avatars.githubusercontent.com/u/25724809',
   profileLink: 'https://github.com/dimasmds'
 }
*/
Komposisi merupakan language agnostic dan menjadi konsep umum pada dunia pemrograman. Intuisi dalam mempraktikkan komposisi secara alami akan sama dengan bahasa pemrograman apa pun. Jika Anda berpengalaman mempraktikkan komposisi pada bahasa pemrograman Python, intuisi Anda bisa digunakan juga ketika membuat React component.



Declarative Code
Salah satu konsep yang ada di React adalah menulis kode secara deklaratif. Mungkin Anda pernah mendengar istilah tersebut dan membandingkannya dengan kode imperatif. Berikut pengertiannya.

Imperatif : Penulisan kode yang menjelaskan secara detail langkah demi langkah untuk mencapai tujuan.

Deklaratif : Penulisan kode yang ringkas dan jelas dengan mendeklarasikan apa yang ingin dicapai tanpa menuliskan langkah demi langkah.

Berikut perbandingan antara kode imperatif dan deklaratif dalam melakukan pekerjaan yang sama.

Imperatif
Deklaratif
const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];
const uppercaseNames = [];
 
for (let i = 0; i < names.length; i++) {
 uppercaseNames[i] = names[i].toUpperCase();
}
 
console.log(uppercaseNames);
 
/**
* output:
*
* [ 'ASEP', 'ALEX', 'BAGUS', 'CIKA', 'DONI' ]
*/
React sendiri menerapkan gaya deklaratif baik dari standar yang mereka tetapkan atau konvensi ketika menggunakannya. Contohnya, ketika membuat antarmuka daftar atau menetapkan sebuah event pada element.

Membangun UI List
Menetapkan event
function Contacts() {
 const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];
 
 return (
   <ol className='contacts'>
     {names.map((name) => <li>{name}</li>)}
   </ol>
 );
}


Unidirectional Data Flow
Sebelum React, Front-End Framework seperti Angular menggunakan pola two-way data binding untuk aliran data agar ia tetap sinkron dengan DOM (tampilan aplikasi). Pola aliran data ini sebenarnya ciamik, tetapi terkadang menyulitkan ketika aplikasi sudah bertambah besar. Karena tak jarang developer bingung dari mana sebetulnya pembaruan data berasal.

Berbeda halnya dengan React, aliran data di React bersifat unidirectional atau searah dari parent component (komponen induk) ke child component (komponen anak).

dos:69d896e8ed5086b263327b24a65142e920220412134802.jpeg

Di React, data terletak di parent component dan bila child component membutuhkannya, data tersebut akan dikirim dari parent component. Ketika terjadi perubahan data, parent component-lah yang dapat memperbarui datanya, karena memang datanya berada di sana. Child hanya bisa mengirimkan data terbaru yang perlu diperbarui oleh parent component.

Simak struktur komponen berikut.

<Delivery>
 
  <LocationPicker>
   <OriginPicker />
   <DestinyPicker />
 </LocationPicker>
 
  <input type="number"/>
</Delivery>
Dari struktur di atas bisa disimpulkan bahwa komponen Delivery dan LocationPicker menampung data dan bertanggung jawab untuk memperbaruinya bila terjadi perubahan. Berikut penjelasannya.

Delivery: Karena komponen Delivery merupakan parent dan menampung seluruh child component yang membentuk antarmuka pengiriman, ia cocok untuk memiliki seluruh data pengiriman dan juga bertanggung jawab untuk memperbaruinya.

LocationPicker:  Walaupun LocationPicker menerima data dari induknya, ternyata ia juga merupakan parent component dan sangat masuk akal bila menampung data yang dibutuhkan oleh kedua child component di dalamnya.



React is Just JavaScript
Meskipun terdengar kontroversial, “React hanyalah JavaScript” ada benarnya juga. Kami memiliki dua alasan mengapa demikian.

Tingkat abstraksi yang dibuat React sebenarnya dangkal. Anda tidak perlu mengingat banyak API baru ketika menggunakan React.
React tidak membuat fungsionalitas baru bila sudah bisa dilakukan oleh JavaScript secara standar.
Aplikasi React dibangun dari hal yang sebenarnya Anda sudah familier, yaitu JavaScript. Anda tidak perlu mempelajari template engine khusus ketika menggunakan React atau cara baru dalam melakukan sesuatu.

Sebenarnya, cukup perdalam kemampuan JavaScript dan kemampuan Anda terhadap React pun akan bertambah. Terkadang, ketika mempelajari React, kita malah menjadi JavaScript Developer yang lebih baik lagi. Jarang kita sadari, konvensi yang terlihat mulanya hanya untuk React, ternyata bisa juga dilakukan oleh JavaScript standar. 
