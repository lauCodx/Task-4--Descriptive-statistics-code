class centralTendency {
    constructor(values){
        this.x = values;
    }

    mean(){
        const sumValues = this.x.reduce((arr, val) =>(arr + val), 0 ) // Adds all the values in the array using the reduce() function
        return sumValues/this.x.length;
    }

    // Median is all about finding the middle number.
    median (){
        const sortedData = this.x.sort() // arranges the numbers in accending order using the sort() function.
        const getMiddleNumber = Math.floor(this.x.length / 2); //floor() rounds up decimal number to a whole number.

        return sortedData.length % 2=== 1 ? sortedData[getMiddleNumber] : (sortedData[getMiddleNumber -1] + sortedData[getMiddleNumber]) / 2;
        
    }
}

 








// MY CONSOLES
const stats1 = new centralTendency([1,2,3,4,5,6,7,8,9]);

console.log(stats1.mean());
console.log(stats1.median());