// using prototype we can inject the function / create the method inside the javascript

function createUser(username,score){
    this.username=username
    this.score=score
}

const chai=new createUser("chai",20)
const tea=new createUser("tea",205)

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`)
}
 
chai.printMe()

// new keyword initiates the creation of javascript object
