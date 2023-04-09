const pessoas = [
  { id: 3, nome: "Sete" },
  { id: 2, nome: "Farroch" },
  { id: 1, nome: "Eddie"},
];

// OBJETO
// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

// MAP
const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa }); // Primeiro argumento (id) = chave / Segundo argumento = valor
}

for (const pessoas of novasPessoas) {
  console.log(pessoas);
}

for (const pessoas of novasPessoas.keys()) {
  console.log(pessoas);
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));