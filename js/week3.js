console.log('hello');

//const number = 10;
//number = 10;


//console.log(number);

//primitive data types, string, number, boolean, null, underfined

//const firstName ="joe";
//const lastname = "smith";
//const age = 20;
//const marrage = true;

//console.log(`my name is ${firstName} ${lastName}, I'm ${age} years old.`);
//console.log(firstname.toUppercase());

const person = {
    firstName: "Kyla",
    lastName: "schaan",
    age: 28,
    interest: ["design", "surfing", "fashion"],
    marrage: true,
    address: {
        street: "90 sippy downs drive",
        sub: "Sippy downs",
 }
};

console.log(person.firstName);
console.log(person.age);
console.log(person.interest[2]);

//if
//let score = 90;
//if (score >50 ) {
  //  console.log("pass!");
//} else {
   // console.log("see you next year!")
//};

//if
//let score = 40;
//if (score === 100 ) {
   // console.log("pass");
//} else if (score >75 && score <95) {
  //  console.log ("see you next year!");
//} else {
    //console.log("hmmmmaaaaa");
//}



let score = 28;
if (score === 100 ) {
      console.log("old");
} else if (score >45 && score <95) {
   console.log ("you are old!");
} else {
    console.log("you are young!");
}