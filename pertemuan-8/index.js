//Java Script ES6
let bilanganPi = 3.14;
bilanganPi = 3.; 

console.log(bilanganPi); // Output: 3

bilanganPi = 3.2;
console.log(bilanganPi); // Output: 3.2

const bilanganPi = 3.14;
bilanganPi = 3.;  // Output TypeError: Assignment to constant variable

const warna = ["merah", "kuning", "kelabu"];

// pemberian array baru pada variabel dengan `const` akan menampilkan error
warna = ["hijau", "abu", "biru"];  // Output TypeError: Assignment to constant variable

// namun jika perubahan pada arraynya sendiri masih bisa dilakukan
warna.push("nila", "ungu");

console.log(warna); // Output: ["merah", "kuning", "kelabu", "nila", "ungu"]

// deklarasi variabel bernama bahasaFavorit
var bahasaFavorit = "JavaScript";

// baris kode lain
// ...

// tidak sengaja kita membuat variabel dengan nama yang sama
var bahasaFavorit = "Python";

console.log(bahasaFavorit); // Output: Python

//Bandingkan kalau kita menggunakan let atau const
// deklarasi variabel menggunakan const dan let
const nama = "Rafi";
let umur = 16;

// kalau kita coba deklarasi lagi dengan nama variabel yang sama
// akan muncul error
const nama = "Farhan"; // Output SyntaxError: Identifier 'nama' has already been declared
let umur = 21; // Output SyntaxError: Identifier 'nama' has already been declared
Dengan begini kita jadi tahu bahwa sudah pernah ada variabel dengan nama yang sama.

//Scoping Variabel dengan var
var judulBuku = "Harry Potter";

if (judulBuku === "Harry Potter") {
  var pengarang = "J.K. Rowling";
}

console.log(pengarang); // Output: J.K. Rowling

//Bandingkan dengan contoh menggunakan let:
let judulBuku = "Harry Potter";

if (judulBuku === "Harry Potter") {
  let pengarang = "J.K. Rowling";
}

console.log(pengarang); // Output ReferenceError: pengarang is not defined

//String Literal
et nama = "sarah";
let umur = 24;

let kalimat = "Namanya " + nama + ". Umurnya " + umur + " tahun.";
console.log(kalimat);

/*
Output:
"Namanya sarah. Umurnya 24 tahun."
*/

let umur = 16;

let kalimat = `Umur saya tahun depan adalah ${umur + 1}`;

console.log(kalimat); // Output: Umur saya tahun depan adalah 17

let kalimat2 = `Tahun depan saya ${umur + 1 >= 17 ? 'bisa' : 'tidak bisa'} ikut pemilu`;

console.log(kalimat2); // Output: Tahun depan saya bisa ikut pemilu

// fungsi yang mengembalikan sebuah string
function namaSaya() {
    return "Krishna";
  }
  
  let kalimatPerkenalan = `Halo nama saya adalah ${namaSaya()}`;
  
  console.log(kalimatPerkenalan); // Output: Halo nama saya adalah Krishna
  
//Arrow Function
function ucapkanSalam() {
    return "Selamat Pagi";
  };
  
  function ucapkanSalam() {
    return "Selamat Pagi";
  };
  