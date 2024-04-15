let num: number
num = 123;
num = 0b1111011; // 二进制
num = 0o173;     // 八进制
num = 0x7b;      // 十六
// num = "123";     // error 不能将类型"123"分配给类型"number"

let str: string
str = "Hello TypeScript";
const first = "Hello";
const last = "TypeScript";
str = `${first} ${last}`;

let bool: boolean
bool = true;
bool = !!0

let bigNum: bigint
bigNum = BigInt(111)
// bigNum = 111 // error

let list1: (string | number)[] = [1, '2', 3];
let list2: Array<number | string> = [1, '2', 3];

let obj: {
    name: string;
    age: number;
}
obj = {
    name: 'ysc',
    age: 18,
    // sex: 1 // error
}
// obj = 222 // error

enum Enum {
    Name = 'hello',
    Age = 1
}

console.log(Enum[1])

interface Name {
    color?: string;
    type: string;
  }
  
  const getName = ({ color, type }: Name) => {
  };
  
  getName({
    type: "ysc",
    size: 1111,
    price: 12222
  } as Name) // 加上不报错


type Config = {
    name: string;
    age: number;
}

type ConfigFunction = {
    [key in keyof Config as `${key}function`]?: (value: Config[key]) => string;
}

const functionMap: ConfigFunction = {
    namefunction: (value = 'ysc') => {
        return value
    }
}
