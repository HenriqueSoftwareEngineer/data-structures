class Node{
    constructor(name, type){
        this.name = name
        this.type = type   //diretórios ou arquivos
        this.children = []
        this.parent = null
    }

    //Métodos
    addChild(node){
        node.parent = this
        this.children.push(node)
    }

    removeChild(node){
        const index = this.children.indexOf(node)
        if(index !== -1){
            this.children.splice(index, 1)
            node.parent = null
        }
    }

    traverse(callback){
        callback(this)
        this.children.forEach((chil) =>{ this.children.traverse(callback)})
    }

}


class FileSystem{
    constructor(){
        this.root = new Node('root', 'directory')
    }

    mkdir(path){
        const directories = path.split('/')
        let current = this.root
        for(let i = 0; i < directories.length; i++){
            const dir = directories[i]
            let child = current.children.find((child)=> child.name === dir)
            if(!child){
                child = new Node(dir, 'directory')
                current.addChild(child)
            }
            current = child
        }
    }

    touch(path){
        const directories = path.split('/')
        let current = this.root
        for(let i = 0; i < directories.length -1; i++){
            const dir = directories[i]
            let child = current.children.find((child)=>child.name === dir)
            if(!child){
                child = new Node(dir, 'directory')
                current.addChild(child)
            }
            current = child
        }
        const file = new Node(directories[directories.length - 1], 'file')
        current.addChild(file)
    }
    ls(path) {
        const directories = path.split('/');
        let current = this.root;
        for (let i = 0; i < directories.length; i++) {
          const dir = directories[i];
          let child = current.children.find((child) => child.name === dir);
          if (!child) {
            return [];
          }
          current = child;
        }
        return current.children.map((child) => child.name);
      }
    
      rm(path) {
        const directories = path.split('/');
        let current = this.root;
        for (let i = 0; i < directories.length - 1; i++) {
          const dir = directories[i];
          let child = current.children.find((child) => child.name === dir);
          if (!child) {
            return;
          }
          current = child;
        }
        const file = current.children.find((child) => child.name === directories[directories.length - 1]);
        if (file) {
          current.removeChild(file);
        }
      }
    }
    
    const fs = new FileSystem();
    
    fs.mkdir('dir1/dir2');
    fs.touch('dir1/file1.txt');
    fs.touch('dir1/dir2/file2.txt');
    
    console.log(fs.ls('dir1')); // Output: ['file1.txt', 'dir2']
    console.log(fs.ls('dir1/dir2')); // Output: ['file2.txt']
    
    fs.rm('dir1/file1.txt');
    console.log(fs.ls('dir1')); // Output: ['dir2']
    
}