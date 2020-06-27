function sumEvenArgs(...args){
    return args.reduce((acc,next) => next%2==0?acc+=next: acc,0)
   }
   console.log(sumEvenArgs(1,4,2,3,4,5))
   
   
   function sumEvenArgs(...args){
    
    return args.filter(f => f %2==0).reduce((acc,next) => acc +=next)
     
   }
   console.log(sumEvenArgs(1,4,2,3,4,5))
   
   
   function joinArrays(...args) {
   return args.reduce((acc,next) => acc.concat(next),[])
   
     
     
     
   }
   
   console.log(joinArrays([1,2,4],[2],[3]))
   
   
   
   function placeInMiddle(arr, vals) {
     let newArr = arr.slice(0,arr.length/2)
     newArr.push(...vals)
     let secondPart = arr.slice(arr.length/2, arr.length)
     let final = newArr.push(...secondPart)
     return newArr
   }
   
   function placeInMiddle(arr,vals){
     let mid = arr.length/2
     arr.splice(mid,0,...vals)
     return arr
     
     
   }
   
   console.log(placeInMiddle(["beginning", "end"],[2,3,4,4]))