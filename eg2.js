// as we know in javascript everything is evolved from object,
// if we inject any method in object it will be accessed through all

let arr=['abhi','codes']
let obj={
    username:'abhi',
    task:'codes',
    getUser:function(){
        console.log(this.username)
    }
}
obj.getUser() //abhi

// as we have seen this keyword took the reference from its own object
//let us inject the global method inside object which can be accessed everywhere

Object.prototype.abhilash=function(){
    console.log('abhilash is present everywhere')
}

arr.abhilash() // abhilash is present everywhere
obj.abhilash() // abhilash is present everywhere