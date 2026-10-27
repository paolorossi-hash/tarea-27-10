const datos = [
{ title: 'Spiderman', year: 2002 },
{ title: 'Iron Man', year: 2008 },
{ title: 'Avengers', year: 2012 }
];

const getDatos = () => {
return new Promise((resolve, reject) => {
setTimeout(() => {
if (datos.length === 0) {
reject(new Error('No existen datos'));
} else {
resolve(datos);
}
}, 1500);
});
};

async function fetchingData() {
try {
const datosObtenidos = await getDatos();
console.log(datosObtenidos);
} catch (error) {
console.log(error.message);
}
}

fetchingData();