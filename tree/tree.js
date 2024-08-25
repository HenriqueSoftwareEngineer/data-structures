//Criando uma classe que represente o nó da árvore
class TreeNode{
   constructor(value){
        this.value = value
        this.left = null  
        this.right = null 
   }
   
}


//Criar uma classe para a árvore em si. Esta árvore 
//gerencia a inserção de nós e outras operações, como
//busca, travessia, etc
class BinaryTree{
    constructor() {
        //Inicialmente a árvoe está vazia
        //então a raiz é null
        this.root = null
    }

    //Método que insere um novo valor na árvore
    insert(value){
        //Instancinado um objeto nó
        const newNode = new TreeNode(value)
        //Se a árvore estiver vazia, criamos um novo nó
        //Ou seja, um novo nó se torna a raiz
        let rootNull = this.root === null? true:false
        if(rootNull){
            //Esta raiz recebe a primeira instância do nó
            this.root = newNode
        }else{
            // Caso contrário, insere na posição correta
            //Um método o 'insertNode'?
            this.insertNode(this.root, newNode)
        }
    }

    //Método auxiliar para inserir o nó na posição correta
    //Esse método é chamado quando a árvore não estiver vazia
    insertNode(node, newNode){
        //Dentro deste método vai ter as devidas condições...
        //Se o valor do nó atual for maior que o valor do novo nó
        if(newNode.value < node.value){
            //Se o nó atual não tiver filho à esquerda, ele recebe o novo nó
            if(node.left === null){
                //Se o nó atual "node.value" não tiver filho à esquerda
                //é inserido o novo nó (primeira instância da classe TreeNode = newNode)
                node.left = newNode
            }else{
                //Se o nó atual tiver filho à esquerda, ele chama o método
                //insertNode novamente, passando o filho à esquerda como raiz
                //Recursivamente insere na subárvore à esquerda
                this.insertNode(node.left, newNode)
            }
        }else
           //Se o valor do nó atual for menor que o valor do novo nó
        {
          //Se o nó atual "node.value" não tiver filho à direita
          //é inserido um novo nó (primeira instância da classe TreeNode = newNode)
          if(node.right === null){
            node.right = newNode
        }else{
            //Se o nó atual tiver filho à direita, ele chama o método
            //insertNode novamente, passando o filho à direita como raiz
            //Recursivamente insere na subárvore à direita
            this.insertNode(node.right, newNode)
        }
    }
}


/**Método para percorrer a árvore em ordem (in-order traversal) */
inOrderTraversal(node){
    if(node !== null){
        this.inOrderTraversal(node.left) //Percore a subárvore à esquerda
        console.log(node.value) //visita o nó atual
        this.inOrderTraversal(node.right) //Percorre a subárvore à direita
    }
}


//Método para buscar um valor na árvore
search(value){
    //Se a árvore estiver vazia, retorna null
    return this.searchNode(this.root, value)
}

//Método auxiliar para busca
searchNode(node, value){
    //Se o nó atual for igual ao valor procurado, retorna o nó
    if(node === null){
        return false //Se o nó é null, o valor não foi encontrado
    }
    if(value < node.value){
        return this.searchNode(node.left, value)
    }else if(value > node.value){
        return this.searchNode(node.right, value)
    }else{
        return true //Valor encontrado
    }
}

}


//Função que vai a utilização da árvore

    const tree = new BinaryTree()
    tree.insert(10)
    tree.insert(5)
    tree.insert(3);
    tree.insert(7);
    tree.insert(12);
    tree.insert(17);

    // Realizando uma travessia in-order (em ordem)
console.log("Travessia in-order:");
tree.inOrderTraversal(tree.root);

// Buscando um valor na árvore
const searchResult = tree.search(7);
console.log("O valor 7 está na árvore?", searchResult);
    

























