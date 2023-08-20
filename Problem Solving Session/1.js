// starting at 9:10 Sharp

// JS OOPS

// 1.remove all undefined and null properties from a given Object
const obj1 = {
    a: 1,
    b: null,
    c: undefined,
    d: 'Hello',
    e : null,
    f : 12345,
    g : undefined
}
// solution 
function removeNullUndefined(obj){

    for(let key in obj ){
        if(obj.hasOwnProperty(key)){
            if(obj[key]=== null || obj[key]===undefined){
                delete obj[key]
            }
        }
    }

    return obj

}


console.log(removeNullUndefined(obj1))


















