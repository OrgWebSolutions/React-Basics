# Program 9: Imagine You are working with a MongoDB collection named students that stores the following fields: name, roll_no, department, and marks.
## A. Explain each of the CRUD operations (Create, Read, Update, Delete) in MongoDB with appropriate methods.
## B. Write MongoDB queries to perform the following tasks: Insert a new student record: name: "Amit", roll_no: 101, department: "CSE", marks: 85 Retrieve all students from the CSE department. Update the marks of the student with roll_no: 101 to 90. Delete the record of the student with roll_no: 101.

This project demonstrates CRUD (Create, Read, Update, Delete) operations on a MongoDB collection named `students`.

## Collection Schema

The `students` collection stores the following fields:
- `name`: Student's name (String)
- `roll_no`: Student's roll number (Number)
- `department`: Department name (String)
- `marks`: Student's marks (Number)

---

## A. CRUD Operations Explained

### 1. Create (Insert)
Operations to add new documents to the collection.

**Methods:**
- `insertOne()`: Inserts a single document
- `insertMany()`: Inserts multiple documents at once

**Returns:** Acknowledgment with the inserted document's `_id`

### 2. Read (Query)
Operations to retrieve documents from the collection.

**Methods:**
- `find()`: Retrieves multiple documents matching the query criteria
- `findOne()`: Retrieves a single document matching the query

**Features:** Supports filtering, projection, sorting, and limiting results

### 3. Update (Modify)
Operations to modify existing documents.

**Methods:**
- `updateOne()`: Updates the first document matching the filter
- `updateMany()`: Updates all documents matching the filter
- `replaceOne()`: Replaces an entire document

**Update Operators:** `$set`, `$inc`, `$push`, `$unset`, etc.

### 4. Delete (Remove)
Operations to remove documents from the collection.

**Methods:**
- `deleteOne()`: Deletes the first document matching the filter
- `deleteMany()`: Deletes all documents matching the filter

**Returns:** Count of deleted documents

---

## B. Implementation Queries

### 1. Insert a New Student Record

```javascript
use studentDB;

db.students.insertOne({
    name: "Amit",
    roll_no: 101,
    department: "CSE",
    marks: 85
});
```

**Output:** `{ acknowledged: true, insertedId: ObjectId("...") }`

---

### 2. Retrieve All Students from CSE Department

```javascript
db.students.find({
    department: "CSE"
});
```

**Output:** Returns all students with `department: "CSE"`

---

### 3. Update Marks of Student with roll_no 101 to 90

```javascript
db.students.updateOne(
    { roll_no: 101 },
    { $set: { marks: 90 } }
);
```

**Output:** `{ acknowledged: true, matchedCount: 1, modifiedCount: 1 }`

---

### 4. Delete the Record of Student with roll_no 101

```javascript
db.students.deleteOne({
    roll_no: 101
});
```

**Output:** `{ acknowledged: true, deletedCount: 1 }`

---

## How to Run

1. **Install MongoDB** on your system
2. **Start MongoDB Server:**
   ```bash
   mongod
   ```
3. **Open MongoDB Shell:**
   ```bash
   mongosh
   ```
4. **Execute the queries** from the provided `.mongodb` files or copy-paste them into the shell

### Using VS Code
- Install the **MongoDB for VS Code** extension
- Open the `.mongodb` files
- Click the "Play" button to execute queries

---

## Files Structure

```
09/
├── README.md                     # This file
├── A. CRUD operations.mongodb    # Additional operations
└── B. insert student.mongodb     # Main CRUD queries
```

---


## 🌐 Visit My Websites

- **Portfolio**: [https://www.gu-saurabh.site](https://www.gu-saurabh.site)
- **Tech Site**: [https://www.gu-saurabh.tech](https://www.gu-saurabh.tech)

---

## 🤝 Connect With Me

<p align="center">
  <a href="https://www.linkedin.com/in/Saurabhtbj1201/"><img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="https://x.com/saurabhtbj1201"><img src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?logo=Twitter&logoColor=white" alt="Twitter"/></a>
  <a href="https://www.instagram.com/saurabhtbj1201"><img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white" alt="Instagram"/></a>
  <a href="https://www.facebook.com/Saurabhtbj1201"><img src="https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white" alt="Facebook"/></a>
  <a href="https://www.quora.com/profile/Saurabh-Kumar-17241"><img src="https://img.shields.io/badge/Quora-%23B92B27.svg?logo=Quora&logoColor=white" alt="Quora"/></a>
  <a href="https://saurabh-12.blogspot.com/"><img src="https://img.shields.io/badge/Blogger-%23FF5722.svg?logo=Blogger&logoColor=white" alt="Blogger"/></a>
  <a href="https://saurabh1201.medium.com/"><img src="https://img.shields.io/badge/Medium-%2312100E.svg?logo=Medium&logoColor=white" alt="Medium"/></a>
  <a href="https://www.gu-saurabh.tech"><img src="https://img.shields.io/badge/Portfolio-%2300C4CC.svg?logo=Google-Chrome&logoColor=white" alt="Portfolio"/></a>
  <a href="https://wa.me/919798024301"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=flat&logo=whatsapp&logoColor=white" alt="WhatsApp"/></a>
</p>

---

## 📄 Copyright & License

© 2025 **Saurabh Kumar**. All Rights Reserved.

This project is licensed for educational purposes.

---

> Designed with 💡 by [Saurabh Kumar](https://www.linkedin.com/in/saurabhtbj1201)
