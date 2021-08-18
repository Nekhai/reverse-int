module.exports = function reverse (n) {

   return (parseFloat(n.toString().split('').reverse().join('')))
}
// n.toString().Array.from(n).reverse.map(Number)
