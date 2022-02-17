// Write your code
function isPalindrome(str){
  let index1 = 0;
  let index2 = str.length - 1;
  while(index1 < index2){
    if(str[index1] === str[index2]){
      index1++;
      index2--;
    }
    else if (str[index1] !== str[index2]){
      return false;
    }
  }
  return true;


  function isPalindrom(str) {
    var len = Math.floor(str.length / 2)
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
  }
  console.log(isPalindrom("racecar"))

  et word = `racecar`
let word2 = `a`
let word3 = `hello`



const isPalindrome = (w) => {
    const letters = w.split("");
    const revLettersArr = letters.reverse(); 
    const reversedString = revLettersArr.join("");
    if (w === reversedString) {
        return true; 
    } else {
        return false;
    }
}
console.log(isPalindrome(word));
console.log(isPalindrome(word2));
console.log(isPalindrome(word3));