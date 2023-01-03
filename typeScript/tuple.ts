let x: [string, number];

x = ["hello", 28];

// x = [10, "Mark"] 오류발생

// x[2] = "world" 오류발생 ( 없는 langth는 undefined )

const person: [string, number] = ["Mark", 27]

const [first, second] = person;