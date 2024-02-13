// TASK "B"
function findNum(a) {
    let count = 0;
    for(let b = 0; b < a.length; b++) {
        if(! isNaN(a[b])) {
            count++
        }
    }
     return count
}
console.log(findNum("5iwlagan25tiwlaydi123"));

//TASK "A"
// function main(letter, word) {
//     let number = 0
//     for (let i = 0; i < word.length; i++) {
//         if(word[i] === letter) {
//             number = number + 1;
//         }
//     }
//     return number;
// }
// let result = main("o", "ortgayolyoq");
// console.log(result);







// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", //0-20
//     "togri boshliq tanlang va kop xato qiling", //20-30
//     "ozingiz un ishlashni boshlang", //30-40
//     "ozingiz kuchli bolgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling", //60 -
// ];

// bu asynchronous function.
// async function maslahatBering(a) {   
//     if (typeof a !== 'number') throw new Error("insert the number");  // if we need error biz throw qilishumiz kk.
//     else if(a <= 20) return list[0];    // javob kelyotganda biz faqat javobni return qilamiz
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return list[5];
//        // hamda aaytish kk async functionning ichida settimeout, setinterval degan core module functionlarimiz dont work. lekin boshqa bir usuli bor.uni keyin koramiz.

//         // setTimeout(function ()  {
//         //     callback(null, list[5]);
//         // }, 5000);
//         // callback(null, list[5]);
//     }
// }
// bu asynchronous function. biz settimeout qilmadik. javobni log qilishga kirishmasdan avval 'passed here 0' va 'passed here 1' dan keyin javobni oldik.
// buning sababi async function  sync functionlar toiq iwga tushib bolgach  async func natijalari bn nodejs iwlay bowlaydi.
// shuning un ham async func bizning singli threadimizni band qilmaydi. yani  operatsiyalarni event log orqali thread poolga tashlay veradi.
// bu bizning single threadimizni umuman band qilmaydigan operation type hisoblanadi.

// then,  catch 
// console.log("passed here 0");
// maslahatBering(25)   // a ning qiymatini beramiz. m-n 25
// .then(data => {     // datani log qiladi.javob beradi. xatolik bolmasa datani shu yerdan olamiz
//     console.log('javob:', data);
// })
// .catch((err) => {     //if xatolik bolsa then ning orniga catch iwlaydi va xatolikni beradi
//     console.log("ERROR:", err);
// });
// console.log("passed here 1");


// then , catch  ning orniga  async functionni call qismida ham iwlatamiz. bu bizga callback hell, promise hell ni  smthdan qutulishga help. 
//async/ await   await to javob olmaguncha keyingi qismga otmaydi
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

// async yozayotgan paytda biz try / catch ni use ga harakat qillish kk. tepadagi misollarimiz oddiy bolgani un iwlatmadik.  endigi misollarda iwlatamiz



// 21-21-21-21-21-21-21-21-21-21 dars

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", //0-20
//     "togri boshliq tanlang va kop xato qiling", //20-30
//     "ozingiz un ishlashni boshlang", //30-40
//     "ozingiz kuchli bolgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling", //60 -
// ];

// // callback functionni yasab olamiz, birinchi qismi xatolikka tegishli, ikkinchi qismi qaytarmoqchi bolgan resultga tegishli. 
// //agar a raqam bolmasa xatolik beradi. qolgan hollarda esa uning qiymatini solishtirgan holda
// //callbackni 1-qismi xatolik ularga  null boladi.chunki bizda javob bor. 2-qismi javob. unda arrayga tegishli qiymatlarni beradi.
// function maslahatBering(a, callback) {
//     if (typeof a !== 'number') callback("insert the number",null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         // core moduli bolgan settimeout ni use. kechikib javob bersin. 2 ta parametr olishini bilamiz. function va file. biz vaqt qoyamiz
//         setTimeout(function ()  {
//             callback(null, list[5]);
//         }, 5000);
//         // callback(null, list[5]);
//     }
// }

// console.log("passed here 0");
// //callback function. parametr sifatida function iwga tushyapti
// maslahatBering(10, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     console.log('javob:', data);
// });

// maslahatBering(25, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     console.log('javob:', data);
// });

// maslahatBering(35, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     console.log('javob:', data);
// });

// maslahatBering(44, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     console.log('javob:', data);
// });

// maslahatBering('salom', (err, data) => {  // raqam bolgani un natija null.
//     if(err) console.log('ERROR:', err);
//     console.log('javob:', data);
// });

// console.log("passed here 1");