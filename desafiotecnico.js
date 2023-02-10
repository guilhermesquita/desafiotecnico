//LINGUAGEM: JAVASCRIPT

//EXERCICIO 01
const treatmentArrays = (arr) => {

    const findNumbers = arr.filter((string) => {
      const withNumber = /\d/.test(string);
      return withNumber
    })//EXTRAINDO TODOS VALORES QUE CONTÉM UM NÚMERO
    
    let onlyNumbers = [] //ARRAY ONDE SERÁ ARMAZENADO APENAS NÚMEROS
    let numberOutAlpha = 0 //ONDE SERÁ ARMAZENA TODOS NÚMEROS QUE ANTES ERAM ALFANUMÉRICOS, MAS SERÃO SOMENTE NUMBER
    let letterAndNumber = []

    for (let i in findNumbers){
        onlyNumbers.push(Number(findNumbers[i]))//CONVERTENDO PARA NUMBER E ADICIONANDO NO ARRAY CRIADO
        if (isNaN(onlyNumbers[i])){ //VALIDANDO SOMENTE NÚMEROS E EXCLUINDO ALFANUMÉRICOS
            onlyNumbers.splice(i, 1)
            letterAndNumber.push(findNumbers[i])
            numberOutAlpha = findNumbers[i].replace(/[^\d]+/g,'') //REMOVENDO AS STRINGS DA PALAVRA ALFANUMÉRICA E DEIXANDO APENAS O NÚMERO
        }
    }

    let counter = 0
    for(let number of onlyNumbers){
        counter += number
    }
    

    return `${letterAndNumber.length}, ${counter + Number(numberOutAlpha)}, ${arr.length - findNumbers.length}, ${onlyNumbers.length}`
}

const arr = ["Azul", "Louça", "Mouse", "100", "400", "200", "Mesa", "30", "Garrafa", "Cinza", "40", "50", "80", "20", "50", "60", "20", "80", "100", "Teclado", "10 pães"]

console.log("EXERCÍCIO 1: " + treatmentArrays(arr)) //RETORNO: 1, 1240, 7, 13

//////////////////////////////////////////////////////////////////

//EXERCICIO 02

const arrayNumbers = (arr) => {

    let counter = 0
    for(let number of arr){
        counter += number
    } //SOMA OS VALORES

    const media = counter / arr.length //TIRAR A MÉDIA
    
    const reverse = arr.reverse() //INVERTER ARRAY

    const desc = arr.sort((a,b)=>{ //TRANSFORMAR EM DECRESCENTE
        if(a>b){
            return - 1
        }
        if(a<b){
            return 1;
        }
        return 0
    })

    return `${media}, [${reverse}], [${desc}]`

}

const numbers = [20, 40, 100, 500, 300, 700, 20]

console.log("EXERCÍCIO 2: " + arrayNumbers(numbers)) //RETORNO: 240, [20, 700, 300, 500, 100, 40, 20], [700, 500, 300, 100, 40, 20, 20]

//////////////////////////////////////////////////////////////////

//EXERCICIO 03

const word = (string) => {
    const quantityLetters = string.length;
    const reverse = string.split("").reverse().join(""); //INVERTER ARRAY
    const sort = string.split("").sort((a,b)=>{ //TRANSFORMAR EM DECRESCENTE
        if(a.toUpperCase()>b.toUpperCase()){
            return 1
        }
        if(a.toUpperCase()<b.toUpperCase()){
            return - 1;
        }
        return 0
    }).join("")

    return `${quantityLetters}, ${reverse}, ${sort}`
}

console.log("EXERCÍCIO 3: "+ word('Goiaba'))//RETORNO: 6, "abaioG", "aabGio"