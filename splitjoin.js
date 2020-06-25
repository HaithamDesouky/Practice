function splitAndMerge(string, separator) {

    return string.split(" ").map(w => w.split("").join(separator)).join(" ")
    }

    //split string into array of WORDS, space between
//use map to split the word further into strings
//join with separator but still in array
//join again the entire result of arrays into string with spaces between words