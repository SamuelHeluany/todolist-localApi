import './TodoList.css'

const todoList = () => {
    return (
        <div className="container">
            <div className="todoList">
                <div className="headerTodo">
                    <h1>TodoList</h1>
                    <button>Create Todo</button>
                </div>
                <div className="todos">
                        <ul>
                            <li>teste 
                                <div className="actions">
                                    <button>edit</button>
                                    <button>delete</button>
                                    <button>Done</button>
                                    </div></li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default todoList