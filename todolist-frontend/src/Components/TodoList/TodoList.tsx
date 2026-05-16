import './TodoList.css'
import { MdEdit, MdDelete  } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

interface Todo {
    id: string,
    title: string,
    status: string
}

interface ApiResponse<T> {
    content: T[],
    totalElements: number,
    message: string
}

const todoList = () => {
    return (
        <div className="container">
            <div className="todoList">
                <div className="headerTodo">
                    <h1>Todo-List</h1>
                    <button className='todoCreateButton'>Create Todo</button>
                </div>
                <div className="todos">
                        <ul>
                            <li><p>teste</p> 
                                <div className="actions">
                                    <button><MdEdit size={25} color='rgb(2, 61, 112)'/></button>
                                    <button><MdDelete size={25} color='red'/></button>
                                    <button><IoCheckmarkDoneCircleSharp size={25} color='green'/></button>
                                    </div></li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default todoList