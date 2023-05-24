import Header from "../Header/Header";
import TaskInput from "../TaskInput";
import TaskList from "../TaskList";

const ToDoList = () => {
    return (
        <div className="h-[70%] w-[30%] bg-white rounded-xl shadow-2xl p-5 flex flex-col">
            <Header title="Reminder" />
            <TaskInput />
            <div className="h-full">
                <TaskList />
            </div>
        </div>
    );
};

export default ToDoList;
