const task3 = [
    [2,5,1,2,3,5,1,2,4],
    [2,1,1,2,3,5,1,2,4],
    [2,3,4,5],
    [2,5,5,2,3,5,1,2,4]
]

const task3result = task3.map((list) => {
    let usedCharacters = ''
    let repeatedNumber;
    
    for (let i = 0; i < list.length; i++) {
        if (repeatedNumber === undefined) {
            if (usedCharacters.indexOf(`${list[i]}`) > -1) {
                repeatedNumber = list[i]
            }
            usedCharacters = usedCharacters + list[i]
        }

    }
    return repeatedNumber
})

console.log(task3result);