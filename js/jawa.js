var tanya=true;
while(tanya==true){
//menangkap pilihan player
var p=prompt('pilih:gajah,semut,orang');
//menangkap pilihan gambar
//membangkitkan bilangan random
var comp=Math.random();
if(comp < 0.34)
{
	comp='gajah';
}
else if(comp >= 0.34 && comp < 0.67)
{
	comp='orang';
}
else{
	comp='semut';
}
console.log(comp);
//menentukan rules
var hasil='';
if(p==comp)
{
	hasil='SERI';
}
else if(p=='gajah')
{
	hasil=(comp=='orang'?'MENANG':'KALAH');
}
else if (p=='orang')
{
	hasil=(comp=='gajah'?'KALAH':'MENANG');
}
else if(p=='semut')
{
	hasil=(comp=='orang'?'KALAH':'MENANG');
}
else{
	hasil='input pilihan salah';
}
//tampilkan hasilnya
alert("Anda memilih "+p+ " dan komputer memilih "+comp
	+"\nMaka hasilnya kamu " +hasil );
tanya=confirm('Lagi?');
}
alert('Terimakasih telah bergabung');