import { v4 as uuidv4 } from "uuid"
import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

let todos = [{id: uuidv4(), title: "Tarefa 1", status: "Pendente"}]

app.get("/todos", (req, res) => res.json(todos))

app.post("/todos", (req, res) => {
    const todo = { id: uuidv4(), ...req.body}
    todos.push(todo)
    res.status(201).json(todo)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Running on port ${PORT}`))