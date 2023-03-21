function nextPerfectSquare(numSq) {
    if(Number.isInteger(Math.sqrt(numSq))){
        return(Math.sqrt(numSq)+1)*(Math.sqrt(numSq)+1);
    }else{
        return "No can do, not a perfect square";
    }
}

console.log(nextPerfectSquare(9));
console.log(nextPerfectSquare(15));

//OR Jared's:

function perfectSquare(n) {
    //is n a perfect square?
    //to find out, take the square root, and save to a var
    let sqrt = Math.sqrt(n)
    //make a new var, which is the square root with the decimal off
    let strippedSqrt = Math.floor(sqrt)
    //if the new var is not exactly equal to the original square root
    if (sqrt !== strippedSqrt) {
        //we can determine the number is not square, and return -1
        return -1
    }

    //but if it is square, proceed with the function

    //now that we know n is square, to get the next square
    //take the sqrt we already made,
    //and make it itself plus 1
    sqrt++

    //then, return the new sqrt times itself
    return sqrt * sqrt
}

console.log(perfectSquare(81))