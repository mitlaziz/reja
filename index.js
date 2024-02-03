// Module Package CORE


//Module Package EXTERNAL


//Module Package FILE

// const calculate = require("./hisob.js");

// const natija = calculate.kopaytirish(80, 20);
// console.log("natija:", natija);

// console.log('********');

// const natija2 = calculate.bolish(80, 20);
// console.log("natija:", natija2);

// console.log('********');

// const natija3 = calculate.ayirish(2024, 1965);
// console.log("natija:", natija3);

const Account = require("./account");
Account.telllMeAboutClass();
Account.telllMeTime();


const myAccount = new Account("MAx", 500000, 1283384738478);
myAccount.giveMeDetails();

myAccount.makeDeposit(100000);

//ferrari 2.5mln usd
myAccount.withrawMoney(2400000);
