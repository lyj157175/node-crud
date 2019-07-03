let express=require('express')
let router=require('./router')
let bodyParser=require('body-parser')

let exp=express()
exp.use('/public/',express.static('./public/'))
exp.use('/node_modules/',express.static('./node_modules/'))
exp.engine('html',require('express-art-template'))

exp.use(bodyParser.urlencoded({ extended: false }))
exp.use(bodyParser.json())

exp.use(router)

exp.listen('3100',function(){
    console.log('服务器成功启动运行')
})

