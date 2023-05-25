import PostItem from "../PostItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const PostList = () => {
    const PostList = useSelector((state: RootState) => state.blog.PostList);
    console.log(PostList);
    return (
        <div className="w-full p-10">
            <h1 className="text-[30px]">
                <span className="text-[30px] text-orange-500 font-[Montserrat-Bold]">
                    #{" "}
                </span>
                Recent Post
            </h1>
            {/* <div className="flex flex-col justify-center mt-[20px]"> */}
            <div className="grid desktop:grid-cols-5 phone:grid-cols-1 gap-[20px] w-full justify-center items-center">
                {PostList.length > 0 &&
                    PostList.map((response) => (
                        <PostItem post={response} key={response.id} />
                    ))}
            </div>
        </div>
        // </div>
    );
};

export default PostList;
