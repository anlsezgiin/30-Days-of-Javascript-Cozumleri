function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        a:plusOne(),
        a:plusOne(),
        a:plusOne(),
        b:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.a)
console.log(innerFuncs.b)