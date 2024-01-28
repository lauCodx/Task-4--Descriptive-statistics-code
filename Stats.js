class centralTendency {
    constructor(numbers){
        this.x = numbers;
    }

    mean(){
        const sumValues = this.x.reduce((arr, val) =>(arr + val), 0 ) // Adds all the values in the array using the reduce() function
        return sumValues/this.x.length;
    }

    // Median is all about finding the middle number.
    median (){
        const sortedData = this.x.sort() // arranges the numbers in accending order using the sort() function.
        const getMiddleNumber = Math.floor(this.x.length / 2); //floor() rounds up decimal number to a whole number.

        return sortedData.length % 2 === 1 ? sortedData[getMiddleNumber] : (sortedData[getMiddleNumber -1] + sortedData[getMiddleNumber]) / 2;
        
    }

    mode() {
        
    }
}

class measuresOfDispersion extends centralTendency {
    // constructor (numbers){
    //     this.data = numbers;
    //     // this.centralT = new centralTendency();
        
    // }

    range(){
        const calcRange = this.x[this.x.length - 1] - this.x[0];
        return calcRange;

    }

    meanDeviation() {
        
        // const meanValue = centralT.mean();
        const meanValue = this.mean()
        return this.x.reduce((x1, x2) => x1 + Math.abs(x2 - meanValue), 0 ) / this.x.length;

    }

    variation(){
        const meanValue =this.mean();
        return this.x.reduce((x1, x2) => x1 + Math.pow(x2 - meanValue, 2), 0 ) / this.x.length;
    }

    standardDeviation(){
        return Math.sqrt(this.variation())
    }


}

 







// INSTANTIATING CLASSES............................
const stats1 = new centralTendency([1,2,3,4,5,6,7,8,9]);
const stats2 = new measuresOfDispersion([1,2,3,4,5,6,7,8,9,10]);

// MY CONSOLES
console.log(stats1.mean());
console.log(stats1.median());
console.log(stats2.range());
console.log(stats2.meanDeviation());
console.log(stats2.variation());
console.log(stats2.standardDeviation());