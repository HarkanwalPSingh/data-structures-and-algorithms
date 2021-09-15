class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)
        let currNode = this.root

        if(this.root === null){
            this.root = newNode
            currNode = this.root
        }

        while(currNode.value !== newNode.value){
            if(newNode.value < currNode.value && currNode.left === null){
                currNode.left = newNode
                currNode = newNode
            } else if(newNode.value > currNode.value && currNode.right === null){
                currNode.right = newNode
                currNode = newNode
            } else if(newNode.value < currNode.value && currNode.left !== null){
                currNode = currNode.left
            } else if(newNode.value > currNode.value && currNode.right !== null){
                currNode = currNode.right
            } 

        }
    }

    lookup(value){
        if(!this.root){
            return null;
        }

        let currNode = this.root

        while(true){
            if(value < currNode.value){
                currNode = currNode.left
                if(currNode.value === value){
                    return currNode
                }else if(!currNode.left && !currNode.right){
                    return null
                }
            } else {
                currNode = currNode.right
                if(currNode.value === value){
                    return currNode
                }else if(!currNode.left && !currNode.right){
                    return null
                }
            }

        }        
    }

    remove(value){
        let parent  = this.root
        let successor = this.root
        let currentNode = this.root
        let successorsParent = null


        while(true){
            if (value < currentNode.value){
                parent = currentNode
                successor = currentNode
                currentNode = currentNode.left
            } else if (value > currentNode.value){
                parent = currentNode
                successor = currentNode
                currentNode = currentNode.right
            } else if(value === currentNode.value){
                break
            }
        }

        // Remove leaf node 
        if(!currentNode.left && !currentNode.right){
            successor = null
            if (parent.left === currentNode){
                parent.left = null
            }else if(parent.right === currentNode){
                parent.right = null
            }
            return parent
        }

        // Remove node with one child
        if(!currentNode.left){
            successor = currentNode.right
            if (parent.left === currentNode){
                parent.left = successor
            }else if(parent.right === currentNode){
                parent.right = successor
            }
            return parent
        }

        if(!currentNode.right){
            successor = currentNode.left
            if (parent.left === currentNode){
                parent.left = successor
            }else if(parent.right === currentNode){
                parent.right = successor
            }
            return parent
        }

        // Remove node with two children

        if (currentNode.left && currentNode.right){
            successorsParent = currentNode
            successor = currentNode.right

            if(!successor.left && !successor.right){
                successor.left = currentNode.left
                successor.right = null
                if (parent.left === currentNode){
                    parent.left = successor
                }else if(parent.right === currentNode){
                    parent.right = successor
                }
                return successor
            }

            if(!successor.left && successor.right){
                successor.left = currentNode.left
                if (parent.left === currentNode){
                    parent.left = successor
                }else if(parent.right === currentNode){
                    parent.right = successor
                }
                return successor
            }

            if(successor.left){
                successorsParent = successor
                successor = successor.left
                console.log(successor)

                while(successor.left !== null){
                    successorsParent = successor
                    successor = successor.left
                }

                successorsParent.left = successor.right
                successor.left = currentNode.left
                successor.right = currentNode.right
                if (parent.left === currentNode){
                    parent.left = successor
                }else if(parent.right === currentNode){
                    parent.right = successor
                } else if (parent === currentNode){
                    this.root = successor
                }
                return successor

            }
            
        }

    }

}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(2)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.insert(5)
tree.insert(7)
tree.insert(3)
tree.insert(4)


tree.remove(6)
console.log(tree)
console.log(JSON.stringify(traverse(tree.root)))

    //     9
    //  2      20
    //1  6   15  170
//      5 7
//    3
//     4


function traverse(node){
    const tree = {value : node.value, 
                  left: null, 
                  right: null}
    if (node.left === null){
        tree["left"] = null
        return tree
    } else if (node.right === null){
        tree["right"] = null
        return tree
    }

    tree["left"] = traverse(node.left)
    tree["right"] = traverse(node.right)

    return tree
}













 

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }