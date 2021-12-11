const methodOverride = require('method-override');
const {pessoas, users} = require('./controllers');
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

const sessOptions = {
    secret: 'frasealeatoria',
    resave: false,
    saveUninitialized: false
}

app.use(session(sessOptions));

function verifica_pass(req, res, next){
    if(req.session.login || req.path === '/login'){
        next();
    }else{
        res.redirect('/usuarios/login');
    }
}

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/pessoas', pessoas);
app.use(verifica_pass);
app.use('/usuarios', users);

app.listen(3000, ()=>{
    console.log("Ouvindo na porta 3000!")   
});

