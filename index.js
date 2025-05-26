//1. Create a CustomerOrder class with properties: orderId (string), items (array of objects with name, 
// quantity, price), and status (string). Add a method calculateTotal() that returns the total order 
// amount. Write an async method processPayment() that simulates payment with a Promise that resolves
//  after 2 seconds. After calling the method, change the status to "paid" and print a success message.

// pseudo code

//1.create a CustomerOrder class with Properties of order id(string),items (array of objects with name, 
// quantity, price), and status (string)
//2.This class has a method which is calculateTotal() that returns the total order 
// amount
// let accumulator=0
// for items in item
//accumulator+= item.quantity*item.price
//3. create an asynchronous function called process payment. and for an order id being processed
// wait for 2 seconds and xhange status="paid"
    







class CustomerOrder{
    constructor(orderId,items,quantity,price,status){
        this.orderId=orderId;
        this.items=items;
        this.quantity=quantity;
        this.price=price;
        this.status=status
    }
        calculateTotal(){
         return this.items.reduce((accum, item) => {
      return (accum + (item.quantity * item.price));
    }, 0);
    }

    async processPayment() {
    console.log( `${this.orderId} order id is being processed`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.status = 'paid';
    console.log(`Payment successful for order ${this.orderId}. payment status= "${this.status}".`);
  } 
    
}


const order = new CustomerOrder(
  "or001",
  [
    { name: "Computer", quantity: 3, price: 50000, },
    { name: "Earpods", quantity: 10, price: 1000 }
  ]
);

console.log("Order Total: $" + order.calculateTotal());

order.processPayment();



//2 Create a TeamMember class that takes name, role, and an array of tasks (each task is an object 
// with title and completed boolean). Write a prototype method completeTask(taskTitle) that marks 
// a task as completed. Write another method checkProgress() that returns a Promise resolving to 
// "All tasks completed!" or rejecting with "Pending tasks remaining" based on the state of the tasks array.

//pseudo code
//1.create a TeamMember class with properties of name, role, and an array of tasks 
//2.create a function completeTask which takes in parameter of taskTitle.
// for task in tasks
//if task.completed==true
//return completed
//3. create a function checkProgress if all task.completed==true
//return a promise "All tasks completed!" 
//else "Pending tasks remaining" 





class TeamMember {
  constructor(name, role, tasks) {
    this.name = name;
    this.role = role;
    this.tasks = tasks;
  }
}
TeamMember.prototype.completeTask = function (taskTitle) {
  for (let i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i].title === taskTitle) {
      this.tasks[i].completed = true;
      break;
    }
  }
};
TeamMember.prototype.checkProgress = function () {
  return new Promise((resolve, reject) => {
    const allDone = this.tasks.every((task) => task.completed);
    setTimeout(() => {
      if (allDone) {
        resolve("All tasks completed!");
      } else {
        reject("Pending tasks remaining");
      }
    }, 0);
  });
};
const mahder = new TeamMember(
  "Mahder",
  "Developer",
  [
    { title: "case study", completed: false },
    { title: "ankole", completed: true }
  ]
);


console.log("Before:", mahder.tasks);
mahder.completeTask("Write code");
console.log("After:", mahder.tasks);
mahder.checkProgress()
  .then(message => console.log("Progress:", message))
  .catch(error => console.log("Progress:", error));
mahder.completeTask("Test app");
mahder.checkProgress()
  .then(message => console.log("Progress after finishing all:", message))
  .catch(error => console.log("Progress after finishing all:", error));



mahder.completeTask("Developer")


//3. Build a Candidate class with properties: name, position, and interviews (array of objects with date, status).
//  Add a method scheduleInterview(date) that pushes a new interview with status "pending". Then write an async
//  function sendConfirmation() that returns a Promise that resolves after 1 second with a message "Interview 
// confirmed with [name]", and log the message.


//pseudo-code


//1.create a class called Candidate with properties of  name, position, and interviews (array of objects with date, status).
//2. Create a method called scheduleInterview which takes in a parameter of date and status "pending" and pushes the date and the status to the interviews
//array for date in scheduleinterview
// interviews+= date,status

class Candidate{
  constructor(name,position,interviews){
    this.name=name;
    this.position=position;
    this.interviews=[]
  }
    scheduleInterview(date) {
    this.interviews.push({ date, status: "pending" });
  }

  async sendConfirmation() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const msg = `Interview confirmed with ${this.name}`;
        console.log(msg);
        resolve(msg);
      }, 1000);
    });
  }
}

const candidate = new Candidate("Mahder", "Back-end developer");


candidate.scheduleInterview("2025-05-28");
candidate.sendConfirmation();



//4.Design a Course class with properties: title, instructor, and students (array of student objects
//  with name and progress). Add a method updateProgress(studentName, value) that modifies the 
// student’s progress. Create an async method generateCertificate(studentName) that returns a Promise
//  resolving only if the progress is 100, otherwise reject with "Incomplete progress".

class Course {
    constructor(title, instructor, students){
        this.title = title;
        this.instructor= instructor;
        this.students= students;
    }
updateProgress(studentName, value){
    const student = this.students.find(s=>s.name === studentName);
    if (student){
        student.progress = value;
        }else{
            throw new Error (`Student ${studentName} not found`);
        }
    }
async generateCertificate(studentName){
    const student= this.students.find(s => s.name ===studentName);
    if (student){
        student.progress = value;
    } else {
        throw new Error(`Student ${studentName} not found`);
    }
    }
async generateCertificate(studentName) {
    const student = this.students.find(s => s.name === studentName);
    return new Promise((resolve, reject) => {
      if (!student) {
        reject(`Student ${studentName} not found`);
      } else if (student.progress === 100) {
        resolve(`Certificate for ${student.name} in course "${this.title}"`);
      } else {
        reject("Incomplete progress");
      }
    });
  }
}
const course = new Course("Anatomy", "Dr. Raja", [
  { name: "Mahder", progress: 90 },
  { name: "Nahela", progress: 79 }
]);
course.updateProgress("Mahder", 100);
course.generateCertificate("Mahder")
  .then(certificate => console.log(certificate))
  .catch(error => console.error(error));
