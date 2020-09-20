function dot_product(v1,v2) {
    var ps=0;
    for(var i=0;i<3;i++) {
        for(var j=0;j<3;j++) {
            if(i===j) {
                ps+=v1[i]*v2[j];
            }
        }
    }
    return ps;
}
//for two given arrays of vectors 
var v1=[1,2,3];
var v2=[4,3,5];
var ps=dot_product(v1,v2);
//the expected result of dot_product is 20
if(ps===0) {
    console.log(`The the two vectors ${v1} and ${v2} are orthogonals ,their dot product is ${0}`);
}
else {
    console.log(`The dot product for ${v1} and ${v2} is ${ps}`)
}