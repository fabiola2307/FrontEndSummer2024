//IIFE &b callback funtion 
//function calculateBMI (berat, tinggi){ //parameter berada dalam ()
//   let bmi = berat / (tinggi * tinggi) //proses arimatika 
//    return bmi
//}
//let output = calculateBMI(55, 1.7) //nilai akan diletakan disini
//console.log("BMI anda adalah = " + output) //memanggil variabel output untuk mengeluarkan hasil

//IIF (Imediately invoked dunction expression)

(function(){
    console.log("Hello IIFE")
})()

//callback function 
//VERST 1
function greetings(){
    console.log ('Hello')
}
function sayHello(callback){ //menerima parameter fungsi(dalam  )
    callback()
}
//greetings nantinya akan terpanggil jika di variabel sayHello

//VERST 2
function sayHello(callback){ //menerima parameter fungsi(da)
    callbacl()
}
////greetings nantinya akan terpanggil jika di variabel sayHello

sayHello(function (){
    console.log('Hello')
})