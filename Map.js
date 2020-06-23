function cutIt(arr){


let min = Math.min(...arr.map(val => val.length))

return arr.map(val => val.slice(0,min))
  
  }
  

function extractFullName(names){
    let arrWithFullNames = names.map(function(val){
      return val.first + " " +  val.last
    })
    return arrWithFullNames
  }
  
  
  console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}])) 

function extractKey(names){
    let arrWithVals = names.map(function(val){
       return val.name
     })
     return arrWithVals
    
     
   }
   
   
   console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'))
   

   function extractKey(names){
    let arrWithVals = names.map(function(val){
       return val.name
     })
     return arrWithVals
    
     
   }
   
   
   console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'))
   
   
   
   
   
   
   
   // // function doubleArray(arr){
   // //   let newArr = []
   // //   for(val of arr){
   // //     newArr.push(val * 3) 
   // //   }
   // //   return newArr
   // // }
   
   // // console.log(doubleArray([1,2,3,4,5,6,8]))
   
   // let arr = [1,2,3,4,5,6,8]
              
   // let newArr = arr.map(function(number, index){
   //       return number * index
   //     }  )
   
   // console.log(newArr)
   
   // function doubleAll(numbers){
   // let newArr = numbers.map(function(number){
     
   //   return number * 2
   // })
   //    return newArr 
   // }
   
   // console.log(doubleAll([1,2,3,4,5,6,8]))