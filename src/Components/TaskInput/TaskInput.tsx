import AddIcon from "@mui/icons-material/Add";
import { Todo } from "../@type/todo.type";
import { useState } from "react";
import connect from "../HOC/connect";
import { TodoTypes } from "../PropTypes/todo.proptype";
import { debug, log } from "../../constants";
import PropTypes from "prop-types";
import CheckIcon from "@mui/icons-material/Check";
import { Button, TextField } from "@mui/material";
import { green, purple } from "@mui/material/colors";

interface TaskInputProps {
  addTodo: (name: string) => void;
  editTodo: (name: string) => void;
  finishEditTodo: () => void;
  currentTodo: Todo | null;
}

const TaskInput = (props: TaskInputProps) => {
  const { addTodo, currentTodo, editTodo, finishEditTodo, debug, log } = props;
  const [name, setName] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentTodo) {
      finishEditTodo();
      if (name) setName("");
    } else {
      addTodo(name);
      setName("");
    }
  };
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (currentTodo) {
      editTodo(value);
    } else {
      setName(value);
    }
  };
  return (
    <div className="w-full h-[50px]">
      <form
        className="flex items-baseline justify-center gap-5"
        onSubmit={handleSubmit}
      >
        <TextField
          className="h-[3rem] flex-grow-1 mr-[1rem] rounded-[0.7rem] text-[14px] px-[1rem] border-[1px] focus:outline-[#9d3fe7]"
          label="Add new task..."
          variant="standard"
          onChange={onChangeInput}
          value={currentTodo ? currentTodo.name : name}
          required
        />
        <Button
          sx={{
            width: "80px",
            borderRadius: "20px 0px 20px 20px",
            outlineColor: purple[500],
          }}
          variant="outlined"
          className="flex-shrink-0 w-[3rem] h-[3rem] rounded-[0.7rem] flex justify-center items-center p-0 border-[1px] text-[12px] font-[Montserrat-Regular] bg-[#9d3fe7] hover:bg-[#5a4bad] text-white"
          type="submit"
          endIcon={currentTodo ? <CheckIcon /> : <AddIcon />}
        >
          {currentTodo ? "Change" : "Add"}
        </Button>
      </form>
    </div>
  );
};

TaskInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  finishEditTodo: PropTypes.func.isRequired,
  currentTodo: PropTypes.oneOfType([TodoTypes, PropTypes.oneOf([null])]),
};
const injectedProps = { debug: debug, log: log };
export default connect(injectedProps)(TaskInput);
