let city1 = {};
city1.name = "ГородN";
city1.population = 10000000;
let city2 = {
    name: "ГородM",
    population: 1e6
 
    }
    function getName() { return this.name; }
    city1.getName = getName;
    city2.getName = getName;
     
    function exportStr() { return `name=${this.name}\npopulation=${this.population}\n`; }
    city1.exportStr = exportStr;
    city2.exportStr = exportStr;
    //це тест
console.log(city1.exportStr());
console.log(city2.exportStr());
