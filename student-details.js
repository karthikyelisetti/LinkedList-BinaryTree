class Node {
    constructor(id, name, marks) {
      this.id = id;
      this.name = name;
      this.marks = marks;
      this.left = null;
      this.right = null;
      this.total = marks.reduce((sum, mark) => sum + mark, 0);
      this.percentage = this.total / 5;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(id, name, marks) {
      const node = new Node(id, name, marks);
  
      if (this.root === null) {
        this.root = node;
      } else {
        this.insertNode(this.root, node);
      }
    }
  
    insertNode(currentNode, newNode) {
      if (newNode.percentage < currentNode.percentage) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
        } else {
          this.insertNode(currentNode.left, newNode);
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
        } else {
          this.insertNode(currentNode.right, newNode);
        }
      }
    }
  
    find(name) {
      return this.findNode(this.root, name);
    }
  
    findNode(currentNode, name) {
      if (currentNode === null) {
        return null;
      }
  
      if (currentNode.name === name) {
        return currentNode.marks;
      }
  
      if (name < currentNode.name) {
        return this.findNode(currentNode.left, name);
      } else {
        return this.findNode(currentNode.right, name);
      }
    }
  }
  
  // example usage
  const bst = new BinarySearchTree();
  
  bst.insert(1, "Chandan", [80, 90, 85, 75, 95]);
  bst.insert(2, "Bipul", [70, 85, 80, 90, 95]);
  bst.insert(3, "Adi", [60, 75, 70, 80, 85]);
  
//   const studentName = prompt("Enter student name:");
  let studentName = "Chandan"
  const studentMarks = bst.find(studentName);
  
  if (studentMarks) {
    console.log(`Student marks for ${studentName}: ${studentMarks.join(", ")}`);
  } else {
    console.log(`Student ${studentName} not found`);
  }
  