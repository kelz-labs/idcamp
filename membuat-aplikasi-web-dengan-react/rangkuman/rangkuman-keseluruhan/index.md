Rangkuman Kelas


Rangkuman Pengenalan React
Pengertian React
React adalah JavaScript library yang digunakan untuk membangun User Interface (antarmuka pengguna). Hal ini ditegaskan oleh tim pengembang React pada website resminya di reactjs.org. React diciptakan oleh Meta (dahulu Facebook) dan mulai dipublikasi pada NPM repository sejak tahun 2012. Berikut konsep yang dimanfaatkan oleh React.

Komponen: Komponen membuat antarmuka yang dibangun menggunakan React sangat reusable.
Deklaratif: Pembuatan antarmuka pengguna dapat lebih cepat. Anda bisa menuliskan “layaknya” sintaksis HTML di dalam kode JavaScript.
Aliran Data Searan: Komponen React dapat menampung sebuah data. React secara reaktif akan memperbarui dan me-render komponen jika data di dalamnya berubah. Komponen React dapat dikomposisikan dan aliran data pada komponen dilakukan secara searah dari parent ke child.


Alasan Memilih React
Selain konsep yang dianut React. Berikut beberapa alasan mengapa kami memilih React.

Popularitas React : React melejit bak roket bahkan sejak setahun setelah pertama dirilis. Sampai saat ini, percayalah, React masih juara dalam hal popularitas di kategori  UI Library atau Front-End Framework.
Pengguna React : React banyak digunakan oleh industri besar, unicorn, ataupun perusahaan rintisan. React digunakan oleh platform web social media yang dimiliki Meta, Twitter, Netflix, Discord, dan banyak platform sukses lainnya.
Komunitas : Tim inti React sendiri selalu menjaga agar komunitas React selalu sehat dan aktif. React bisa tumbuh dan digunakan banyak perusahaan berkat komunitas yang aktif mendukungnya.
Meta sebagai pemilik teknologi pun cukup memperhatikan komunitas developer dengan membuat komunitas resmi bernama Developer Circles (DevC). Di sana, developer aktif berdiskusi dan berbagi ilmu perihal teknologi yang diciptakan oleh Meta, salah satunya React.


React Ecosystem
React memiliki ekosistem yang luas dan dapat dikombinasikan dengan library, tools, teknologi, atau hal lain yang menunjang pengalaman lebih baik dalam mengembangkan aplikasi React. 

Ekosistem bukan hanya permasalahan penggunaan tools atau library. Namun, hal apa pun yang dapat mendukung pengembangan React menjadi lebih baik lagi, termasuk komunitas atau sumber belajar. 

Berikut beberapa ekosistem yang dapat membantu kita dalam mengembangkan aplikasi React di web.

ES6+ sintaksis : Kita akan banyak memanfaatkan sintaksis dan fitur JavaScript terbaru (ES6 ke atas) untuk mendapatkan pengalaman yang maksimal dalam menggunakan React. Jadi, biasakan diri Anda untuk menggunakan sintaksis, seperti const, let, class, rest parameter, spread operator, destructuring, default parameter, dan arrow function. Anda juga harus terbiasa dengan penggunaan Promise dan async/await.
create-react-app : Seperti yang sudah disinggung sebelumnya, untuk memudahkan dalam pembuatan proyek aplikasi React, kita akan memanfaatkan create-react-app.
React DOM : React hanyalah library untuk membangun antarmuka pengguna. React dapat digunakan tak hanya untuk aplikasi web, tetapi juga dapat digunakan untuk membangun aplikasi Android dan iOS dengan bantuan React Native. Lain halnya dengan React DOM yang dibutuhkan ketika Anda ingin mengembangkan aplikasi React untuk platform web.
React Router: React Router adalah salah satu ekosistem React untuk memudahkan implementasi routing di React. Kita akan membutuhkan ini ketika ingin membuat aplikasi yang memiliki lebih dari satu halaman.
Redux : State merupakan salah satu konsep inti dari React. Secara standar, state bersifat lokal dan hidup di dalam komponen. Dengan Redux, kita bisa membuat state secara terpusat dan bersifat global.
Jest : Ia merupakan JavaScript testing framework yang dibuat oleh The Meta Open Source team (pengembang yang sama dengan React). Dengan Jest, kita dapat menguji mulai dari kode JavaScript hingga komponen React secara lebih mudah.


Rangkuman Konsep Dasar React
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



Rangkuman React UI Component
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


Rangkuman Stateful Component
Untuk memantapkan pengetahuan Anda terkait modul Stateful Component, kami telah merangkum beberapa poin penting seperti di bawah ini.

Class Component
React component dapat dibuat menggunakan sintaksis class atau biasa disebut dengan class component. Perbedaan paling mendasar antara class component dan functional component adalah soal benefit yang didapatkan. Dengan class component, Anda bisa memanfaatkan fitur state dan life cycle.

Berikut ada contoh class component.

import React from 'react';
 
class MyComponent extends React.Component {
  render() {
    const { name } = this.props;
 
    return (
      <div>
        <p>Hello, {name}!</p>
      </div>
    );
  }
}
Walaupun memiliki banyak benefit, mohon tidak membuat class component secara berlebihan. Pembuatan class component dapat dibilang “mahal” daripada functional component. Jika Anda tidak berniat untuk memanfaatkan salah satu benefit yang ditawarkan, sebaiknya tetap gunakan functional component daripada class component.


State Component
State merupakan data yang disimpan di dalam component dan dapat berubah. Perubahan state memicu pemanggilan method render pada component sehingga UI dapat menampilkan data (state) terbaru.

Meskipun state dan props dapat menyimpan data, tetapi keduanya hal yang berbeda. Data di dalam props berasal dari luar komponen dan diharapkan untuk tidak berubah, sedangkan data di dalam state diinisialisasi dan berada di dalam komponen itu sendiri serta datanya boleh untuk berubah.

State di dalam class component dapat diakses melalui properti this.state dan datanya diinisialisasi di dalam constructor.

import React from 'react';
 
class Counter extends React.Component {
  constructor(props) {
    super(props);
 
    // inisialisasi data dalam state
    this.state = {
      count: 0
    };
  }
 
  render() {
    return (
      <div>
        {/* menampilkan data count */}
        <p>{this.state.count}</p>
      </div>
    );
  }
}
Untuk mengubah data, gunakan fungsi this.setState. Fungsi ini menerima dua tipe parameter, yaitu objek dan fungsi yang mengembalikan objek.

Parameter berupa objek
Parameter berupa fungsi
// reset the count value
this.setState({
  count: 0
});
Nilai yang diberikan oleh objek--atau yang dikembalikan oleh fungsi--akan menjadi nilai state yang baru untuk menggantikan objek state lama. Jika Anda perhatikan kodenya, state ini diperbarui dengan cara mengganti keseluruhan objek, bukan nilai individual melalui sebuah properti.



Event Handling
Event handling di React mirip seperti DOM. Namun, Dalam pemberian nama event, alih-alih menggunakan lowercase, React selalu menggunakan camelCase. Jadi penulisan event onclick di React adalah onClick.

DOM
React
<button onclick="increaseValue()">
  Increase Value
</button>
Ketika menggunakan React, Anda juga tidak perlu lagi menggunakan perintah addEventListener() untuk menetapkan event setelah element ditampilkan pada DOM. Cukup sediakan event listener pada React element secara langsung melalui properti.


Controlled Component
Controlled Component merupakan component yang me-render form, tetapi “single source of truth” atau sumber datanya diambil dari component state, bukan DOM. Alasan mengapa ia disebut dengan controlled component karena React mengontrol data form.

Berikut contoh dari controlled component.

import React from 'react';
 
class NameForm extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      email: ''
    };
  }
 
  onEmailChangeHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value
      };
    });
  }
 
  render() {
    return (
      <form>
        <input 
        type="text"
        value={this.state.email}
        onChange={this.onEmailChangeHandler} />
      </form>
    );
  }
}
Pada controlled component, value dari input diambil dari nilai component state. Untuk mengubah value, berarti kita perlu mengubah state. Dengan begitu, kita perlu menambahkan event onChange pada input dan memberikan handler untuk mengubah state berdasarkan perubahan input.



Debugging Component menggunakan React DevTools
React Developer Tools hadir untuk memudahkan Anda ketika menginspeksi hierarki component lengkap dengan nilai props dan state yang ada di dalamnya. Kami sangat menyarankan Anda untuk memasang React Developer Tools sebagai alat tambahan ketika debugging aplikasi React.

React Developer Tools tersedia dalam bentuk ekstensi atau add-ons untuk web browser Chrome dan Firefox. Anda bisa memasangnya melalui tautan berikut.

React Developer Tools untuk Chrome
React Developer Tools untuk Firefox



Tips Penggunaan JSX untuk Pemula
Ada beberapa tips yang perlu Anda perhatikan ketika menuliskan JSX.

Variabel di JSX
Kapan pun Anda ingin menggunakan JavaScript expression (sesuatu yang menghasilkan nilai) di JSX, Anda perlu membungkus expression dalam kurung kurawal seperti ini.

render() {
  const name = 'Dicoding';
 
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Today is {new Date().toLocaleDateString()}</p>
      <p>What is 2 + 2? {2 + 2}</p>
    </div>
  )
}


Tidak menampilkan apa pun
Jika Anda ingin komponen tidak menampilkan apa pun, cukup kembalikan fungsi atau method render dengan null. Contohnya seperti ini.

render() {
  if (isLoading()) {
    return null
  }
 
  return (
    ...
  )
}


Conditional Rendering
Di React, conditional rendering dapat dicapai menggunakan pendekatan yang berbeda. Alih-alih membuat caranya sendiri, conditional rendering di React dapat dicapai hanya dengan if else standar JavaScript karena pada dasarnya React hanyalah JavaScript.

render() {
  const authed = isAuthed()
 
  if (authed) {
    return <h1>Welcome back!</h1>
  } else {
    return <h1>Login to see your dashboard</h1>
  }
}


React Fragment
Jika Anda ingin JSX mengembalikan satu top level element saja tanpa ingin mengubah markup karena penambahan ekstra element, bungkuslah seluruh element dengan <React.Fragment>.

render() {
  return (
    <React.Fragment>
      <h1>Hello, Dicoding</h1>
      <p>Today is a great day!</p>
    </React.Fragment>
  )
}
Penggunaan React.Fragment memiliki cara pintas yakni cukup dengan menuliskan tanda <>..</> seperti ini.

render() {
  return (
    <>
      <h1>Hello, Dicoding</h1>
      <p>Today is a great day!</p>
    </>
  )
}
