let data;
let cleanedData = [];

function preload() {
    data = loadTable('data/Combined.csv', 'csv', 'header')
}

function setup() {
    createCanvas(500, 500)
    angleMode(DEGREES)
    noLoop()
    cleanData();
}

function draw() {
    background(215, 225, 30)

    push();
        translate(300, 300);
        rotate(-30);
        fill(255, 255, 255);
        rect(0, 0, 100, 100);
        stroke(0, 0, 0);
    pop();

    push();
        translate(250, 150);
        rotate(30);
        fill(255)
        rect(0, 0, 100, 100);
    pop();

    // let femaleAges = [];

    //Method 1-----------------------------------------------------------------
    // for (let i = 0; i < cleanedData.length; i++) {
    //     console.log(i)
    //     femaleAges.push(cleanedData[i].Female)
    //     console.log(femaleAges)
    // }

    //Method 2-----------------------------------------------------------------
    // cleanedData.forEach(
    //     function (row) {
    //         femaleAges.push(row.Female)
    //     }
    // )

    //Method 2a----------------------------------------------------------------
    // cleanedData.forEach(
    //      row =>{femaleAges.push(row.Female)}
    // );

    let femaleScore = cleanedData.map(row => row.Female)
    let ageGroups = cleanedData.map(row => row.Age_Group)
    console.log(femaleScore,ageGroups );
}

function cleanData() {
    for (let i = 0; i < data.rows.length; i++) {
        cleanedData.push(data.rows[i].obj)
    };

    for (let i = 0; i < cleanedData.length; i++) {
        cleanedData[i].Female = parseInt(cleanedData[i].Female)
        cleanedData[i].Male = parseInt(cleanedData[i].Male)
        cleanedData[i].Total = parseInt(cleanedData[i].Total)
    }
}