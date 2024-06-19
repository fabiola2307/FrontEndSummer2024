//Rest Parameter & Spread Operator

//Rest Parameter
const foo = (...params) => {
    console.log(params);
  };
  
  foo("A", "B", "C"); // Output: ["A", "B", "C"]
  
  //Rest Parameter Sebagai Parameter Terakhir
  const bar = (param1, param2, ...params) => {
    console.log("Argument pertama ", param1);
    console.log("Argument pertama ", param2);
    console.log("Sisa argument ", params);
  }
  
  bar("A", "B", "C", "D", "E");
  // Output:
  // Argument pertama  A
  // Argument pertama  B
  // Sisa argument ["C", "D", "E"]
  Pada kode di atas,
  param1 mewakili argument pertama, yaitu "A",
  param2 mewakili argument pertama, yaitu "B",
  params mewakili sisa argument, yaitu "C", "D", dan "E".
  

  // Tempatkan rest parameter di tengah-tengah parameter lainnya
const buzz = (param1, ...params, param2) => {
    console.log(param1);
    console.log(params);
    console.log(param2);
  }
  
  // Output: SyntaxError: Rest parameter must be last formal parameter
  

 // Spread Operator Dengan Array
 let arrayBilangan = [1, 2, 3, 4, 5];

 // tanpa spread operator
 console.log(arrayBilangan); // Output: [1, 2, 3, 4, 5]
 
 // kalau pakai spread operator
 console.log(...arrayBilangan); // Output: 1, 2, 3, 4, 5

 let arrayAsli = [1, 2, 3];

let arrayDuplikat = [...arrayAsli];
let arrayAsli = [1, 2, 3];

//menggabungkan array (concatenate)
let array1 = ["foo", "bar"];
let array2 = ["fizz", "buzz"];

// menggunakan spread operator
array1 = [...array1, ...array2];

console.log(array1); // Output: ["foo", "bar", "fizz", "buzz"]

//Spread Operator Dengan Objek
menambah beberapa properti sekaligus
let orang = {
  nama: "Yudistya",
  umur: 32
};
Untuk menambahkan beberapa properti lainnya, kita bisa melakukan ini:
orang.pekerjaan = "arsitek";
orang.pendidikan = "S1";
atau bisa juga lebih singkat dengan menggunakan spread operator seperti ini:


orang = {...orang, pekerjaan: "arsitek", pendidikan: "S1"};


console.log(objekGabungan); // Output: {a: 1, b: 2, c: 3, d: 4}
Tapi dengan spread operator, kita cukup menambahkan elipsis di depan nama arraynya lalu membungkus semuanya dengan sepasang kurung kurawal.
const objek1 = {a: 1, b: 2};
const objek2 = {c: 3, d: 4};


const objekGabungan = {...objek1, ...objek2};

console.log(objekGabungan); // Output: {a: 1, b: 2, c: 3, d: 4}

//Destructuring
//Destrukturisasi Array
let buah = ["mangga", "pisang", "anggur"];

let buah1 = buah[0];
let buah2 = buah[1];
let buah3 = buah[2];

console.log(buah1); // Output: mangga
console.log(buah2); // Output: pisang
console.log(buah3); // Output: anggur


// cara mendeklarasikan variabel berupa array
let namaArray = [element1, element2, element3];

// cara melakukan destrukturisasi array
let [variabel1, variabel2, variabel3] = namaArray;
Kita ambil contoh array yang pertama ya:
let buah = ["mangga", "pisang", "anggur"];

// lakukan destrukturisasi array
let [buah1, buah2, buah3] = buah;

console.log(buah1); // Output: mangga
console.log(buah2); // Output: pisang
console.log(buah3); // Output: anggur

// gunakan koma kosong untuk melewati element kedua dan keempat
let [namaDepan, , namaBelakang, , buku] = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];

console.log(namaDepan); // Output: Joanne
console.log(namaBelakang); // Output: Rowling
console.log(buku); // Output: Harry Potter


let a = 10;
let b = 15;

// variabel tambahan sementara
let temp = a;
a = b; // nilai a sekarang adalah 15
b = temp; // nilai b sekarang adalah 10

let a = 10;
let b = 15

[a,b] = [b,a];
// nilai a sekarang adalah 15, dan nilai b adalah 10

//Destrukturisasi Objek
et orang = {
    nama: "Joko",
    umur: 18,
    sudahMenikah: false
  };
  
  let nama = orang.nama;
  let umur = orang.umur;
  let sudahMenikah = orang.sudahMenikah;
  
  console.log(nama); // Output: Joko
  console.log(umur); // Output: 22
  console.log(sudahMenikah); // Output: false
  
  Syntax untuk destrukturisasi objek adalah seperti ini:
let { namaProperti1, namaProperti2, namaProperti3 } = namaObjek;

let orang = {
    nama: "Joko",
    umur: 22,
    sudahMenikah: false
  };
  
  // Destrukturisasi Objek
  let { nama, umur, statusMenikah } = orang;
  
  console.log(nama); // Output: Joko
  console.log(umur); // Output: 22
  console.log(statusMenikah); // Output: undefined karena nama variabel dan properti berbeda
  Tapi kalau kalian ingin agar nama variabelnya berbeda dari nama properti, kalian bisa menambahkan titik dua setelah nama properti dan diikuti nama variabel yang baru, seperti ini:
  let {
    namaProperti1: namaVariabelBaru1,
    namaProperti2: namaVariabelBaru2
  } = namaObjek;
  Contoh:
  let orang = {
    name: "Joko",
    age: 22,
  };
  
  // buat variabel nama berisi nilai dari properti name pada orang
  // buat variabel age berisi nilai dari properti umur pada orang
  let { name: nama, age: umur } = orang;
  
  console.log(nama); // Output: Joko
  console.log(umur); // Output: 22
  
