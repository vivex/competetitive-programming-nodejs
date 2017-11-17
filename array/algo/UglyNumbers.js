var UglyNumbers = function () {};

// This function divides a by greatest divisible power of b
UglyNumbers.prototype.maxDivide = function (a, b) {
  while (a % b == 0)
    a = a/b;
  return a;
};

// Function to check if a number is ugly or not

// Naive approach
UglyNumbers.prototype.isUgly = function (number){
  number = this.maxDivide(number, 2);
  number = this.maxDivide(number, 3);
  number = this.maxDivide(number, 5);

  return (number === 1) ? 1 : 0;
};

// Dynamic Programming

UglyNumbers.prototype.getNthUglyNo = function(n) {
  var ugly = [];
  var i2 = 0, i3 = 0, i5 = 0;
  var next_multiple_of_2 = 2;
  var next_multiple_of_3 = 3;
  var next_multiple_of_5 = 5;
  var next_ugly_no = 1;
  ugly[0] = 1;

  for (var i = 1; i < n; i ++) {
    next_ugly_no = Math.min(next_multiple_of_2,
      next_multiple_of_3, next_multiple_of_5); //3

    ugly[i] = next_ugly_no;
    if (next_ugly_no === next_multiple_of_2) {
      i2 = i2 + 1; // 1
      next_multiple_of_2 = ugly[i2] *2; //4
    }
    if (next_ugly_no === next_multiple_of_3) {
      i3 = i3 + 1; //1
      next_multiple_of_3 = ugly[i3] * 3; //6
    }

    if (next_ugly_no === next_multiple_of_5) {
      i5 = i5 + 1;
      next_multiple_of_5 = ugly[i5] * 5;
    }
  }
  return next_ugly_no;
};

// Generation of n numbers with given set of factors

UglyNumbers.prototype.getNumbersWithFactors = function (factors, n) {
  // array of k to store next multiple of given factor

  var next = [0];
  for (var i = 0;i <factors.length; i ++) {
    next[i] = 0;
  }
  // Prints n numbers
  var output = 0; // Net number to print as output
  var i = 0;
  while (i < n) {
    // fine the next smallest multiple
    var toIncrement = 0;
    for (var j =0; j< factors.length; j ++) {
      if (next[j] < next[toIncrement])
        toIncrement = j;

      // Printing minimum in each iteration
      // Print the value if output is not equal to
      // current value (to avoid duplicates)

      if (output != next[toIncrement]) {
        output = next[toIncrement];
        console.log(next[toIncrement]);
        i ++;
      }

      // incrementing the current value by the
      // respective factor
      next[toIncrement] += factors[toIncrement];
    }
  }
  
}




exports.UglyNumbers =   UglyNumbers;