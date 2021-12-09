const methodOverride = require('method-override');
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


app.listen(3000, ()=>{
    console.log("Ouvindo na porta 3000!")   
});

