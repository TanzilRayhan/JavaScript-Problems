function cubeNumber(number) {
    if (typeof number !== "number") {
        return "INVALID!!! Please input number"
    }
    const cube = Math.pow(number, 3);
    return cube;
}

// console.log(cubeNumber(3))

function matchFinder(string1, string2) {
    if (typeof string1 == "string" && typeof string2 == "string") {
        if (string1.includes(string2)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "Both strings are required";
    }
}

// console.log(matchFinder('Hello', 'He'));


function sortMaker(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            return "Provide an array of Number"
        }
        else {
            if (arr[i] < arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                return arr;
            }
            else if (arr[i] < 0 || arr[i + 1] < 0) {
                return "invalid";
            }
            else if (arr[i] === arr[i + 1]) {
                return "equal";
            }
        }
    }
}
// const inputArray = [3, -3,];
// console.log(sortMaker(inputArray));



function findAddress(obj) {
    if (typeof obj != "object") {
        return 'Input Object';
    }
    else {
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';

        let output = '';
        output += street + ',' + house + ',' + society;
        return output;
    }
}

// const person = {
//     street: 10,
//     // house: "15A",
//     // society: "Earth Perfect"
// }
// console.log(findAddress(person));


function canPay(changeArray, totalDue) {
    if (changeArray.length > 0) {
        let sum = 0;
        for (let i = 0; i < changeArray.length; i++) {
            sum += changeArray[i];
        }
        if (sum >= totalDue) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "Empty Array!! Input values"
    }

}
// const numbers = [1,4,];
// const price = 10;
// console.log(canPay(numbers, price));