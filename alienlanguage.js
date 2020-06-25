function alienLanguage(str){
    return str.toUpperCase().split(" ").map(f => f.slice(0,-1) + f.slice(-1).toLowerCase()).join(" ")
    }
    
    // uppercasing everything and then lowercasing the last one
    
    
    console.log(alienLanguage("Ion kno nun bout vituh ohteez i wunt eem knowem froma baguh whiterice"))
                