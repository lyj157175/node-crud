let express = require('express')
let fs = require('fs')
let Student = require('./student')
let template=require('art-template')

let router = express.Router()

// router.get('/student',function(req,res){
//     fs.readFile('./dp.json',function(err,data){
//         if(err){
//             return res.status(500).send('not found')
//         }
//     let students=JSON.parse(data).student
//     res.render('index.html',{
//         fruits:[
//             '苹果','香蕉','西瓜','菠萝'
//         ],
//         students:students
//     })
//   })   
// })

router.get('/students', function (req, res) {
    Student.find(function (err, students) {
      if (err) { 
        return res.status(500).send('Server error.')
      }
      res.render('index.html', {
        fruits: [
          '苹果',
          '香蕉',
          '橘子'
        ],
        students: students
      })
    })
  })  

router.get('/students/new', function (req, res) {
    res.render('new.html')
})  

router.post('/students/new', function (req, res) {
    Student.save(req.body, function (err) {
      if (err) {
        return res.status(500).send('Server error.')
      }
      res.redirect('/students')
    })
  })

module.exports = router
