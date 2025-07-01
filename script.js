function isSameType(value1, value2) {
  //your js code here
  
const val1 = parseFloat(value1);
  const val2 = parseFloat(value2);

  const isVal1NaN = isNaN(val1) && value1.trim().toLowerCase() === "nan";
  const isVal2NaN = isNaN(val2) && value2.trim().toLowerCase() === "nan";

  if (isVal1NaN && isVal2NaN) return true;
  if (isVal1NaN || isVal2NaN) return false;

  // If both are numbers
  if (!isNaN(val1) && !isNaN(val2)) return true;

  // If both are strings
  if (typeof value1 === "string" && typeof value2 === "string") return true;

  return false 
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
