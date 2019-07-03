let fs = require('fs')
let dPath = './dp.json'

exports.find = function (callback) {
    fs.readFile(dPath, 'utf-8', function (err, data) {
        if (err) {
            callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

exports.save = function (student, callback) {
    fs.readFile(dPath, 'utf-8', function (err, data) {
        if (err) {
            return callback(err)
        }
        let students = JSON.parse(data).students
        student.id = students[students.length - 1].id + 1
        students.push(student)
        let fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dPath, fileData, function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}

