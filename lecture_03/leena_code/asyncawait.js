// these two are equivalent
async function myRide() {
    return '2021 Honda CR-V Hybrid';
}
function yourRide() {
    return Promise.resolve('2021 Honda CR-V Hybrid');
}

async function foo() {
    throw 'Rejected';
}
function bar() {
    return Promise.reject('Rejected');
}

const weather = true;
async function date() {
    if (weather) {
        const dateDetails = {
            name: 'Taco Bell',
            location: 'Route 37',
            order: 'Mexican Pizza'
        };
        return dateDetails;
    }
    else {
        throw 'Bad weather, stay in';
    }
}

const orderUber = async (details) => {
    const message = `Get me an Uber ASAP to ${details.location}`;
    return message;
};

async function myDate() {
    try {
        let dateDetails = await date();
        let message = await orderUber(dateDetails);
        console.log(message);
    } catch (e) {
        console.log(e);
    }
}

myDate();
console.log('After myDate() call');

