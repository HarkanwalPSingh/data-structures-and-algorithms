// class Node {
//     constructor(val){
//         this.val = val === undefined ? undefined : val
//         this.children = []
//     }
// }


class Trie {
    constructor(){
        this.root = {
            val: "root", 
            children: []
        }
    }


    insert(word){
        
        function dfsInsert(word, node){
            if (word.length === 0) {
                let newNode = {
                    val : "*",
                    children: []
                } 
                node.children.push(newNode)
                return
            }

            let matchFound = false

            for (let child of node.children){
                if (child.val === word[0]){
                    matchFound = true
                    dfsInsert(word.slice(1), child)
                }
            }

            if (matchFound) return
            else {
                let newNode = {
                    val : word[0],
                    children: []
                }

                node.children.push(newNode)
                dfsInsert(word.slice(1), newNode)
            }
            return
        }

        dfsInsert(word, this.root)
    }

    show(){
        function dfs(node, word){
            if (node.val === "*") {
                console.log(word)
                return
            }
            
            if(node.val !== "root") word = word + node.val

            for (let child of node.children){
                dfs(child, word)
            }

            word = word.slice(0,word.length-1)

            return
        }

        dfs(this.root, "")
    }

    search(word){

        function dfsSearch(node, word){
            if (word.length === 0){
               for (let child of node.children){
                   if (child.val === "*") return true
               }
               return false 
            } 
            if (node.val === "*") return false
            

            for (let child of node.children){
                if (child.val === word[0]){
                    if (dfsSearch(child, word.slice(1))){
                        return true
                    }
                }
            }

            return false
        }

        return dfsSearch(this.root, word)
    }

    startsWith(prefix){

        function dfsSearch(node, word){
            if (word.length === 0) return true
            if (node.val === "*") return false
            

            for (let child of node.children){
                if (child.val === word[0]){
                    if (dfsSearch(child, word.slice(1))){
                        return true
                    }
                }
            }

            return false
        }

        return dfsSearch(this.root, prefix)
    }

}

let trie = new Trie()
trie.insert("apples")
console.log(trie.search("apple"))
console.log(trie.startsWith("apple"))
// trie.show()
