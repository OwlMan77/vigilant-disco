
const task1 = [
    "apple",
    "pear",
    "lemon",
    "orange",
    "pineapple",
    "tomato",
    "lettuce",
    "mango",
    "apple",
    "pineapple",
    "lemon",
    "pear",
    "pear",
];

const task1Eval = () => {
    const fruitMap = {
        'apple': 0,
        'pear': 0,
        'lemon': 0,
        'orange': 0,
        'pineapple': 0,
        'tomato': 0,
        'mango': 0,
        'banana': 0
    }

    /**
     *     We need to:
     *     take a count through and create a hash map
     *     log with interpolation
    */

    for (let i = 0; i < task1.length; i++) {
        console.log(task1[i])
        if (fruitMap[task1[i]] !== undefined) {
            fruitMap[task1[i]] += 1
        }
    }


    console.log(`
    Apple: ${fruitMap['apple']},\r
    Pear: ${fruitMap['pear']} \r
    Lemon: ${fruitMap['lemon']},\r
    Orange: ${fruitMap['orange']},\r
    Pineapple: ${fruitMap['pineapple']},\r
    Tomato: ${fruitMap['tomato']},\r
    Mango: ${fruitMap['mango']} \r
    Banana: ${fruitMap['banana']}`)

}

task1Eval()