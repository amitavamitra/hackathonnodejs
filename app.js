const  express = require('express');
const ejs = require('ejs')
const app = express();

app.use(express.static('public'));
app.set('view engine' , 'ejs');

// app.get('/', function(req,res){
//    console.log(res.sendFile(__dirname + '/index.html'))
// })

console.log('Hello world')

app.listen(3000, function(){
    console.log('Azure DevOps NodeJs app running at port 3000');
})