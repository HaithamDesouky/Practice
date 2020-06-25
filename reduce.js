//how it works

someArray.reduce(function(accumulator, nextValue, index, array){
    return accumulator + nextValue
})


//how it looks like in arrow functons

let total = [100,3,5].reduce((acc,n) => acc *= n)



function extractValue(arr, key){
    arr.map(function(nextValue){
      return nextValue[key]
      
      
    })
  }
  
  console.log(extractValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}],'name'))


  // making an array of values

  

function extractValue(arr, key, value){
    return arr.reduce(function(acc, nextValue){
      acc.push(nextValue[key]);
      return acc
      
      
      
    }, [])
  }
  
  console.log(extractValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}],'name'))

  

  /// counting vowels and putting them in objects

  function vowelCount(str){
    let vowel = "aeiou"
   
    
    return str.split("").reduce(function(acc,next){ //split string
      if(vowel.indexOf(next.toLowerCase()) !== -1){  //does it have a vowel?
       if(next in acc){
         acc[next]++  //increment it with key of next
       } else {
         acc[next.toLowerCase()] = 1 // create a new object with one if it doesn't exist.
       }
        
      }   return acc
  
    }, {})
    
  }
  
  
  console.log(vowelCount('Elieaaaaaaa'))

  // very tricky
  

function addKeyAndValue(arr, key, value){  //takes in 3 arguments
  
  return arr.reduce(function(acc, next, idx){ //func
    acc[idx] [key] = value       //index of accumulator takes key and value
    return acc
    
  },arr)
    
    
    
  }
  
  console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], "title", "instructor"))