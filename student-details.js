class Node {
  constructor(student_id, student_name, student_marks) {
    this.student_id = student_id;
    this.student_name = student_name;
    this.student_marks = student_marks;
    this.left = null;
    this.right = null;
    this.total = student_marks.forEach(student => {
      let total_marks = 0;
      total_marks += student.marks;
    });
    this.percentage = this.total / 5;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  addStudent(student_id, student_name, student_marks) {
    const node = new Node(student_id, student_name, student_marks);

    if (this.root === null) {
      this.root = node;
    } else {
      this.appendStudent(this.root, node);
    }
  }

  appendStudent(currentNode, newNode) {
    if (newNode.percentage < currentNode.percentage) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.appendStudent(currentNode.left, newNode);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.appendStudent(currentNode.right, newNode);
      }
    }
  }

  search(sname) {
    return this.searchStudent(this.root, sname);
  }

  searchStudent(currentNode, sname) {
    if (currentNode === null) {
      return null;
    }

    if (currentNode.student_name === sname) {
      return currentNode.student_marks;
    }

    if (sname < currentNode.student_name) {
      return this.searchStudent(currentNode.left, sname);
    } else {
      return this.searchStudent(currentNode.right, sname);
    }
  }

  printDetails(studentName, studentMarks) {
    let counter = 0;
    let total = 0;
    if (studentMarks) {
      studentMarks.forEach(student => {
        if (counter == 0) { console.log(`Student Name: ${studentName}`); }
        counter += 1;
        total += student.marks;
        console.log(`${student.subject}: ${student.marks}`);
      });
      total = (total / studentMarks.length);
      console.log("*********************");
      console.log(`Grade: ${total}%`);
      console.log("*********************");
    }    
  }
}

//creating instance of a class BinarySearchTree
const bst = new BinarySearchTree();

bst.addStudent(855, "James", [{subject: "Maths", marks: 75}, {subject: "Physics", marks: 80}, {subject: "Chemistry", marks: 75}, {subject: "Social", marks: 70}, {subject: "Computer Science", marks: 90}]);
bst.addStudent(856, "Hari", [{subject: "Maths", marks: 90}, {subject: "Physics", marks: 70}, {subject: "Chemistry", marks: 75}, {subject: "Social", marks: 65}, {subject: "Computer Science", marks: 80}]);
bst.addStudent(854, "Ravi", [{subject: "Maths", marks: 85}, {subject: "Physics", marks: 90}, {subject: "Chemistry", marks: 85}, {subject: "Social", marks: 60}, {subject: "Computer Science", marks: 75}]);

console.log("==========================");
console.log("Searching Student Details");
console.log("==========================");

let studentName = "Ravi"
const studentMarks = bst.search(studentName);

bst.printDetails(studentName, studentMarks);
