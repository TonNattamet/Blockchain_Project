const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const app = express();

app.use(express.json())
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blockchain"
})

app.post('/login', (req, res) => {
    const sentId_user = req.body.id_user
    const sentPassword = req.body.password

    const sql = 'SELECT * FROM login WHERE id_user = ? && password = ?'
    const Values = [sentId_user, sentPassword]

    db.query(sql, Values, (err, results) => {
       if(err){
            res.send({error: err})
       }
       if(results.length > 0){
            res.send(results)
       }
       else{
        res.send({message: 'Do not match!!!'})
       }
    })
})

app.post('/logindoctor', (req, res) => {
    const sentId_doctor = req.body.id_doctor
    const sentPassword = req.body.password

    const sql = 'SELECT * FROM login_doctor WHERE id_doctor = ? && password = ?'
    const Values = [sentId_doctor, sentPassword]

    db.query(sql, Values, (err, results) => {
       if(err){
            res.send({error: err})
       }
       if(results.length > 0){
            res.send(results)
       }
       else{
        res.send({message: 'Do not match!!!'})
       }
    })
})

app.post('/register', (req, res) => {
    const sentId_user = req.body.id_user
    const sentPassword = req.body.password

    const sql = 'INSERT INTO login (id_user, password) VALUES (?,?)'
    const Values = [sentId_user, sentPassword]

    db.query(sql, Values, (err, results) => {
        if(err){
            res.send(err)
        }
        else{
            console.log('Success')
            res.send({massage: 'User added!!!'})
        }
    })

})

// เพิ่มข้อมูลลงในฐานข้อมูล
// app.post('/patient', (req, res) => {
//     const patientData = req.body;
//     const sql = 'INSERT INTO Patient SET ?';

//     db.query(sql, patientData, (err, result) => {
//       if (err) {
//         res.status(500).send('Error saving data');
//         throw err;
//       }
//       console.log('Data inserted successfully');
//       res.status(200).send('Data inserted successfully');
//     });
// });
// app.post('/patient', (req, res) => {
//     const Id = req.body.st;
//     const password = req.body.password;
//     const fname = req.body.fname;
//     const surname = req.body.surname;
//     const email = req.body.email;
//     const phone = req.body.phone;
  
//     connection.query("INSERT INTO customer (username, password, fname, surname, email, phone) VALUES (?,?,?,?,?,?)",
//     [username, password, fname, surname, email, phone],
//     (err, result) => {
//       if(err){
//         console.log(err)
//       }else{
//         res.send("Valuses Inserted")
//       }
//     }
//     );
//   })



app.listen(8081, () => {
    console.log("Listening...")
})