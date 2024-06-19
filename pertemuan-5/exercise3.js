const students = [
    {
      id: 1,
      name: "John",
      isActive: true,
      grade: 80,
    },
    {
      id: 2,
      name: "Jack",
      isActive: true,
      grade: 90,
    },
    {
      id: 3,
      name: "Bob",
      isActive: false,
      grade: 95,
    },
  ];
  //Menampilkan elemen array semuanya
  // console.log(students);
  //Menampilkan elemen array item by item
  // for (let i = 0; i < students.length; i++) {
  //   console.log(students[i]);
  // }
  
  //Array built-in method
  //1. forEach()
  // students.forEach(function (item) {
  //   console.log(item);
  // });
  
  //2. map()
  // let output = students.map(function (item) {
  //   return item;
  // });
  // console.log(students);
  // console.log(output);
  
  // const array1 = [1, 4, 9, 16];
  // // Pass a function to map
  // const map1 = array1.map(function (item) {
  //   return item * 2;
  // });
  
  // console.log(array1); // Expected output: Array [1, 4, 9, 16]
  // console.log(map1); // Expected output: Array [2, 8, 18, 32]
  
  //Filter()
  // let filteredStudent = students.filter(function (item) {
  //   return item.isActive === true;
  // });
  
  // console.log(filteredStudent);
  
  //Find()
  let findStudent = students.find(function (item) {
    return item.isActive === true;
  });
  
  console.log(findStudent);