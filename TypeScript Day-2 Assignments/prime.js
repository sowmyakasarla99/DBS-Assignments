function prime(n) {
    for (var i = 2; i <= n; i++) {
        var isPrime = true;
        for (var j = 2; j < i; j++) {
            if (i % j === 0 && i !== j) {
                isPrime = false;
            }
        }
        if (isPrime === true) {
            console.log(i);
        }
    }
}
prime(30);
