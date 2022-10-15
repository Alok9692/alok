const getInf ={
    name:"lithium",
    week:"W3D5",
    topic:"Todays node js topic-- how to create module and explore it",
}
const today = new Date()
const day = today.getDate()
const month = today.getMonth()
const year = today.getFullYear()
function getBatchInfo(){
console.log("Batchname:", getInf.name);
console.log("current date:", getInf.week);
console.log("today read:", getInf.topic);

console.log(day)
console.log(month)
console.log(year)
}
module.exports.getBatchInfo = getBatchInfo;