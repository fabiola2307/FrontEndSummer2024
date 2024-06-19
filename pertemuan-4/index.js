//Array & Objek
//Deklarasi array
//Cara 1.Array literal
let number = [1, 2, 3, 4, 5]
//Cara 2. Kata kunci new
let number2 = new Array(6, 7, 8, 9, 10)

//Tipe data dalam array
let number = [1, 2, 3, 4, 5] //number
let student = ["John", "Jane", "Bob"]; //string
let john = ["John", 30, true]; //campuran

console.log(numbers);
console.log(students);
console.log(john);

//Mengakses elemennt didalam array
//Memulai index
console.log(numbers[3]); //4
console.log(students[1]) //Jane
console.log(john[3]); //[80,90,100]
console.log(john[3][1]) //90

numbers[30] = 100;
console.log(numbers);

//array length
console.log(numbers.length); //5
console.log(numbers.length); //3

//Mengaksess elemen terakhir
console.log(numbers(numbers,length -1));

//Array Method
let array = [1, 2, 3, "halo", false, true];
console.log(array);
console.log(array.toString()); // Output: 1,2,3,halo,false,true
console.log(array.join("_")); 

array.pop();
console.log(array);
array.push("Selamat Pagi");
console.log(array);
array.shift();
console.log(array);
array.unshift("Selamat Pagi")
console.log(array);

//Menggabungkan Lebih Dari Satu Array dengan concat()
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buah.concat(sayur, biji);
console.log(makanan); 

//Mengambil Element Array dengan slice()
let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
let cemilanGurih = cemilan.slice(0, 3);
let cemilanManis = cemilan.slice(3);
console.log(cemilanGurih); 

let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
let cemilanGurih = cemilan.slice(0, 3);
let cemilanManis = cemilan.slice(3);

console.log(cemilanGurih); // Output: ["kripik singkong", "kripik kentang", "krupuk ikan"]
console.log(cemilanManis); // Output: ["permen", "coklat", "kue"]

//Menggunakan Object Literal
let buah = { nama: 'mangga', warnaKulit: 'hijau', hargaPerBuah: 5000 };

let orang = {
  nama: 'john',
  umur: 24,
  pekerjaan: 'programmer'
};

//Menggunakan Kata Kunci new
let orang = new Object();

orang.nama = 'john';
orang.umur = 24;
orang.pekerjaan = 'programmer';

//Mengakses Properti Objek
let orang = {
    nama: 'john',
    umur: 24,
    pekerjaan: 'programmer'
  };
  
  console.log(orang.nama); // Output: "john"
  console.log(orang.umur); // Output: 24
  console.log(orang.pekerjaan); // Output: "programmer"
  
  //Bracket Notation
  let orang = {
    nama: 'john',
    umur: 24,
    pekerjaan: 'programmer'
  };
  
  console.log(orang["nama"]); // Output: "john"
  console.log(orang['umur']); // Output: 24
  console.log(orang["pekerjaan"]); // Output: "programmer"
  //(Perlu kita perhatikan yang berikut ini ketika kita mau mengakses properti objek
  // secara dynamic (dinamis). Yang dimaksud dengan mengakses properti objek secara dinamis
  // adalah ketika kita menggunakan nama dari suatu variabel sebagai nama properti saat 
  //mengakses properti objek tersebut.)

  const smartphone = {
    kamera: "10MP",
    memori: "128GB"
};

const fitur = "kamera";

//Bracket Notation
let objek = {
    namaProperti: nilaiProperti
 };
 
 // Bracket Notation
 objek["namaProperti"] // Output: nilaiProperti
 
 // bisa juga menggunakan single quote
 objek['namaProperti'] // Output: nilaiProperti

//Menambah Properti Baru pada Objek
let orang = {
    nama: 'john',
    umur: 24,
    pekerjaan: 'programmer'
  };
  
  orang.kebangsaan = 'warga negara indonesia';
  
  console.log(orang);
  /*
    Output:
    {
      nama: 'john',
      umur: 24,
      pekerjaan: 'programmer',
      kebangsaan: 'warga negara indonesia'
    }
  */
  