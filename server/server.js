const PORT = process.env.PORT ?? 8000
const express = require('express')
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')
const app = express()
const pool = require('./db')

app.use(cors())
app.use(express.json())


//get all todos
app.get('/todos', async (req, res) => {

    try {
       const todos = await pool.query('SELECT * FROM todos')
       res.json(todos.rows)
    } catch (err) {
        console.error(error)
    }
})

// create a new todo
app.post('/todos', async (req, res) => {
    const {title, date} = req.body
    const id = uuidv4()
    try {
        const newToDo = await pool.query(`INSERT INTO todos(id, title, date) VALUES($1, $2, $3)`, 
        [id, title, date])
        res.json(newToDo)
    } catch (err) {
        console.error(err)
    }
})

// delete a todo
app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deleteToDo = await pool.query('DELETE FROM todos WHERE id = $1;', [id])
        res.json(deleteToDo)
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))

