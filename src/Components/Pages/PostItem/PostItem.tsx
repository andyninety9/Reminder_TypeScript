import { Post } from "../../../types/blog.type";

interface PostItemType {
    post: Post;
}

const PostItem = ({ post }: PostItemType) => {
    return (
        <div className="w-[300px] h-[400px] shadow-xl bg-[#fff] rounded-xl flex flex-col p-[15px]">
            <div className="h-[60%] overflow-hidden w-full rounded-lg">
                <img
                    className="hover:scale-110 h-full w-full object-cover rounded-lg"
                    src={post.postImage}
                    alt=""
                />
            </div>
            <div className="mt-4 flex flex-col">
                <h1 className="text-[20px] overflow-hidden h-[60px] font-[Montserrat-Bold]">
                    {post.postTitle}
                </h1>
                <h2 className="h-[50px] w-full overflow-hidden py-3">
                    {post.description}
                </h2>
            </div>
            <div className="w-full mt-auto flex">
                <h3 className="text-[13px] font-[Montserrat-Bold] text-[#383838]">
                    {post.postAuthor}
                </h3>
                <h3 className="text-[13px] font-[Montserrat-Medium] text-[#383838] ml-auto">
                    {post.postDate}
                </h3>
            </div>
        </div>
    );
};

export default PostItem;
