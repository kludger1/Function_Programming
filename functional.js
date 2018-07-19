function sum(a, b) {
    return a + b
}
// function range(a,b){
//     const arr = []
//     for (let i =a; i <=b; i++){
//         arr.push(i)
//     }
//     return arr
// }   

// function sumRange(a,b){
//     const r = range(a,b)
//     let total = 0
//     for (let i=r[0]; i<=r[r.length-1]; i++){
//     total = sum(total, i)
//     }
//   return total
// }

// console.log(sumRange(3,10))

const numArr = ["1", "2", "3", "4", "5"]
const numArr2 = numArr.map(function (num) {
    return parseInt(num)
})

// console.log(numArr2)

const simple = ["i have a cat.", "i have a dog.", "i have a puppy.", "i have a kitten."]
const sentence = simple.map(sim => { return sim.charAt(0).toUpperCase() + sim.slice(1, 4) })
// console.log(sentence)

const movies = [
    { name: "DeadPool", rating: "R" },
    { name: "Shrek", rating: "PG" },
    { name: "Life", rating: "R" }
]
const noRMovies = movies.filter(movie => {
    if (movie.rating !== "R") return true
})

// console.log(noRMovies)
const range = [3, 4, 5, 6, 7, 8, 9, 10]
const sumRange = range.reduce((acc, curr) => {
    return acc + curr
}, 0)
// console.log(sumRange)

const range2 = [3, 6, 25, 1, 52, 35, 2]
console.log(range2.reduce((acc, curr) => { return (acc < curr) ? acc : curr}))