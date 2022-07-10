// function

function greet(ucapan) {
  return ucapan;
}

console.log(greet("Anu bang"));

function kali(a, b) {
  return a * b;
}

const tampilKali = kali(3, 4);
console.log(tampilKali);

// function dengan return
function greeting(name, language) {
  if (name == "Haikel" || language == "English, Indonesia") {
    return name + language;
  } else {
    return "Salah bang";
  }
}

// untuk mencetak nilai return, kita mesti menginisialisasi fungsi ke dalam variable baru atau langsung console.log juga boleh
let greetingMessage = greeting("Harry", "French");

// expression function
const lugowo = () => {
  return "Lugowo wang le zen me ai ni";
};

const tampilLugowo = lugowo();
console.log(tampilLugowo);
