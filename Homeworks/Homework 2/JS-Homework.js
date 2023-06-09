//Zadacha 1
class Person {
    constructor(name, age, gender) {
        this.name = name; 
        this.age = age; 
        this.gender = gender; 
    }
    showPersonInfo() { console.log(`name: ${this.name}\nage: ${this.age}\ngender: ${this.gender}`); } 
};

class Student extends Person {
    constructor(name, age, gender, grade) {
        super(name, age, gender); 
        this.grade = grade; 
    }
    showStudentInfo() { console.log(`name: ${this.name}\nage: ${this.age}\ngender: ${this.gender}\ngrade: ${this.grade}`); } 
}

class Employee extends Person {
    constructor(name, age, gender, daySalary) {
        super(name, age, gender); 
        this.daySalary = daySalary; 
    }
    calculateOvertime(hours) {
        var overtimeSalary = 0; 
        if(this.age >= 18) {
            overtimeSalary = (this.daySalary/8)*hours*1.5; 
        }
        return overtimeSalary; 
    }

    showEmployeeInfo() { console.log(`name: ${this.name}\nage: ${this.age}\ngender: ${this.gender}\ndaySalary: ${this.daySalary}`); }

}

//Zadacha 1 - Test case

const ivan = new Person('Ivan', 24, "male");
const drago = new Employee("Drago", 23, 'male', 50);
const pencho = new Student("Pencho", 23, 'male', 253);
const gosho = new Person('Gosho', 24, 'male');
const dimitur = new Employee("Mitko", 17, 'male', 50);
const penko = new Student("Penko", 23, 'male', 253);

const array = [10]; 
array.push(ivan); 
array.push(drago); 
array.push(pencho); 
array.push(gosho); 
array.push(dimitur); 
array.push(penko); 

for(var i = 0; i < 10; i++)
{
    if(array[i] instanceof Student) array[i].showStudentInfo(); 
    else if(array[i] instanceof Employee) {
        array[i].showEmployeeInfo(); 
        console.log(`Overtime bonus: ${array[i].calculateOvertime(2)}`);
    }
    else if(array[i] instanceof Person) array[i].showPersonInfo();  
}


//Zadacha 2

class Cat {
    constructor(name, breed, age) {
        this.name = name; 
        this.breed = breed; 
        this.age = age; 
    }
}

function sortByName(Cat){
    Cat.sort((a, b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        else if (fa > fb) {
            return 1;
        }
        else return 0;
    });
}

function sortByAge(Cat){
    Cat.sort((a, b) => {
        return a.age - b.age; 
    });
}

function sortByBreed(Cat){
    Cat.sort((a, b) => {
        return a.breed.length - b.breed.length; 
    });
}

function sortByAll(Cat){
    Cat.sort((a, b) => {
        const sum1 = a.name.length + a.breed.length + a.age; 
        const sum2 = b.name.length + b.breed.length + b.age;

        return sum1 - sum2; 
    });
}

function sortCats(Cat, criteria){
    if(criteria == "name"){
        sortByName(Cat); 
    }
    else if(criteria == "age"){
        sortByAge(Cat); 
    }
    else if(criteria == "breed"){
        sortByBreed(Cat); 
    }
    else if(criteria == "all"){
        sortByAll(Cat); 
    }

    return Cat; 
}

//Zadacha 2 - Test case

const arr = [{"name": "Tina", "breed" : "Maine Coon", "age" : 2}, {"name": "Annie", "breed" : "Maine Coon", "age" : 7}, {"name": "Polly", "breed" : "Brittish shorthair", "age" : 3}];
sortCats(arr, "age"); 
console.log(arr); 

//Zadacha 3

function checkPalindrome(str) {  
    const len = str.length;  
    var isPalindrome = true; 
    
    for (let i = 0; i < len / 2; i++) {  
        if (str[i] !== str[len - 1 - i]) {  
          isPalindrome = false;
        }  
    }  
    return isPalindrome; 
}  

function checkArray(arr){
    const result = arr.filter(el => checkPalindrome(el));
    return result;  
}

//Zadacha 3 - Test case

const arr2 = ["abccba", "lalala", "something", "123321", "debel lebed"];
console.log(checkArray(arr2));
