/*//inheritance
class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    speak (language){
        console.log(`${this.name} can speak ${language}`);
    }
}

class Employee extends Person{
    constructor(name, age, job){
        super (name, age);
        this.job=job;s
    }
    work (duration){
        console.log(`${this.name} works ${duration} hours a day!`);
    }
}

let p=new Person("Alyssa",20);
let e=new Employee("Law",18,"Apple Enthusiast");

e.speak("English");
e.work("18");

p.speak("Filipino");*/


/*//setters getters
class School{
    setName(name){
        this.name=name;
    }

    getName(){
        return this.name;
    }

    setLocation(location){
        this.location=location;
    }

    getLocation(){
        return this.location;
    }

    setPopulation(population){
        this.population=population;
    }

    getPopulation(){
        return this.population;
    }

}

let ust=new School();
ust.setName("UST");
ust.setLocation("Manila");
ust.setPopulation(100);

console.log((`${ust.getName()} located in ${ust.getLocation()} and has a population of ${ust.getPopulation()}`));*/


/*//static function
class School{
    static location="Manila";
    static population=100;
    constructor(name,population, location){
        this.name=name;
        this.population=population;
        this.location=location;
    }
    static offer(course){
        console.log(`${this.name} located in ${this.location} has a population of ${this.population}`);

    }
}

let ust=new School("",0,"");
School.offer("IT");*/


/*//bind function demo
let stud1={name:"Alyssa"};
let stud2={name:"Law"};


let study=function(subject,section){
    console.log(`${this.name} is enrolled in ${subject}, section ${section}`);
}
let $=study.bind(stud2);
$("Biology","2itf")

let s2=study.bind(stud1);
s2("Math","2ita")*/



/*//call function
let stud1={name:"Alyssa"};
let stud2={name:"Law"};

details=["ICS2609","2ITF"];

let study=function(subject,section){
    console.log(`${this.name} is enrolled in ${subject}, section ${section}`);
}
//study.call(stud1,"Science");
//study.call(stud2,"Math");

study.apply(stud1,details);*/


/*//prototype
function Student(name, course, section){
    this.name=name;
    this.course=course;
    this.section=section;

}
Student.prototype.study=function  (subject){
    console.log(`${this.name} is enrolled in ${subject}`);
}

Student.prototype.school="UST";

let stud1=new Student("alyssa","it","2itf");
let stud2=new Student("law","it","2csa");

stud1.study("Biology");
stud2.study("Algebra");

console.log(stud1.school);*/
//error
/*let stud1={name: "Alyssa",course: "IT",section: "2ITF",
study:function(subject){
    console.log(`${this.name} is enrolled in ${subject}`)

}
}
stud1.study("ICS2609");

let stud2={name: "Alyssa",course: "IT",section: "2ITF"};
stud2.study("IC2609");

/*class Student{
    constructor(name, course, section){
        this.name=name;
        this.course=course;
        this.section=section;

    }
    enroll(subject){
        console.log(`${this.name},${this.course} is enrolled in section ${this.section}`);
        console.log(`he is studying ${subject}`);
    }
}

let stud1=new Student("Alyssa","IT","2ITF");
stud1.enroll("ICS 2609");*/