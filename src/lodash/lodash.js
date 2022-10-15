const lod = require("lodash");

function lodash() {
    const month1 = ["jan","feb","mar","apr","may","jun","july","aug","sep","oct","nov","dec"]
    console.log(lod.chunk(month1,4));

    const oddNum = [1,3,5,7,9,11,13,15,17,19]
    console.log(lod.tail(oddNum,9));

    const Num = [ 2,4,3,5,2,6,4,8,4]
    console.log(lod.union(Num));

    const keyValue = [
       ["horror","The Shining"],
       ["drama","Titanic"],
       ["thriller","Shutter Island"],
       ["fantasy","Pans Labyrinth"]   
    ];
    console.log(lod.fromPairs(keyValue));
}
module.exports.lodash = lodash;
