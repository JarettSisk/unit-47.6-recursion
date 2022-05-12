/** product: calculate the product of an array of numbers. */

const { Obj } = require("nunjucks/src/object");

function product(nums) {

  if (nums.length <= 1) return nums[0];

  return nums[0] *= product(nums.slice(1))

}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx=0, longestWord="") {

  if(idx < words.length) {
    if(longestWord.length < words[idx].length) {
      longestWord = words[idx];
    }
    idx++;
    console.log(idx)
    return longest(words, idx, longestWord)
  }
  
  return longestWord.length;
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, newStr=[]) {
  if(idx < str.length) {
    // add the letter to our newStr array
    newStr.push(str[idx]);
    // move forward by 2
    idx+= 2;
    // run again
    return everyOther(str, idx, newStr);
  }

  return newStr.join("");
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=0, rev="") {
  // make a reverse dupe
  rev = str.split("").reverse().join("");
  if(idx < str.length) {
    if(str[idx] === rev[idx]) {
      idx++;
      return isPalindrome(str, idx, rev);
    }
    else return false;
  }
  return true


}



/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (idx < arr.length) {
    if(arr[idx] === val) {
      return idx;
    } 
    idx++;
    return findIndex(arr, val, idx)
  }
  return -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=0, rev=[]) {
  if(idx < str.length) {
    rev.unshift(str[idx]);
    idx++;
    return revString(str, idx, rev);
  }

  return rev.join("");
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, newArr=[]) {
  for(let key in obj) {
    if(obj[key] instanceof Object) {
      gatherStrings(obj[key], newArr);
    }
    if(typeof(obj[key]) === typeof("string")) {
      console.error(obj[key])
      newArr.push(obj[key]);
    }
  }

  return newArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length - 1, middle=Math.floor((left + right) / 2)) {
  if(left <= right) {
    // if greater than
    if(arr[middle] > val) {
      right = middle - 1;
      middle = Math.floor((left + right) / 2);
      return binarySearch(arr, val, left, right, middle);
    }
    // else if less than
    else if(arr[middle] < val) {
      left = middle + 1;
      middle = Math.floor((left + right) / 2);
      return binarySearch(arr, val, left, right, middle);
    } else {
      return middle;
    }
  }
  
  return -1

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
