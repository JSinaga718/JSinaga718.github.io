
/*
//Find a Singular character in a string


function countingCharacters2(stringToCount, characterToFind){
  var characterCount= 0;
  for (var characterPosition= 0;
    characterPosition < stringToCount.length;
      characterPosition++){
    if (stringToCount[characterPosition]==characterToFind){
      characterCount++;
    }
  }
  console.log ("String to search in: " + stringToCount);
  console.log("Character to find: " + characterToFind);
  console.log("Number of times the character appears:" + characterCount);
}

countingCharacters2("Jedika","J");




//Finding a set of characters in a string//

//str-string to search
//search- characters to find in str

function countingCharacters3(str,search){
  var count= 0; //# found
  var numChars = search.length;
  var lastIndex = str.length - numChars;
  //declaring all variables first
  
  
  //now using for loop to look for the series of characters
  
  for (var index = 0; index <=lastIndex; index ++){
    var current = str.substring(index, index + numChars);
    if (current == search){
      count++;
    }
  }
  console.log ("String to search in: " + str);
  console.log("Character to find: " + search);
  console.log("Number of times the character appears: " + count);
}

countingCharacters3("xxaxxxbxx","xx");

*/

// str-string to search
//search - characters to find in str 

function countingCharacters3(str,search){
  var count = 0; 
  var numChars = search.length;
  var lastIndex = str.length - numChars;
  
  
  
  for (var index = 0; index <= lastIndex; index++){
    var current = str.substring(index, index + numChars);
    if (current == search){
      count++;
    }
  }
  return count;
}

console.log(countingCharacters3("xxaxxxbxx","xx"));
