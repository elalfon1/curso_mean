"use strict";

// const miBuf = Buffer.from("Hola mundo", "utf8");
// const miBuf2 = Buffer.alloc(20);


// console.log("Valor del buffer");
// miBuf[3] = 66;
// console.log(miBuf);

// const cadena = miBuf.toString();
// console.log("Valor de la cadena");
// console.log(cadena);

// miBuf2[2] = miBuf[0];
// miBuf2[4] = miBuf[1];
// miBuf2[6] = miBuf[2];
// miBuf2[8] = miBuf[3];


// console.log("Valor del buffer 2");
// console.log(miBuf2);
// console.log(miBuf2.toString());

const buf3 = Buffer.alloc(30);

const word1 = Buffer.from("hello", "utf8");
const word2 = Buffer.from("world", "utf8");

word1.copy(buf3, 0);
word2.copy(buf3, 7);

buf3.writeUInt32BE(123456789, 13);
buf3.writeUInt32LE(123456789, 17);

console.log(buf3.toString("utf8"));