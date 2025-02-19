let friend01 = { name: "Kieron", age: 19, bowling: true };
let friend02 = { name: "Josh", age: 27, bowling: false };
let friend03 = { name: "Adam", age: 19, bowling: true };
let friend04 = { name: "Ross", age: 25, bowling: false };
let friend05 = { name: "Tom", age: 21, bowling: true };

let friends = [];
let arrayNum = [];
let friendAges = [];

friends.push(friend01);
friends.push(friend02);
friends.push(friend03);
friends.push(friend04);
friends.push(friend05);

for (let i = 0; i < 5; i++) {
    if (friends[i].bowling) {
        arrayNum.push(friends[i].age)
    };
};

function calcAvg(arrayNum) {
    let startAvg = 0;

    for (let i = 0; i < arrayNum.length; i++) {
        startAvg = startAvg + arrayNum[i];
        console.log(startAvg);
    };
    return startAvg/arrayNum.length;
}

console.log(calcAvg(arrayNum));

function median(arrayNums){
    if(arrayNums.length%2==0){

    let endNum = arrayNums.length/2
    let startNum =endum - 1
    return arrayNums[startnum] + arrayNums[endNum]
    }
}
