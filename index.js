const { 
    initializePerson,
    isPersonSetCorrectly,
    getPerson,
    greetPerson,
    showMoneyInBankAccount,
    askToBuySomething 
} = require('./script');

function runEverything() {
    initializePerson();
    if(isPersonSetCorrectly()) {
        greetPerson();
        showMoneyInBankAccount();
        askToBuySomething();
    } else {
        console.log('person is not set');
        console.log(`person is ${getPerson()}`)
    }

}

runEverything()