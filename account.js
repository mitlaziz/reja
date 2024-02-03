const moment = require('moment')



class Account {
    #amount
    #account_id
    constructor(name, amount, account_id) {
      this.name = name;
      this.#amount = amount;
      this.#account_id = account_id;
    }
    tellMeBalance() {
        console.log(`Sizning hisobingizdagi qoldiq:`, this.#amount);
        return this.#amount;
    }
    withrawMoney(amount) {
        if(this.#amount > amount) {
            this.#amount = this.#amount - amount;  // this.#amount -=  amount
            console.log(`Hisobdan ${amount} yechildi va qoldiq ${this.#amount}`);
        } else {
            console.log(`sizning balansingiz yetarli emas: ${this.#amount}`);
        }
    }

    makeDeposit(amount) {
        this.#amount += amount;
        console.log(`Hisobingiz toldirildi, hisoingiz ${this.#amount} tashkil etdi`);
    }

    giveMeDetails() {
        console.log(`Salom hurmatli ${this.name} sizning hisobingiz ${this.#amount} ga teng`);
        console.log('Hisob raqamingiz:', this.#account_id);
    }

    static telllMeAboutClass() {
        console.log('bu class accountlarni yasash un xizmat qiladi');
    }

    static telllMeTime() {
        console.log(`Hozirgi vaqt ${moment().format()}`);
    }
}


module.exports = Account;