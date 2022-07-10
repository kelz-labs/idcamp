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
