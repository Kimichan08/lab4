var studentList = '';
class student {
    constructor(name, code, age, address, gender, class_name) {
        this.name = name;
        this.code = code;
        this.age = age;
        this.address = address;
        this.gender = gender;
        this.class_name = class_name;
    }
    showStudent() {
        studentList +=
            `
        <tr>
            <th>${this.name}</th>
            <th>${this.code}</th>
            <th>${this.age}</th>
            <th>${this.address}</th>
            <th>${this.gender}</th>
            <th>${this.class_name}</th>
        </tr>
        `;
    }
}
var student1 = new student('A', 'B9223', 18, 'Ha Noi', 'Nu', 'C2110h2');
var student2 = new student('B', 'B9256', 18, 'Ha Noi', 'Nam', 'C2110h2');
var student3 = new student('C', 'B9224', 18, 'Ha Noi', 'Nu', 'C2110h2');
student1.showStudent();
student2.showStudent();
student3.showStudent();
var listStudent = document.querySelector('#students');
listStudent.innerHTML = studentList;
