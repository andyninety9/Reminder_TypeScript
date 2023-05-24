interface TitleProps {
    title: string;
    doneTaskList?: boolean;
}

const Title = ({ title, doneTaskList }: TitleProps) => {
    return (
        <div className="w-full h-auto flex justify-start items-center py-2">
            <h1
                className={
                    !doneTaskList
                        ? "text-[14px] font-[Montserrat-Bold] text-green-500"
                        : "text-[14px] font-[Montserrat-Bold] text-red-500"
                }>
                {title}
            </h1>
        </div>
    );
};

export default Title;
