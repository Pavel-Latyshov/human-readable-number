let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
module.exports = function toReadable(number) {
    let arr = String(number)
        .split('')
    if (arr.length == 1) {
        return `${units[+arr]}`

    } else if (arr.length == 2) {

        if (arr[1] == 0) {
            return `${dozens[arr[0] - 1]}`

        } else if (arr[0] == 1) {
            arr = arr.join('')
            return `${units[arr]}`

        } else if (arr[0] > 1) {
            return `${dozens[arr[0] - 1]} ${units[arr[1]]}`
        }

    } else if (arr.length == 3) {

        if (arr[1] == 0 && arr[2] == 0) {
            return `${units[arr[0]]} hundred`
        } else if (arr[1] == 0) {
            return `${units[arr[0]]} hundred ${units[arr[2]]}`
        } else if (arr[1] == 1) {
            let newArr = []
            for (i of arr) {
                newArr.push(i)
            }
            newArr.shift()
            newArr = newArr.join('')
            return `${units[arr[0]]} hundred ${units[newArr]}`
        } else if (arr[2] == 0) {
            return `${units[arr[0]]} hundred ${dozens[arr[1] - 1]}`
        } else {
            return `${units[arr[0]]} hundred ${dozens[arr[1] - 1]} ${units[arr[1 + 1]]}`
        }

    }
}
