// Conditional Variable
const umur = 50;
const age = 3;

const usia = umur < 10 ? 'anak anak' : 'bukan anak anak';
console.log(usia);

const usiaAnd = umur > 10 && 'berarti sudah besar';
console.log(usiaAnd);

const usiaOr = age > 10 || 'nah masih bocil ini mah';
console.log(usiaOr);


// Map dan Filter
const listFilm = [
    {
        id: 121,
        judul: `ironman`,
        harga: 2000,
    },
    {
        id: 122,
        judul: `hulk`,
        harga: 6200,
    },
    {
        id: 123,
        judul: `spiderman`,
        harga: 8500,
    },
];

const listJudul = listFilm.map(film => film.judul);
console.log(listJudul);

const filmMurah = listFilm.filter(film => film.harga<5000);
console.log(filmMurah);

// pendapatan film ironman jika ditonton oleh 1000 orang
const pendapatanIronman = listFilm.filter(film => film.id==121).map(film => film.harga*1000);
console.log(pendapatanIronman);
