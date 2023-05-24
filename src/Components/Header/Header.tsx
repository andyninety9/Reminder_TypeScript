const Header = ({ title }: { title: string }) => {
    return (
        <div className="w-full h-[4rem] flex items-center justify-center font-[Montserrat-Medium]">
            <h1 className="text-[30px]">{title}</h1>
        </div>
    );
};

export default Header;