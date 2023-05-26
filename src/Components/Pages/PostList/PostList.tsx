import PostItem from "../PostItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { deletePost, startEditPost } from "../blog.reducer";

const PostList = () => {
    const PostList = useSelector((state: RootState) => state.blog.PostList);
    const dispatch = useDispatch();
    const handleDelete = (postId: string) => {
        dispatch(deletePost(postId));
    };

    const handleEdit = (postId: string) => {
        dispatch(startEditPost(postId));
    };
    return (
        <div className="w-full p-10">
            <h1 className="text-[30px]">
                <span className="text-[30px] text-orange-500 font-[Montserrat-Bold]">
                    #{" "}
                </span>
                Recent Post
            </h1>
            <div className="grid desktop:grid-cols-5 phone:grid-cols-1 gap-[20px] w-full justify-center items-center">
                {PostList.length > 0 &&
                    PostList.map(
                        (response) =>
                            response.published === true && (
                                <PostItem
                                    post={response}
                                    key={response.id}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                                />
                            )
                    )}
            </div>
        </div>
    );
};

export default PostList;
