import TodoItem from "./todoitem";

function TodoList () {
    return (
        <div>
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>
            <TodoItem />
        </div>
    )
}

export default TodoList;