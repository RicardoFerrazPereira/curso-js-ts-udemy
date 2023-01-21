/*

"if" pode ser usado sozinho
Sempre que utilizo a palavra "else", preciso de um "if" antes
Posso ter vários "else if"
Só posso ter um "else", que vem no final
Podemos usar condições sem "else if", utilizando apenas "if" e "else"

*/

// IF

// if (hora < 10) {
//     console.log('Bom dia');
// }

// ELSE IF

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Esse valor não correponde')
}

