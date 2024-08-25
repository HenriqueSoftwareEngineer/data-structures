const arr = [1,2,3,"4",5,6]
const arr2 = [12,13,'12']

var concat = function(){
    let conc = arr.concat(arr2)
    return conc
}

const resp = concat(); console.log(resp) //resp é os dois arrays concatenados
// Função para selecionar um elemento aleatório do array concatenado e identificar seu tipo
let listInsertElements = [];
for(let index = 0; index < resp.length; index++){
    // Gera um índice aleatório dentro do comprimento do array
    let randomIndex = Math.floor(Math.random() * resp.length);
    // Seleciona o elemento no índice aleatório
    let element = resp[randomIndex];
    
    // Verifica o tipo do elemento e preenche o array com uma mensagem apropriada
    if(typeof element === 'string'){
        listInsertElements.push(`O elemento ${element} é uma string`)
    }else if(typeof element === 'number'){
        listInsertElements.push(`O elemento ${element} é um number`)
    }
}

// Exibe o array preenchido com os resultados na console
console.log(listInsertElements)
if(typeof listInsertElements[0] === 'number'){
    var r = listInsertElements.push(listInsertElements[0])
    console.log("Oi"+ r)
}

// var dizz = function(listInsertElements){
//     if(typeof listInsertElements[Math.random()*listInsertElements.length] === 'string' ){
//         return 'É uma string'
//     }else
//     if(typeof listInsertElements[Math.random()*listInsertElements.length] === 'number'){
//         return 'É um number'
//     }
// }

// console.log(`Resultado: ${dizz()}`)