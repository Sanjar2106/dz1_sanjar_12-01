
// const number = "+996-555-505-505"


// const regex = /\w/gi
// const result = number.replace(regex, "")
// console.log(number);
// console.log(result);

// const PhoneNumber = document.getElementById("numberPhone");
// const regex = /\w/gi
// const textPhonenumber = PhoneNumber.textContent;


// const resultNumber = textPhonenumber.replace(regex, "");

// PhoneNumber.setAttribute("href", "tel:${resultnumber}");



// let result = text.match(regex)

// console.log(result);

// const result = text.replace(regex, "$& Sanjar")
// console.log(result)
//  const result = regex.test(text)
//  console.log(result)

// const PhoneNumbers = document.querySelectorAll(".numberPhone");

// const regex = /\W/gi

// PhoneNumbers.forEach(PhoneNumber => {
//     const textPhonenumber = PhoneNumber.textContent;
//     const resultNumber = textPhonenumber.replace(regex, "");
//     PhoneNumber.setAttribute("href", "tel:${resultnumber}");
// })


// const user = {
//     name: "Dastan",
//     surname: "Abildaev"
// }

// const regexUser = /[a-z]/g

// console.log(`${user.name.replace(regexUser, "*")} ${user.surname.replace(regexUser, "*")}`)



const sanjar = {
    age: 18,
    rost: 174,
    surname: "Abdykulov",
    vneshnost: "Krasavchik"
}

const SAS = JSON.stringify(sanjar);

console.log(sanjar);
console.log(SAS)

console.log(JSON.parse(SAS))














// 2 способ 

// const regexTwo = new RegExp('шаблон', 'gi')

// console.log(regex);
// console,log(regexTwo)