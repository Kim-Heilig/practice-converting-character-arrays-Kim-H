/** @format */

// Using Arrays | Lesson 4 - Practice: Converting Character Arrays

// You are working as a software engineer for a secret agency that needs a way to encrypt and decrypt messages. The agency communicates using character arrays instead of plain text to ensure the messages are secure.

// Task 1: Decode the Following Reversed Messages Use .split(''), reverse.(‘’) and .join('') to convert messages between strings and arrays dynamically. Then log the messages.

console.log("***** TASK 1: Decode the Following Reversed Messages *****");

let reverseMess1 =
  "!yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";

console.log("Reverse message 1:  ", reverseMess1);

let message1 = reverseMess1.split("").reverse().join("");

console.log("Reverse message 1 (decoded): ", message1);

let reverseMess2 =
  "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";

console.log("Reverse message 2:  ", reverseMess2);

let message2 = reverseMess2.split("").reverse().join("");

console.log("Reverse message 2 (decoded): ", message2);

let reverseMess3 =
  "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";

console.log("Reverse message 3:  ", reverseMess3);

let message3 = reverseMess3.split("").reverse().join("");

let reverseMess4 =
  ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";

console.log("Reverse message 3 (decoded): ", message3);

console.log("Reverse message 4:  ", reverseMess4);

let message4 = reverseMess4.split("").reverse().join("");

console.log("Reverse message 4 (decoded): ", message4);

console.log("***** TASK 2: Write your own reverse messages *****");

// 1. First, write your own short messages of inspiration (without reversing them).

let myMessage = "Brave, not Broken.";
console.log("1. My own short message of inspiration: ", myMessage);
// 2. Then, use .split(''), reverse.(‘’) and .join('') to convert messages between strings and arrays dynamically so that you have a reverse output.

let myMessageReverse = myMessage.split("").reverse().join("");
console.log("2. Reverse output: ", myMessageReverse);

// 3. Then log the messages.

console.log("My message: ", myMessage, "Reverse output: ", myMessageReverse);
