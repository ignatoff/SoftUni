function smallestOfThree(x, y, z) {

    let smallest = Number.MAX_SAFE_INTEGER;
    
    smallest = smaller(x, smallest);
    smallest = smaller(y, smallest);
    smallest = smaller(z, smallest);

    function smaller(a, small) {
        if (a < small){
            small = a;
        }
        return small;
    }        
    return smallest;
}

console.log(smallestOfThree(25, 21, 4));
