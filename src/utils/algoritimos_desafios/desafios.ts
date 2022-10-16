
function enviarEmail(nome: number) {

    let century = 1;
    if (nome < 1 || nome > 2005){
        return
    }

    if(nome % 100 === 0) {
        century = (nome /100) +1
    }else{
        century = Math.floor(nome / 100) + 1


    }
    console.log(century);
}
enviarEmail(1700)

function palio(nome: string) {

    let palindrome = false;

    let data = nome.split('').reverse().join('');

    if (data === nome) {
        palindrome = true

    }
    console.log(palindrome)

}
palio("abca")

function arrayMutation(nome: Array<number>) {
    
    
    // nome.forEach((nome, index, Array) => {
    //     let mudado = Array.map(x => index -1 + (index) + (index + 1));
    //     console.log();
        
    // });


    let newArray = []
    for (let index = 0; index < nome.length; index++) {
        let param1 = nome[index - 1]
        if(param1 === undefined){
            param1 = 0;
        }
        let param2 = nome[index + 1]
        if(param2 === undefined){
            param2 = 0;
        }
        const element = param1 + nome[index] + param2;
        
        newArray.push(element)
        
    }
    console.log(newArray);
        

}
const nome = [4,0,1,-2,3]
arrayMutation(nome);