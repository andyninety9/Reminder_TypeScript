import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { grey } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import Title from "../Title";
import { Todo } from "../@type/todo.type";
import PropTypes from "prop-types";
import { TodoTypes } from "../PropTypes/todo.proptype";
import connect from "../HOC/connect";

interface TaskListProps {
    doneTaskList?: boolean;
    todos: Todo[];
    handleDoneTodo: (id: string, done: boolean) => void;
    startEditToDo: (id: string) => void;
    deleteTodo: (id: string) => void;
}

const TaskList = (props: TaskListProps) => {
    const {
        doneTaskList,
        todos,
        handleDoneTodo,
        startEditTodo,
        deleteTodo,
        user,
    } = props;

    const onChangeCheckbox =
        (idTodo: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
            handleDoneTodo(idTodo, event.target.checked);
        };
    return (
        <div>
            <Title
                title={doneTaskList ? "Up Coming" : "Have Done"}
                doneTaskList={doneTaskList}
            />
            <div className="max-h-[17rem] w-full border-[0.5px] rounded-xl flex flex-col overflow-y-scroll px-5 pb-5 pt-10 justify-center items-center">
                {todos.map((todo) => (
                    <div
                        className="flex gap-5 w-full justify-start h-12 hover:border-b hover:border-[#9d3fe7] items-center"
                        key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={onChangeCheckbox(todo.id)}
                        />
                        <span
                            className={
                                todo.done
                                    ? "text-[12px] text-[#b2b7bb] line-through"
                                    : "text-[12px]"
                            }>
                            {todo.name}
                        </span>
                        <div className="ml-auto flex gap-2">
                            <Tooltip title="Delete">
                                <IconButton
                                    onClick={() => startEditTodo(todo.id)}
                                    sx={{
                                        color: grey[300],
                                    }}>
                                    <EditIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                                <IconButton
                                    onClick={() => deleteTodo(todo.id)}
                                    sx={{
                                        color: grey[300],
                                    }}>
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

TaskList.propTypes = {
    doneTaskList: PropTypes.bool,
    todos: PropTypes.arrayOf(TodoTypes).isRequired,
    handleDoneTodo: PropTypes.func.isRequired,
    startEditTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};
const injectedProps = { user: { name: "Andy" } };
export default connect(injectedProps)(TaskList);
