// High level languages like Python and Javascript have dynamic arrays and low level languages like C++ has both dynamic and static array

const strings = ['a', 'b', 'c', 'd']


//push O(1) or append *it can be O(n) in low level languages when a static array needs to be copied to other array to increase its memory allocation 
strings.push('e')

//pop O(1)
strings.pop()
strings.pop()

//unshift O(n) because we have to reassign the indexdes of all the elements 
strings.unshift('x')

//splice O(n) becuase we have to reassign the indexes of the elements shifted
strings.splice(2, 0, 'alien')

console.log(strings)

