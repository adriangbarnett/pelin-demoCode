
main();
function main() {
    const strArr = ["9999", "1400","8000", "2000"];
    var result = getHiLoNum(strArr);
    console.log(result); 
 }
 function getHiLoNum(req) {
    req.sort(); 
    var res = []; // response
    res.push(req[0]);
    res.push(req[req.length-1]);
    return res;
 }