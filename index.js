// Code your solution here
function findMatching(array, string) {
   
    let matches = array.filter(item => {
        return item.toUpperCase() === string.toUpperCase();
      });
    return matches
}

function fuzzyMatch(array, string) {
    let num = string.length
    let matches = array.filter(item => {
        let letters = item.substring(0, num)
        return letters.toUpperCase() === string.toUpperCase();
      });
    return matches

}

function matchName(array, string) {
    let matches = array.filter(item => {
        return item.name === string;
      });
    return matches
}