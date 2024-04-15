function mergeArrays(sortedArray, inputArray) {
    let result = [];
    let currentRange = [];

    for (let i = 0; i < inputArray.length; i++) {
        let index = sortedArray.indexOf(inputArray[i].sort);

        if (index !== -1) {
            currentRange.push(inputArray[i].text);

            if (i === inputArray.length - 1 || index !== sortedArray.indexOf(inputArray[i + 1].sort) - 1) {
                if (currentRange.length > 1) {
                    result.push(`${currentRange[0]}~${currentRange[currentRange.length - 1]}`);
                } else {
                    result.push(currentRange[0]);
                }

                currentRange = [];
            }
        }
    }

    return result.join('、');
}

// 示例用法
const sortedArray = [
    1,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68
]
const inputArray = [
    {
        "value": "9dfbe3e3-6c18-4597-98e8-b44f898f8c7a",
        "text": "zxcvz",
        "sort": 1
    },
    {
        "value": "e49ca70f-bfb7-4635-91e9-8053640ab413",
        "text": "P1",
        "sort": 4
    },
    {
        "value": "6fad78c7-ac73-43cc-8d78-232775ebd01f",
        "text": "P2",
        "sort": 5
    },
    {
        "value": "66fde695-3cf0-4cf3-bd87-73f208b9c659",
        "text": "P3",
        "sort": 6
    },
    {
        "value": "e50e3c53-d8e7-457a-8e81-4fcf52f1e0ed",
        "text": "P8",
        "sort": 7
    },
    {
        "value": "7a1d2070-ab56-4679-880c-b3d4c97362f5",
        "text": "职等3",
        "sort": 8
    },
    {
        "value": "0a4bb925-f3d1-45a9-b87c-b2f661453705",
        "text": "wei_上地村零级职等",
        "sort": 12
    },
    {
        "value": "431b818b-522d-4335-9961-c2dd299d26d6",
        "text": "M2-1",
        "sort": 14
    },
    {
        "value": "06eb1a20-1788-4ba6-9969-4661e45014da",
        "text": "后端职等",
        "sort": 16
    }
]

const result = mergeArrays(sortedArray, inputArray);
console.log(result);