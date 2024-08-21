function convertToRoman(num) {
  const obj = [
    ['M', 1000], 
    ['D', 500], 
    ['C', 100], 
    ['L', 50], 
    ['X', 10], 
    ['V', 5], 
    ['I', 1]
  ];

  let roman = '';

  for (let i = 0; i < obj.length; i++) {
    while (num >= obj[i][1]) {
      roman += obj[i][0];
      num -= obj[i][1];
    }
  }

  return roman;
}

// Example usage with alert
alert(convertToRoman(798));  // This will show an alert with the Roman numeral for 36

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
 console.log(convertToRoman(798));

// do not edit below this line
module.exports = convertToRoman;
