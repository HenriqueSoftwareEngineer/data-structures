// Classe para representar um nó da árvore
class Node {
    constructor(id, name, date) {
      this.id = id;          // Identificador único
      this.name = name;      // Nome associado ao nó
      this.date = date;      // Data associada ao nó
      this.left = null;      // Filho à esquerda
      this.right = null;     // Filho à direita
    }
  }
  
  // Classe para representar a árvore binária
  class BinaryTree {
    constructor() {
      this.root = null; // Nó raiz da árvore
    }
  
    // Método para inserir um novo nó na árvore
    insert(id, name, date) {
      const newNode = new Node(id, name, date);
      if (this.root === null) {
        this.root = newNode; // Define o primeiro nó como a raiz
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    _insertNode(current, newNode) {
      if (newNode.id < current.id) {
        // Inserir na esquerda
        if (current.left === null) {
          current.left = newNode;
        } else {
          this._insertNode(current.left, newNode);
        }
      } else {
        // Inserir na direita
        if (current.right === null) {
          current.right = newNode;
        } else {
          this._insertNode(current.right, newNode);
        }
      }
    }
  
    // Método para buscar um nó pelo ID
    search(id) {
      return this._searchNode(this.root, id);
    }
  
    _searchNode(current, id) {
      if (current === null) return null; // Não encontrado
      if (id === current.id) return current; // Encontrado
  
      // Busca recursiva
      return id < current.id
        ? this._searchNode(current.left, id) // Busca na esquerda
        : this._searchNode(current.right, id); // Busca na direita
    }
  
    // Método para percorrer a árvore em ordem (In-order)
    inOrderTraversal(callback) {
      this._inOrderTraversal(this.root, callback);
    }
  
    _inOrderTraversal(node, callback) {
      if (node !== null) {
        this._inOrderTraversal(node.left, callback); // Esquerda
        callback(node); // Processa o nó
        this._inOrderTraversal(node.right, callback); // Direita
      }
    }
  
    // Método para remover um nó
    remove(id) {
      this.root = this._removeNode(this.root, id);
    }
  
    _removeNode(current, id) {
      if (current === null) return null;
  
      if (id < current.id) {
        current.left = this._removeNode(current.left, id);
        return current;
      } else if (id > current.id) {
        current.right = this._removeNode(current.right, id);
        return current;
      } else {
        // Caso 1: Nó sem filhos
        if (current.left === null && current.right === null) {
          return null;
        }
        // Caso 2: Nó com um filho
        if (current.left === null) return current.right;
        if (current.right === null) return current.left;
  
        // Caso 3: Nó com dois filhos
        const minRight = this._findMinNode(current.right);
        current.id = minRight.id;
        current.name = minRight.name;
        current.date = minRight.date;
        current.right = this._removeNode(current.right, minRight.id);
        return current;
      }
    }
  
    _findMinNode(node) {
      while (node.left !== null) {
        node = node.left;
      }
      return node;
    }
  }
  
  // Exemplo de uso
  const tree = new BinaryTree();
  tree.insert(10, "Node 10", "2024-11-01");
  tree.insert(5, "Node 5", "2024-11-02");
  tree.insert(15, "Node 15", "2024-11-03");
  tree.insert(2, "Node 2", "2024-11-04");
  tree.insert(7, "Node 7", "2024-11-05");
  
  // Buscar um nó
  console.log("Busca pelo nó com ID 7:", tree.search(7));
  
  // Travessia em ordem
  console.log("Travessia em ordem:");
  tree.inOrderTraversal(node => console.log(`${node.id}: ${node.name} (${node.date})`));
  
  // Remover um nó
  console.log("Removendo o nó com ID 5...");
  tree.remove(5);
  
  // Travessia em ordem após remoção
  console.log("Travessia em ordem após remoção:");
  tree.inOrderTraversal(node => console.log(`${node.id}: ${node.name} (${node.date})`));
  
