var student = require('./student');
var teacher = require('./teacher');

function add(teacherName,students) {
    teacher.show(teacherName);
    students.forEach(function(item) {
        student.show(item)
    })

}

exports.add = add
