// function enviarEmail(nome: number) {
//     let century = 1;
//     if (nome < 1 || nome > 2005){
//         return
//     }
//     if(nome % 100 === 0) {
//         century = (nome /100) +1
//     }else{
//         century = Math.floor(nome / 100) + 1
//     }
//     console.log(century);
// }
// enviarEmail(1700)
// function palio(nome: string) {
//     let palindrome = false;
//     let data = nome.split('').reverse().join('');
//     if (data === nome) {
//         palindrome = true
//     }
//     console.log(palindrome)
// }
// palio("abca")
function arrayMutation(nome) {
    nome.forEach((nome, index, Array) => {
        console.log(nome);
    });
}
const nome = [4, 0, 1, -2, 3];
arrayMutation(nome);
