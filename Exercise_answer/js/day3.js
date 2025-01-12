// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = "abebe";
const lastName = "yetayehe";
const country = "Egypt";
const city = "Cairo";
const age = 250;
let isMarried = true;

console.log(typeof firstName, "firstName");
console.log(typeof lastName, "lastName");
console.log(typeof country, "country");
console.log(typeof city, "city");
console.log(typeof age, "age");
console.log(typeof isMarried, "isMarried");
// Find out the numbers of seconds elapsed from January 1, 1970 to now
const now1 = new Date()
const past= new Date(1970,0,1, 18, 0)
console.log(now1 - past);
  

const now = new Date()

const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
const hour = now.getHours();
const minute = now.getMinutes();
console.log(day,"-",hour,"-", minute ,", " , hour ,":",minute);
console.log(day,"/",hour,"/", minute ,", " , hour ,":",minute);
// console.log(day,+ hour,"/", minute ,", " , hour ,":",minute);

// Format: YYYY-MM-DD HH:mm
const yyyy_mm_dd_hh_mm = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

// Format: DD-MM-YYYY HH:mm
const dd_mm_yyyy_hh_mm = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

// Format: DD/MM/YYYY HH:mm
const dd_mm_yyyy_hh_mm_slash = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

console.log(yyyy_mm_dd_hh_mm);
console.log(dd_mm_yyyy_hh_mm);
console.log(dd_mm_yyyy_hh_mm_slash);



