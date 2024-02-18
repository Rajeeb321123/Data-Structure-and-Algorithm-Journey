const map = new Map([['a',1],['b',2]]) //keys array and values array

// add new value
map.set('c',3)

// check it key exist in map
console.log(map.has('a'))

map.delete('b')

console.log(map.size)

for (const [key,value] of map){
    console.log(`${key}:${value}`)
}

// clear whole map
map.clear()