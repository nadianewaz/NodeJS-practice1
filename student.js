// ===== Create Local Module (By User) ==== 

const getName = () => {
    return "nadia"; 
}

const getAge = () => {
    return "20";
}
const cgpa = 3.97; 

// exports.getName = getName;
// exports.getAge = getAge;
// exports.cgpa = cgpa;

module.exports = {
    getName,
    getAge,
    cgpa

}; 