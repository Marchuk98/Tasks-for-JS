let stringToNumberDict = {
    'nil': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10
}

function scoreboard(string) {

    let result = []

    const words = string.split(' ')

    for(let word of words ){
       if(stringToNumberDict.hasOwnProperty(word)){
        result.push(stringToNumberDict[word])
       }
    }
    return result
  }
