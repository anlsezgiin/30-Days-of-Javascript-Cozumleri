function outerFunction(){
    const PI = 3.14;

    function innerFunction(){
        return PI
    }

    return innerFunction;
}

const innerFunction = outerFunction()

innerFunction()