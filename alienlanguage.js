function alienLanguage(str){
    return str.toUpperCase().split(" ").map(f => f.slice(0,-1) + f.slice(-1).toLowerCase()).join(" ")
    }
    
    // uppercasing everything and then lowercasing the last one
    
    
    console.log(alienLanguage("Ion kno nun bout vituh ohteez i wunt eem knowem froma baguh whiterice"))



function truncateString(str, num) {
  let dots =  "..."
  let string = ""
      
  if(str.length <= num){
  return str.split("")
  
}
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
    