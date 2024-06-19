//JavaScript Loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//while loop
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

//do while Loop
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);

//Array built-in method
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); 

//Array.forEach()
 array.forEach(function (value, index, array){
    // kode program
    })

    let colors = ['blue', 'red', 'yellow', 'green'];

    colors.forEach(function (data) {
      console.log(data)
    });
    
    
    let colors = ['blue', 'red', 'yellow', 'green'];

    colors.forEach(function (data, idx) {
      if(idx % 2 === 0) { // melakukan pengecekan jika index elemen adalah bilangan genap
        console.log(data, idx)
      } else {
        console.log('not allowed', idx)
      }
    });
    
    