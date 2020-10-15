 module.exports = toReadable;


function toReadDecade(arr,obj,num) {
    let result = "";
    if (!obj[num]) {
        obj[arr[0] * 10]
            ? result += obj[arr[0] * 10]
            : result += obj[arr[0]] + "ty";
        obj[arr[1]] ? result += " " + obj[arr[1]] : result;
    } else {
        result = obj[num];
    }
    return result;
}

function toReadable(number) {
    if (number === 0){
        return 'zero';
    }
    let result = "";
    let objForRead = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        80: "eighty"
    }
    if (number) {
        let arrNum = number.toString().match(/.{1}/g);
        if (arrNum.length == 1) {
            for (let i = 0; i < arrNum.length; i++) {
                let numberKey = +(arrNum[i]);
                result = objForRead[numberKey];
            }
        } else if (arrNum.length == 2) {
            result = toReadDecade(arrNum, objForRead, number);
        } else {
            if (arrNum[1] == 0 && arrNum[2] == 0) {
                result += objForRead[arrNum[0]] + " hundred";
            } else {
                result += objForRead[arrNum[0]] + " hundred" + " ";
                let newArr = arrNum.splice(1, 2);
                let newNum = +(number.toString().substring(1));
                result += toReadDecade(newArr, objForRead, newNum);
                
            }
        }
    }
    return result;
}


console.log(toReadable(770));