 const name = "kartikey"
 const repocount = 50

//  console.log(name + repocount)

console.log(`hello my anme is ${name} and my repo count is $(repocount)`);


const gamename =  new String('hitesh-hc')

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));

console.log(gamename.indexOf('t'));


const newstring = gamename.substring(0,4)
console.log(newstring);


const anotherstring = gamename.slice(-8, 4)
console.log(anotherstring);


const newstringone = "  kartikey   "
console.log(newstringone);
console.log(newstringone.trim());


const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'))


console.log(gamename.split('-'));
