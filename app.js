const  express = require('express');
const ejs = require('ejs')
const app = express();

app.use(express.static('public'));
app.set('view engine' , 'ejs');

app.get('/', function(req,res){
  res.render('home')
})

console.log('Hello world')

app.listen(3002, function(){
    console.log('CI/CD NodeJs app running at port 3002');
})