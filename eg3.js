//inheritance : If any object wants to share the data with the other object
// it can be shared through inheritance

// ===PROTOTYPAL INHERITANCE========//
const user={
    name:'abhi',
    email:'abhi@.com'
}
const teacher={
    makevideo:true
}

const teachingSupport={
    isavailable:false
}

const taSipport={
    makeAssignments:'javascript',
    __proto__:teachingSupport
}

//older approach
teacher.__proto__=user

//modern approach
Object.setPrototypeOf(teacher,user)

console.log(teacher.name) //abhi