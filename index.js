const express = require('express');
//const {comments, users} = require('./controllers');
const path = require('path');
//var methodOverride = require('method-override');
const app = express();

/*const session = require('express-session');

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


//Traduzir os dados do corpo da requisição para variáveis
app.use(express.urlencoded({extended: true}));

//Indica que o formato dos dados seja JSON
app.use(express.json());

//Permite fazer requisições de tipos PUT/PATCH/DELETE e etc.
app.use(methodOverride('_method'));
*/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home')
  });

/*
app.use('/usuarios', users);
app.use(verifica_pass);
app.use('/comentarios', comments);
*/

app.listen(3000, ()=>{
    console.log("Ouvindo na porta 3000!")   
});

