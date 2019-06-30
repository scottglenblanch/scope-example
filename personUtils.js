let person;

function initializePerson() {
  person = {
    firstName: "Casey",
    amountOfMoney: 10
  };
}

function isPersonSetCorrectly() {
  return person !== undefined;
}

function getPerson() {
  return person;
}

function greetPerson() {
  const { firstName = "" } = person || {};
  console.log(`Hello ${firstName}`);
}

function showMoneyInBankAccount() {
  const { amountOfMoney = 0 } = person || {};
  console.log(`You have $${amountOfMoney}`);
}

function askToBuySomething() {
  console.log("do you want to buy anything?");
}

module.exports = {
  initializePerson,
  isPersonSetCorrectly,
  greetPerson,
  getPerson,
  showMoneyInBankAccount,
  askToBuySomething
};
