const Title = ({ title }: { title: string }) => {
    return (
        <div className="w-full h-auto flex justify-start items-center p-5">
            <h1 className="text-[14px] font-[Montserrat-Bold]">{title}</h1>
        </div>
    );
};

export default Title;
