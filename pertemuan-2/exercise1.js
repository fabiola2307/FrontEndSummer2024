//Buatlah fungsi untuk menghitung BMI (Body Mass Index)
//Rumus : BMI = berat / (tinggi * tinggi), berat dalam kg dan tinggi dalam meter
//170 cm = 1.7 m
//Fungsi tersebut menerima 2 input yaitu berat dan tinggi
//Dan mengembalikan output berupa BMI

function BMI(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    return bmi
}
let berat = 40
let tinggi = 1.6

let bmi = BMI(berat, tinggi);
console.log(berat, "kg")
console.log(tinggi, "m")
console.log(bmi)
