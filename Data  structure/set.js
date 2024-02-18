const set = new Set([1, 2, 3])
set.add(4)
set.add(4)

console.log(set.has(4))
set.delete(3)

console.log(set.size)

for (const item of set) {
    console.log(item)
}

set.clear() // remove all values
