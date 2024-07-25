const PORT = process.env.PORT ?? 8000
const express = require('express')
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')
const app = express()
const pool = require('./db')

app.use(cors({
  origin: 'https://todo-app-main-client.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());


app.get('/', async (req, res) => {

    try {
       const todos = await pool.query('SELECT * FROM todos')
       res.json(todos.rows)
    } catch (err) {
        console.error(err)
    }
})

//get all todos
app.get('/todos', async (req, res) => {

    try {
       const todos = await pool.query('SELECT * FROM todos')
       res.json(todos.rows)
    } catch (err) {
        console.error(err)
    }
})

// create a new todo
app.post('/todos', async (req, res) => {
    const {title, date} = req.body
    const id = uuidv4()
    try {
        const newToDo = await pool.query(`INSERT INTO todos(id, title, date, completed) VALUES($1, $2, $3, $4)`, 
        [id, title, date, false])
        res.json(newToDo)
    } catch (err) {
        console.error(err)
    }
})

// update the completed status 
app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    try {
        const updateToDo = await pool.query(
            'UPDATE todos SET completed = $1 WHERE id = $2;',
            [completed, id]
        );
        res.json(updateToDo);
    } catch (err) {
        console.error(err);
    }
});

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
