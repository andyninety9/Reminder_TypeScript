const TaskInput = () => {
    return (
        <div className="w-full h-[50px]">
            <form className="flex items-center justify-center">
                <input
                    className="h-[3rem] flex-grow-1 mr-[1rem] rounded-[0.7rem] text-[14px] px-[1rem] border-[1px] focus:outline-[#9d3fe7]"
                    type="text"
                    placeholder="Enter your task..."
                />
                <button
                    className="flex-shrink-0 w-[5rem] h-[3rem] rounded-[0.7rem] flex justify-center items-center p-0 border-[1px] text-[12px] font-[Montserrat-Regular]"
                    type="submit">
                    Add
                </button>
            </form>
        </div>
    );
};

export default TaskInput;
