import React from "react";
import Title from "../Title";

const TaskList = () => {
    return (
        <div className="h-full w-full border-[0.5px] rounded-xl flex flex-col">
            <div className="w-full h-[50%]">
                <Title title="Up Coming" />
                <TaskList />
            </div>
            <div className="w-full h-[50%]">
                <Title title="Done" />
                <TaskList />
            </div>
        </div>
    );
};

export default TaskList;
