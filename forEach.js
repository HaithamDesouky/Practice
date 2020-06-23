// {/* <h1>For Each</h1>
// <ul>
// <li>Iterates through array</li>
// <li>Runs callback funciton on each value</li>
// <li>Always returns undefined</li>
// </ul>
// <h2>Anatomy</h2>
// array.method(callbackfunction(each value, each index, entire array) */}


// //doubleArray

// function doubleArray(arr){
  
//     let doubledArr = []
//     arr.forEach(function(value, index){
//       doubledArr.push(value * 2)
     
      
//     })
//        return doubledArr
     
//    }
   
//    doubleArray([1,2,3,4,5,6,7])

// //only evens

//    function onlyEvens(arr){
  
//     let evenArr = []
    
//     arr.forEach(function(value){
//       if(value % 2 == 0){
//         evenArr.push(value)
//       }
      
//     })
//      console.log(evenArr)
//    return evenArr 
     
//    }
   
//    onlyEvens([1,2,3,11,4, 88,5,6,7])


// // first and last character

// function firstLast(arr){
//     let result = [];
      
//     arr.forEach(function(value){
//        result.push(value[0] + value[value.length-1])
      
      
//     })
//     return result
      
//     }
    
//     console.log(firstLast(["car", "bike", "chicken"]))

// // adding key values to arrays with objects

// function addKeyAndValue(arr, key, value){
//     arr.forEach(function(val){
//       val["employm"] = "broke"
//       val["girlfriend"] = "none"
//       val[key] = value
//     })
    
//     return arr
    
//   }
//   console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], "title", "instructor"))
  
//   //value is instructor which we're putting in
  
//   //key is the title which we're putting in
  
//   //val is the value of the array item


//   //vowel count
//   function vowelCount(str){
//     let arrSplit = str.split(""); //splits string
//     let obj = {};  //creates emty object
//     let vowels = "aeiou"; //vowels
   
//    arrSplit.forEach(function(letter){ //arraymetthod with each letter as param
//        if(vowels.indexOf(letter.toLowerCase()) !== -1){  //if index of vowels is a letter to lower case
//          if(letter in obj){   //if letter is already a key in object
//            obj[letter]++
//          } else {
//            obj[letter] = 1  ///if it isn't then it's just 1
//          }}
//         })
//    console.log(obj)
//    return obj
    
//   }
//   console.log(vowelCount("hi"))
  

  ////////////////////





  function vowelCount(str){
    let splitString = str.split("")//splits string
   let obj = {}//creates emty object
    let vowels = 'aeiou' //vowels
    
  splitString.forEach(function(letter){
    if(vowels.indexOf(letter.toLowerCase()) != 1){
       if(letter in obj){
      obj[letter]++
    } else {
      obj[letter] = 1
    }
  }
  }
  ) 
  return obj 
  
 }


 function vowelCount(str){
  let splitString = str.split("")//splits string
 let obj = {}//creates emty object
  let vowels = 'aeiou' //vowels
  
splitString.forEach(function(letter){
  if(vowels.indexOf(letter.toLowerCase()) != 1){
     if(letter in obj){
    obj[letter]++
  } else {
    obj[letter] = 1
  }
  
}
}

) 
return obj 
 }

 