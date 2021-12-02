let a = 0;
let b = 1;
let n = b - a;
const js = ["bahasa ter cantik","dinamis"];
const motive = "jangan merasa paling";
const gaul = "unch";
const bunga = [ 'aster', 'hyacinthus', 'cempaka', 'iris', 'soba']

let yaa = '';
for(let i = 0;i < 10;i++){

a = a + n; 
n = b; 
b = a;
if(i == 0) bunga.pop(), yaa += bunga.reverse().map(lah => lah[0]).join('');
yaa += " ";
yaa += motive.split(' ')[a + 1] || "";
yaa += " ";
if(js[i]) yaa += js[i].split(' ')[a + 1] || "wkwk"
}
console.log(yaa)