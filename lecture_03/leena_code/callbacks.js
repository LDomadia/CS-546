// console.log('Plant corn');

// setTimeout(() => {
//     console.log('Water corn');
// }, 3000);

// console.log('Add fertilizer');

// //-----------------------------------------------------

// setInterval(() => {
//     console.log('hello');
// }, 1000)

// console.log('goodbye');

//-----------------------------------------------------

// const list = ['man', 'woman', 'child'];
// const newList = list.map((e) => {
//     return e + 'kind';
// });
// newList.forEach((e) => {
//     console.log(e);
// });

//-----------------------------------------------------

// function greeting(name) {
//     return `Hello ${name}`;
// }

// function introduction(firstName, lastName, callback) {
//     const fullName = `${firstName} ${lastName}`;
//     console.log(callback(fullName));
// }

// introduction("Leena", "Domadia", greeting);

//-----------------------------------------------------

// NAMED FUNCTION
function study(subject, callback) {
    console.log(`I'm about to study ${subject}`);
    callback(subject);
}

function afterStudy(subject) {
    console.log(`I'm done studying ${subject}, now it's time to sleep`);
}
study("Web Prog", afterStudy);
// ANONOMYOUS FUNCTION
study("MongoDB", (subject) => {
    console.log(`I have studied too much ${subject}`);
});