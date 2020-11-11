// Code your solution here
function findMatching(arr, str) {
    return arr.filter(function(word){
        return word.toLowerCase().indexOf(str.toLowerCase()) >= 0;
    });
}

function fuzzyMatch(arr, str) {
    return arr.filter((word) => word.startsWith(str));
}

function matchName(arr, str){
    return arr.filter(function(word){
        if(word.name == str){
            return word;
        }
    });
}