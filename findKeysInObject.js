
// lets create a more program to check if key exist in this obj
let student = {
    name: 'Toseef',
    interest: {
        learning: ['Php', 'Python', 'C', 'C++', 'C#', 'Java*'],
        eating: {
            food: ['Apple', 'mango']
        }
    },
}

let checkKeyExist = (obj, searchingKey) => {
    let callbackFunction = (key) => {
        if (key === searchingKey) {
            console.log('Found');
        } else {
            if (typeof student[key] === 'object' && !Array.isArray(student[key])) {

                let cloneObj = { ...student[key] }

                checkKeyExist(cloneObj, searchingKey);
            }
        }
    }
    for (let key in obj) {
        callbackFunction(key);
    }
}

checkKeyExist(student, 'learning');