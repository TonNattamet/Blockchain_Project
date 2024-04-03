const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors())

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


app.listen(8081, () => {
    console.log("Listening...")
})