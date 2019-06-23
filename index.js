let express=require('express')
let template=require('art-template')
let fs=require('fs')

let exp=express()
exp.use('/public/',express.static('./public/'))
exp.use('/node_modules/',express.static('./node_modules/'))
exp.engine('html',require('express-art-template'))


exp.get('/',function(req,res){
    fs.readFile('./dp.json',function(err,data){
        if(err){
            return res.status(500).send('not found')
        }
    let students=JSON.parse(data).student
    res.render('index.html',{
        fruits:[
            '苹果','香蕉','西瓜','菠萝'
        ],
        students:students
    })
})
    
})

exp.listen('3100',function(){
    console.log('服务器成功启动运行')
})