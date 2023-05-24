import { useEffect, useState } from "react";
import Header from "../Header";
import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import { Todo } from "../@type/todo.type";

type HandleNewTodos = (todos: Todo[]) => Todo[];

const syncReactToLocal = (handleNewTodos: HandleNewTodos) => {
    const todosString = localStorage.getItem("todos");
    const todosObj: Todo[] = JSON.parse(todosString || "[]");
    const newTodosObj = handleNewTodos(todosObj);
    localStorage.setItem("todos", JSON.stringify(newTodosObj));
};

const ToDoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);
    const doneTodos = todos.filter((todo) => todo.done);
    const notdoneTodos = todos.filter((todo) => !todo.done);

    useEffect(() => {
        const todosString = localStorage.getItem("todos");
        const todosObj: Todo[] = JSON.parse(todosString || "[]");
        setTodos(todosObj);
    }, []);

    const addTodo = (name: string) => {
        const todo: Todo = {
            name,
            done: false,
            id: new Date().toISOString(),
        };

        setTodos((prev) => [...prev, todo]);
        syncReactToLocal((todosObj: Todo[]) => [...todosObj, todo]);
    };

    const handleDoneTodo = (id: string, done: boolean) => {
        setTodos((prev) => {
            return prev.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, done };
                }
                return todo;
            });
        });
    };

    const startEditTodo = (id: string) => {
        const findedTodo = todos.find((todo) => todo.id === id);
        if (findedTodo) {
            setCurrentTodo(findedTodo);
        }
    };

    const editTodo = (name: string) => {
        setCurrentTodo((prev) => {
            if (prev) return { ...prev, name };
            return null;
        });
    };

    const finishEditTodo = () => {
        const handler = (todoObj: Todo[]) => {
            return todoObj.map((todo) => {
                if (todo.id === (currentTodo as Todo).id) {
                    return currentTodo as Todo;
                }
                return todo;
            });
        };
        setTodos(handler);
        setCurrentTodo(null);
        syncReactToLocal(handler);
    };

    const deleteTodo = (id: string) => {
        if (currentTodo) {
            setCurrentTodo(null);
        }
        const handler = (todoObj: Todo[]) => {
            const findedIndexTodo = todoObj.findIndex((todo) => todo.id === id);
            if (findedIndexTodo > -1) {
                const result = [...todoObj];
                result.splice(findedIndexTodo, 1);
                return result;
            }
            return todoObj;
        };
        setTodos(handler);
        syncReactToLocal(handler);
    };
    return (
        <div className="h-[70%] w-[30%] bg-white rounded-xl shadow-2xl p-5 flex flex-col">
            <Header title="Reminder" />
            <TaskInput
                addTodo={addTodo}
                currentTodo={currentTodo}
                editTodo={editTodo}
                finishEditTodo={finishEditTodo}
            />
            <div className="h-full overflow-y-scroll">
                <div className="h-[50%] w-full">
                    <TaskList
                        todos={doneTodos}
                        handleDoneTodo={handleDoneTodo}
                        startEditToDo={startEditTodo}
                        deleteTodo={deleteTodo}
                    />
                </div>
                <div className="h-[50%] w-full">
                    <TaskList
                        doneTaskList
                        todos={notdoneTodos}
                        handleDoneTodo={handleDoneTodo}
                        startEditToDo={startEditTodo}
                        deleteTodo={deleteTodo}
                    />
                </div>
            </div>
        </div>
    );
};

export default ToDoList;
