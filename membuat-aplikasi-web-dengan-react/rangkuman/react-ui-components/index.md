Rangkuman React UI Component
Anda sudah berada di akhir modul React UI Component. Semoga dengan materi yang kami berikan, Anda menjadi paham bagaimana membangun UI secara sederhana menggunakan React. Di modul selanjutnya kami akan menjelaskan salah satu fitur penting yang ada di React sehingga UI yang dibangun dengan React dapat lebih interaktif.

Untuk memantapkan pengetahuan pada modul React UI Component, kami telah merangkum beberapa poin penting.


React Element
Seluruh antarmuka pengguna (UI) aplikasi React dibangun menggunakan React element. Sama seperti DOM element, React element dapat berupa paragraf, heading, atau gambar. React element merepresentasikan apa yang Anda lihat di layar[3].

Cara yang paling sederhana dalam membuat React element adalah dengan menggunakan fungsi:

React.creactElement(/* type */, /* property */, /* content */);
Fungsi createElement menerima 3 parameter yakni type yang merupakan tipe elemen, property merupakan properti dari elemen, dan content merupakan konten dari elemen.

Nilai dari sebuah React element hanyalah objek JavaScript biasa. Untuk elemen yang merupakan paragraf dan menampilkan konten “Hello World”, objek tampak seperti ini.

{
  type: 'p',
  props: {
    children: 'Hello, React!',
  },
}


JSX
Membuat React element terasa sulit bila menggunakan fungsi createElement, terlebih bila elemen yang kita buat nested seperti contoh sebelumnya. React sendiri menganut konsep deklaratif, tetapi penggunaan createElement terasa sangat imperatif, hampir tak ada bedanya dengan menggunakan fungsi standar document.createElement.

Namun React punya solusinya! Selain menggunakan fungsi createElement, Anda juga bisa membuat element dengan sintaksis JSX. Dengan JSX, pembuatan elemen jauh lebih mudah dan bersifat deklaratif.

Berikut adalah contoh dari sintaksis JSX:

const element = <p>Hello, React!</p>; 
Sintaksis JSX mengembalikan React element sesuai dengan yang Anda deklarasikan. Sintaksis JSX mirip seperti HTML karena memanfaatkan tag--khas gaya markup--dalam mendeklarasikan elemen. Dengan menggunakan JSX, Anda bisa terbebas dari penggunakan fungsi createElement dalam membuat element.

JSX
createElement
const element = <p className="red-paragraph">Hello, React!</p>;
Catatan: properti elemen pada JSX dituliskan mirip atribut pada HTML. Namun, referensinya tetap mengacu pada standar Element Properties, bukan HTML Attributes.



JSX hanya mengembalikan satu element
Ketika menuliskan JSX, pastikan ia hanya mengembalikan satu elemen. Meskipun React element bisa nested, tapi pastikan hanya ada satu root element yang membungkus seluruh element di dalamnya.

const element = (
  <div className="container">
    <h1>React</h1>
    <p>The <strong>best tool</strong> for building UI</p>
  </div>
);
Lihat kode JSX di atas! Ia hanya mengembalikan satu root elemen yaitu <div>, walaupun di dalamnya kami menuliskan lebih dari satu elemen. Inilah cara yang benar jika Anda ingin membuat banyak element menggunakan JSX. Agar lebih jelas lagi, berikut adalah contoh praktik yang salah dalam penggunaan JSX.

const element = (
  <h1>React</h1>
  <p>The <strong>best tool</strong> for building UI</p>
);
Pada contoh di atas, kami menuliskan dua root element yaitu <h1> dan <p>. Sintaksis JSX seperti ini tidak benar dan akan dianggap sebagai sintaksis eror.

Karena Anda sudah mengetahui penggunaan fungsi createElement() maka aturan ini tentu masuk akal. Karena fungsi createElement() pun hanya menerima satu tag (dalam bentuk string) pada parameter pertama.



React Component
React component merupakan fungsi JavaScript yang mengembalikan React element. Alasan mengapa kita membuat React component sama dengan kapan kita harus membuat sebuah fungsi. Namun, alih-alih mengembalikan data, React component mengembalikan UI dalam bentuk React element.

Terdapat 2 alasan mengapa Anda perlu membuat component:

Pembuatan UI (React element) membutuhkan logika yang tidak sederhana, serta Anda ingin proses pembuatan UI tersebut terisolasi. Dengan begitu, kode dalam membuat UI tersebut tidak mengganggu kode lainnya.
Anda ingin membuat UI yang bersifat reusable. Artinya, hanya dengan satu kode UI tetapi dapat digunakan sebanyak apa pun dengan banyak varian data.
Cara paling sederhana dalam membuat React component adalah dengan membuat fungsi yang mengembalikan React element (dapat menggunakan JSX atau createElement).

function SayHello() {
  // Sebelum mengembalikan React element, Anda bisa menuliskan banyak kode JavaScript di sini.
  // Biasanya kode yang dituliskan seputar persiapan data untuk ditampilkan pada React element.
 
  return <p>Hello, World!</p>
}
Catatan: konvensi dalam penamaan React component selalu diawali dengan huruf besar.

Untuk penggunaan React component dilakukan dengan cara yang berbeda dari fungsi biasa, yakni dengan menggunakan sintaksis JSX seperti ini:

<SayHello /> // akan menampilkan ui <p>Hello, World!</p>
Layaknya sebuah fungsi, ia dapat digunakan sebanyak yang Anda mau.

<SayHello /> // akan menampilkan ui <p>Hello, World!</p>
<SayHello /> // akan menampilkan ui <p>Hello, World!</p>
<SayHello /> // akan menampilkan ui <p>Hello, World!</p>
<SayHello /> // akan menampilkan ui <p>Hello, World!</p>


Component Properties
Karena React component merupakan fungsi JavaScript, maka kita dapat memberikan parameter ketika menggunakannya. Namun React component hanya dapat menerima satu parameter--berupa objek--yang biasa kita sebut dengan properties (props).

SayHello Component
Penggunaannya
function SayHello(props) {
  const name = props.name;
  const company = props.company;
 
  return (
    <p>
      Hello, {name} from {company}!
    </p>
  );
}
Seperti yang Anda lihat pada kode di atas, melalui props, kita dapat mengirimkan data ketika menggunakannya. Hal inilah yang membuat component sangat reusable karena hanya dengan menggunakan satu component--dengan properti yang terdefinisikan--kita dapat menampilkan UI yang serupa tetapi dengan data yang berbeda.


Compositional Component
Semakin kecil kita membuat sebuah component, semakin reusable UI yang kita bangun dan React mendorong kita untuk membangun aplikasi dengan pendekatan composition daripada inheritance[6] untuk menghasilkan UI yang lebih kompleks.

dos:2d4224cb42f30fda56b5108863b81fbe20220417225428.jpeg


Membuat List UI
Dalam memabangun aplikasi, list merupakan hal yang fundamental. Kami yakin hampir setiap aplikasi yang pernah Anda buat, terdapat data yang perlu ditampilkan dalam bentuk list. Beberapa Framework JavaScript (selain React) memiliki API (cara) khusus dalam menampilkan list, contohnya Vue dan Angular.

Vue
Angular
<ul id="news">
  <li v-for="news in someNews">{{ news.title }}</li>
</ul>
Sedangkan React mengambil pendekatan yang berbeda. Sebisa mungkin, React tetap mencoba tingkatan API yang dimilikinya seminimal mungkin. Kebanyakan React mengandalkan fitur yang sebenarnya sudah dimiliki JavaScript secara standar. Termasuk teknik dalam menampilkan list.

Jika melihat kembali contoh kode Vue dan Angular, tujuan utamanya adalah me-render list item (li) sebanyak item yang berada di array someNews. Apakah Anda tahu bahwa tujuan ini sebenarnya mampu dilakukan hanya menggunakan JavaScript standar? Alih-alih membuat API baru, dalam menampilkan list di React kita bisa manfaatkan fungsi array map seperti ini.

React
<ul id="news">
  { someNews.map((news) => <li>{news.title}</li>) }
</ul>
Sangat jelas ‘kan? Tidak ada API baru yang perlu Anda ingat dan pelajari. Jika Anda mengetahui cara penggunaan map, Anda akan mengetahui bagaimana cara membuat list di React.

Ada sedikit hal yang perlu kita tambahkan ketika me-render React element atau component sebagai list. Yaitu pastikan kita menambahkan properti key pada tiap item element/component yang hendak ditampilkan. Tujuannya adalah sebagai tanda bahwa masing-masing element/component yang ditampilkan adalah unik.

<ul id="news">
  { someNews.map((news) => <li key={news.title}>{news.title}</li>) }
</ul>
Alasan mengapa React membutuhkan ini adalah untuk hal performa. Dengan memberikan nilai unik melalui properti key, React dapat mengetahui item mana yang berubah ketika terjadi perubahan data, dan React akan me-render ulang component yang datanya berubah saja. Hal ini sangat berpengaruh terhadap performa bila menampilkan banyak daftar item.


React Project
Untuk membuat proyek secara lokal sebenarnya terdapat 2 cara, cara mudah dan sulit. Masing-masing cara sebenarnya memiliki kelebihannya sendiri, ketika Anda mempelajari cara yang sulit, Anda akan lebih memahami secara lebih rinci kebutuhan dalam menjalankan kode React. Namun, prosesnya akan panjang dan cukup untuk membuat kepala pusing.

Melihat ini adalah kelas pemula, kami tak ingin materi yang rumit disampaikan di kelas ini. Lebih baik Anda fokus pada “cara membuat aplikasi dengan React” bukan mengetahui “bagaimana module bundler dan Babel bekerja”. Karena itu kami akan mengambil pendekatan yang lebih mudah.

Terdapat React Ecosystem yang bisa memudahkan Anda dalam menyiapkan proyek React di lokal, yakni create-react-app.

Create React App (CRA) menawarkan Anda untuk membuat proyek React hanya dengan sekali menuliskan perintah saja. Setelah itu, di balik layar CRA akan secara otomatis menyiapkan kebutuhan dalam menjalankan proyek React. Jika kita mengambil cara yang sulit, seluruh persiapan yang otomatis perlu kita siapkan secara mandiri.

Untuk menjalankan proyek yang dibangun menggunakan CRA, cukup tuliskan perintah berikut pada Terminal proyek.

npm start
Kemudian aplikasi seketika tampil pada Browser Anda (secara default, aplikasi dapat diakses melalui URL localhost:3000).



Memberikan Styling
Ada dua pendekatan berbeda dalam melampirkan berkas styling di proyek React. Sama seperti gambar, kita bisa memperlakukannya seperti berkas statis dengan menyimpannya di dalam folder public, atau kita bisa memperlakukannya sebagai module yang diimpor di dalam kode JavaScript.

Cara 1
Cara 2
<link rel="stylesheet" href="style.css"> 
