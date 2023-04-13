const FizzBuzz = (mobile)=>{
    var s = "";
    sum = mobile
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        },0);
        console.log(sum)

for (var i = 1; i <= sum; i++) {
     if (i % 4 == 0 && i % 5 == 0) s += "FizzBuzz" + " ";
     else if (i % 4 == 0) s += "Fizz" + " ";
    else if (i % 5 == 0) s += "Buzz" + " ";
    else s += i + " ";
}
return s;
}
console.log(FizzBuzz(9552530101))