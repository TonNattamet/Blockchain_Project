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
    const sql = "SELECT * FROM login WHERE id_user = ? AND password = ?";
    db.query(sql, [req.body.id_user, req.body.password], (err, data) => {
        if(err) return res.json("Error")
        if(data.length > 0){
            return res.json("Success")
        }
        else{
            return res.json("No Record")
        }
    })
})

app.get('/test', (req, res) => {
    const sql = "SELECT * FROM login"
    db.query(sql, (err, data) => {
        if(err) return res.json("Error")
        return res.json(data)
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