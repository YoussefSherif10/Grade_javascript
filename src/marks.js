// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math,english,science,social,language) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (!math || ! english || !science || !social || !language)
                return reject('Null values for marks');
            resolve(math + english + science + social + language);
        })
    })
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(totalMarks / 5);
        })
    }) 
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (averageMarks >= 90)
                return resolve('A+');
            if (averageMarks >= 80 && averageMarks <= 89)
                return resolve('A');
            if (averageMarks >= 70 && averageMarks <= 79)
                return resolve('B');
            if (averageMarks >= 60 && averageMarks <= 69)
                return resolve('C');
            if (averageMarks >= 50 && averageMarks <= 59)
                return resolve('E');
            if (averageMarks < 50)
                return resolve('F');
        })
    })   
}

module.exports = {
    calculateAverageMarks,calculateGrade,calculateTotalMarks
}
