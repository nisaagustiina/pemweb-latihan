//method array
//1.join
//var arr = ['sandhika','galih','nofa'];
//console.log(arr.join());

//2.push & pop (menambah dan menghapus elemen terakhir)
//var arr = ['sandhika','galih','nofa'];
//arr.push('doddy','gilang');
//arr.pop();
//console.log(arr.join());

//3.unshift & shift (elemen pertama)
//var arr = ['sandhika','galih','nofa'];
//arr.unshift('doddy');
//arr.shift();
//console.log(arr.join());

//4.splice(menambah atau menghapus data di tengah)
//splice(index awal, mauDihapusBerapa, elemen berapa, elemenBaru2, ...)
//var arr = ['sandhika','galih','nofa'];
//arr.splice(1,2,'doddy');
//console.log(arr.join());

 //5.slice(memindahkan data ke array baru)
 //slice(awal,akhir)
 //var arr = ['sandhika','galih','nofa'];
 //varr arr2=arr.slice[1,3];
 //console.log(arr.join('-'));

//6.foreach
//var angka=[1,2,3,4,5,6,7,8];
//var nama= ['sandhika','galih','nofa'];
//angka.forEach(function(e){
//console.log(e);})
//nama.forEach(function(e, i)){
//console.log('mahasiswa ke ' +(i+1) + 'adalah : ' +e);})


//7.map
//var angka=[1,2,5,3,6,8,4];
//var angka2=angka.map(function(e){
//return e*2;})
//console.log(angka2.join());

//8.short
//var angka=[1,2,5,3,30,6,8,20,4];
//angka.short(function(a,b){
//return a-b;	});
//console.log(angka.join());

//9.filter(mencari semua elemen) & find(hanya satu elemen)
var angka=[1,2,5,3,6,8,4];
var angka2=angka.filter(x){
	return x>5;
}
console.log(angka2);
