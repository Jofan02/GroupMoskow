//String Literal

let john = {
    fullName: "John Doe",
    age: 35,
    address: "Manado",
  };
  //Hallo nama saya John Doe, umur saya 35 tahun, dan saya tinggal di Manado
  
  let kalimat5 =
    "Hallo nama saya " +
    john.fullName +
    ", umur saya " +
    john.age +
    " tahun, dan saya tinggal di " +
    john.address;
  
  let kalimat6 = `Hallo nama saya ${john.fullName}, umur saya ${john.age} tahun, dan saya tinggal di ${john.address}`;
  
  // console.log(kalimat6);
  
  //Arrow Function
  
  // function greetings() {
  //   console.log("Hello World");
  // }
  
  const greetings = (fullName) => `Hello ${fullName}`;
  
  let result = greetings(john.fullName);
  // console.log(result);
  
  let numbers = [1, 2, 3, 4, 5];
  let result2 = numbers.map((value) => value);
  // console.log(result2);
  
  //Default Parameter
  const login = (username, password = "12345") => {
    return `Username = ${username}, Password = ${password}`;
  };
  
  // console.log(login("johndoe", "passwordsaya"));
  
  //Rest parameter dan Spread Operator
  //Rest parameter
  
  const funcArray = (a, b, c, ...params) => {
    params.forEach((value) => console.log(value));
  };
  
  funcArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);