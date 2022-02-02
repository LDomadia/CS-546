const weather = true;

// const date = new Promise((resolve, reject) => {
//     if (weather) {
//         const dateDetails = {
//             name: 'Taco Bell',
//             location: 'Route 37',
//             order: 'Mexican Pizza'
//         };
//         resolve(dateDetails);
//     }
//     else {
//         reject('Bad weather, stay in');
//     }
// });

// date.then((details) => {
//     console.log(details);
// }).catch((e) => {
//     console.log(e);
// });

function date() {
    if (weather) {
        const dateDetails = {
            name: 'Taco Bell',
            location: 'Route 37',
            order: 'Mexican Pizza'
        };
        return Promise.resolve(dateDetails);
    }
    else {
        return Promise.reject('Bad weather, stay in');
    }
}

const orderUber = (details) => {
    let message = (`Get me an Uber ASAP to ${details.location}`);
    return Promise.resolve(message);
}

// const myDate = () => {
//     date().then((details) => {
//         console.log(details);
//         console.log('after promise');
//     }).catch((e) => {
//         console.log(e);
//     });
// }

const myDate = () => {
    date().then(orderUber).then((orderUberMessage) => {
        console.log(orderUberMessage);
    })
    .catch((e) => {
        console.log(e);
    });
}

myDate();
console.log('After myDate has been called');


