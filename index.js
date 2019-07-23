require('dotenv').config()

const express = require('express');
const path = require('path');
const helmet = require('helmet') // creates headers that protect from attacks (security)
const bodyParser = require('body-parser') // turns response into usable format
const cors = require('cors')  // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests

const loginUser = require('./actions/login')
const getUsersQuery = require('./actions/getusers')
const postUserQuery = require('./actions/postuser')
const deleteUserQuery = require('./actions/deleteuser')
const getSolarPanel = require('./actions/getsolarpanel')
const getSolarPanelState = require('./actions/getsolarpanelbystate')
const getUsersByIdQuery = require('./actions/getusersbyid')

const authorization = require('./client/src/App/middleware/authorization');


var db = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : '',
      password : '',
      database : 'orbita'
    }
  });

const app = express();
app.use(cors())


app.use(helmet())
app.use(bodyParser.json())
app.use(morgan('combined')) 


app.get('/', (req, res) => res.send('Bem vindo à api'))
app.post('/login', (req, res) => loginUser.login(req, res, db))
app.get('/users',  authorization.verifyJWT, (req, res) => getUsersQuery.getUsers(req, res, db))
app.post('/users',  authorization.verifyJWT, (req, res) => postUserQuery.postUser(req, res, db))
app.get('/users/:id',  authorization.verifyJWT, (req, res) => getUsersByIdQuery.getUsersById(req, res, db))
app.delete('/users/:id',  authorization.verifyJWT, (req, res) => deleteUserQuery.deleteUser(req, res, db))

app.get('/solar_data',  authorization.verifyJWT, (req, res) => getSolarPanel.getAllSolarPanel(req, res, db))
app.get('/solar_data/:state',  authorization.verifyJWT, (req, res) => getSolarPanelState.getSolarPanelByState(req, res, db))


app.use(express.static(path.join(__dirname, 'client/build')));


app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5024;
app.listen(port);

console.log('App is listening on port ' + port);