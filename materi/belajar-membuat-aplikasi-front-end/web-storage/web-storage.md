# Web Storage  

Macam-macam Web Storage 

1. local storage

Local Storage digunakan untuk menyinmpan data tanpa ada batasan waktu. Data yang disimpan tidak akan hilang bila browser ditutup kecuali jika kita menghapusnya.

- `localStorage` -> buat akses local storagenya. 
- `setItem()` -> menggunakan localStorage. Punya 2 parameter, yakni(key, value)
Tipe data storage = tipe data primitif

```javascript
typeof(Storage) // expected -> function
```

2. session storage 

Session Storage digunakan untuk menyimpan data. Data yang disimpan tidak akan hilang saat kita refresh browser, tapi akan hilang jika kita close tabnya atau close browser.

