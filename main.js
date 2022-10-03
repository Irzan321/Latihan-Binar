const text = "nama saya adalah Irzan, saya bekerja sebagai frontend engineer";

const array = [1000, 20, 15, 18, 1, 9, 35];

const isObject = {
  nama_mobil: "ferrari",
  kecepatan: "6000 cc",
  harga: 20000000000,
  tipe: "tidak diketahui",
};
const arrayOf = [
  {
    nama_mobil: "lamborgini",
    kecepatan: "8000 cc",
    harga: 70000000000,
    tipe: "aventador",
  },
];

//1 . gunakan metode replaceAll() pada input variable text diatas:
//output: "nama saya adalah budi saya bekerja sebagai javascript engineer"

console.log(text.replace(``, ``));

//2. gunakan metode substring() pada input variable text diatas:
// output : "saya bekerja sebagai frontend engineer"

const value = text.substring(24, text.length);
console.log(value);

//3. gunakan metode toUpperCase() pada input variable text diatas:
// output : "NAMA SAYA ADALAH BUDI, SAYA BEKERJA SEBAGAI FRONTEND ENGINEER"

const Kapital = text.toUpperCase();
console.log(Kapital);

//4. gunakan metode sorting berdasarkan descending dan ascending pada input variable array diatas:
// output : ascending :[1, 9, 15, 18, 20, 35, 1000]

console.log(array.sort((a, b) => a - b));

// output : descending: [1000, 35, 20, 18, 15, 9, 1]

console.log(array.sort((a, b) => b - a));

//5. gunakan metode indexOf() untuk pencarian nama pada input variable text diatas:
// output : temukan string "frontend engineer" = (number of character)

const str = text.indexOf("frontend engineer");
console.log(str);

//7. gunakan metode includes() untuk pencarian nama pada input variable text diatas:
// output : temukan string "frontend engineer" : (boolean value)

const return1 = text.includes("frontend engineer");
console.log(return1);

//5. gunakan metode indexOf() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai 18 = [nilainya]

const index1 = array.indexOf(18);
console.log(index1);

//7. gunakan metode includes() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai 2000 = false

const index2 = array.includes(2000);
console.log(index2);

//8. gunakan metode filter() untuk pencarian nama pada input variable array diatas:
// output : hapus nilai selain 1000 = [35, 20, 18, 15, 9, 1]

const index3 = array.filter((value) => value !== 1000);
console.log(index3);

//9. gunakan metode filter() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai sama dengan 1000 = [1000]

const index4 = array.filter((value) => value === 1000);
console.log(index4);

//10. gabungkan variable isObject kedalam variable arrayOf dengan menggunakan method push atau spread operator
/**
    output:
     const arrayOf = [{
        nama_mobil: "lamborgini",
        kecepatan: "8000 cc",
        harga: 70000000000,
        tipe: "aventador"
    },{
        nama_mobil: "ferrari",
        kecepatan: "6000 cc",
        harga: 20000000000,
        tipe: "tidak diketahui"
    }]
 * */

//11. Buat metode Function() dari sebuah  semua methode algorithma yg telah di kerjakan lalu return setiap kondisinya dan berikan nama function yg sesuai denga kebutuhan
/**
    output : 
        function(){
            // isilah metode tersebut kedalam function()///
            // berikan return valuenya
        } 
* */
