const methodOverride = require('method-override');
const {peoples} = require('./controllers');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/peoples', peoples);

app.listen(3000, ()=>{
    console.log("Ouvindo na porta 3000!")   
});

