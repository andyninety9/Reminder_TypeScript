import Header from "../Header/Header";
import TaskInput from "../TaskInput";

const ToDoList = () => {
    return (
        <div className="h-[70%] w-[30%] bg-white rounded-xl shadow-2xl p-5 flex flex-col">
            <Header title="Reminder" />
            <TaskInput />
        </div>
    );
};

export default ToDoList;
