let data = [];
let cleanedData = [];
let charts = [];


function preload(){
    data = loadTable('data/Combined.csv', 'csv', 'header');
}

function setup() {
    createCanvas(500, 500);
    noLoop(); // this will stop the draw function from looping
    angleMode(DEGREES); // this will change the angle mode to degrees
    cleanData();
    charts.push(new BarChart(cleanedData,"Age_Group","Female",400,400,10,15,2,50,450))
}

function draw(){
    background(0, 150, 150);
    charts.forEach(charts => {
        charts.render();
        // charts.renderBars();
        // charts.renderLabels();
        // charts.renderAxis();
        // charts.renderTicks();
    });

    //SHAPES
    // push();
    // translate(300,300);
    // rotate(-45)
    // fill(255,0,0);
    // stroke(0,0,0);
    // rect(0,0,100,100);
    // pop();

    // push();
    // translate(150,150);
    // rotate(30);
    // fill(255,0,255);
    // stroke(0,0,0);
    // rect(0,0,100,100);
    // pop();

    // let femaleAges = []
    //METHOD1----------------------------------------------------------------------------------
    // for(let i=0; i<cleanedData.length; i++){
    //     // console.log(i);
    //     femaleAges.push(cleanedData[i].Female)
    //     console.log(femaleAges)
    // }
    
    //METHOD2----------------------------------------------------------------------------------
    // cleanedData.forEach(
    //     function(row){
    //         femaleAges.push(row.Female)
    //     }
    // )
    // console.log(femaleAges)

    //METHOD2.5 WITH ARROW FUNCTION
    // cleanedData.forEach(
    //     row => femaleAges.push(row.Female)
    // );

    //METHOD3----------------------------------------------------------------------------------
    // let femaleAges = cleanedData.map(
    //     function(row){
    //         return row.Female
    //     }
    // )

    //METHOD3.5 WITH ARROW FUNCTION
    // let femaleAges = cleanedData.map(row => row.Female)

    //this is used for every method
    // console.log(femaleAges)

}

function cleanData(){
    for (let i = 0; i < data.rows.length; i++){
        cleanedData.push(data.rows[i].obj);  
        }
    for(let i=0; i<cleanedData.length; i++){
        cleanedData[i].Female = parseInt(cleanedData[i].Female);
        cleanedData[i].Male = parseInt(cleanedData[i].Male);
        cleanedData[i].Total = parseInt(cleanedData[i].Total);
    }

}

// class Friend{
//     constructor(){
//         this.name = "John";
//         this.nummber = 239;
//     }
// }

// class Friend{
//     constructor(_name, _number){
//         this.name = _name;
//         this.nummber = _number;
//     }

//     report(){
//         console.log(this.name, this.nummber)
//     }
// }

// let friends = [];
// friends.push(new Friend("Kieron", 234));
// friends.push(new Friend("Adam", 768));
// friends.push(new Friend("Ryan", 454));
// console.log(friends);