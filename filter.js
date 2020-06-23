//iskey in the object???

function filterByValue(arr, key){
    return arr.filter(val => val[key])
     
   }
   
   
    console.log(filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner'))


//is value in array? push new array with this value, unless undefined (hence [0])

    function find(arr, value){
        return arr.filter(val => val === value ? value :undefined)[0]
         
       }
       
       
        console.log(find([1,2,3,4,5], 3))


        ////similar if value in key is true

        function findInObj(arr, key, searchValue) {

            return arr.filter(val => val[key] === searchValue)
            
          }
         
         console.log(findInObj([{first: 'Elie', last:"Schoppi"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true)) // {first: 'Tim', last:"Garcia", isCatOwner: true}
       