class centralTendency {
    constructor(values){
        this.x = values;
    }

    mean(){
        const sumValues = this.x.reduce((arr, val) =>(arr + val), 0 )
        return sumValues/this.x.length;
    }

    median (){
        sortedData = sort(this.x);
        
    }
}










// MY CONSOLES
const stats1 = new centralTendency([1,2,3,4,5,6,7,8,9,10]);

console.log(stats1.mean());