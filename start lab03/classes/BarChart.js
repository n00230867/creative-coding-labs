class BarChart {
    constructor(_data,_xValue,_yValue,_chartHeight, _chartWidth, _barWidth, _margin, _axisThickness, _chartPosX, _chartPosY){
        this.data = _data;
        this.xValue = _xValue;
        this.yValue = _yValue;
        this.chartHeight = _chartHeight;
        this.chartWidth = _chartWidth;
        this.barWidth = _barWidth;
        this.margin = _margin;

        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2)) / (this.data.length-1);
        this.scaler = this.chartHeight/(max(cleanedData.map(row => row[this.yValue])));

        this.axisThickness = _axisThickness;
        this.chartPosX = _chartPosX;
        this.chartPosY = _chartPosY;
        this.axisColour = color(255,255,255);
        this.barColour = color(0,255,150);
        this.axisTextColour = color(0,255,0);
    }

    render() {
        background(0, 150, 150);

        push();
        translate(this.chartPosX, this.chartPosY);
        noFill();
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
        line(0, 0, 0, -this.chartHeight);
        line(0, 0, this.chartWidth, 0);

        // Yaxis tick-----------------------------------------------------------------------------
        let numTicks = 6;
        let tickSpacing = this.chartHeight / numTicks;
        let maxDataValue = this.chartHeight / this.scaler;

        push();
        for (let i = 0; i <= numTicks; i++) {
            let y =- i * tickSpacing;

            stroke(this.axisColour);
            line(-5, y, 0, y);

            noStroke();
            fill(this.axisTextColour);
            textSize(10);
            textAlign(RIGHT, CENTER);
            let tickValue = i * (maxDataValue / numTicks);
            text(tickValue.toFixed(0), -7, y);
        }
        pop();

        push();
        translate(this.margin, 0);
        for (let i = 0; i < this.data.length; i++) {
            let xPos = (this.barWidth + this.gap) * i;
            fill(this.barColour);
            rect(xPos, 0, this.barWidth, - this.data[i][this.yValue] * this.scaler);

            fill(this.axisTextColour);
            noStroke();
            textSize(10);
            push();
                translate(xPos + (this.barWidth / 2), 10);
                rotate(90);
                text(this.data[i][this.xValue], 0, 0);
            pop();
        }
        pop();
        pop();
    }
}
