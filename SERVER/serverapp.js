const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const morgan = require('morgan'); 
const Sequelize = require('sequelize');
const routes = require('./interfata/routes')
const models = require('./interfata/models')

const port = process.env.PORT || 8080;



let sequelize = new Sequelize('app', 'root', 'pass', {
    dialect: 'mysql'
});



app.use(morgan('dev'));

app.use(express.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
    'Content-Type, Accept, Origin, X-Requested-With, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE');
    }
    next();
})

app.get('/', (req, res) => {
    res.json({
        message: "Welcome George"
    })
})


app.use('/student-interfata', routes.student)
app.use('/professor-interfata', routes.professor)
app.use('/activity-interfata', routes.activity)
app.use('/group-interfata', routes.group)

app.use('/feedback-interfata', routes.feedback)


app.use((req, res, next) => {
    const error = new Error('Not found!');
    error.status = 404;
    next(error); 
});


app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
