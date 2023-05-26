import { Post } from "../../../types/blog.type";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";

interface PostItemType {
    post: Post;
    handleDelete: (postId: string) => void;
    handleEdit: (postId: string) => void;
}

const PostItem = ({ post, handleDelete, handleEdit }: PostItemType) => {
    return (
        <div className="w-[300px] h-[700px] shadow-xl bg-[#eee] rounded-xl flex flex-col p-[15px] overflow-hidden">
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
            <div className="absolute translate-x-[230px]">
                <Tooltip title="Delete">
                    <IconButton
                        size="large"
                        onClick={() => handleDelete(post.id)}>
                        <DeleteIcon
                            sx={{
                                color: "#ccc",
                                fontSize: "16px",
                            }}
                        />
                    </IconButton>
                </Tooltip>
            </div>
            <div className="absolute">
                <Tooltip title="Edit">
                    <IconButton
                        size="large"
                        onClick={() => handleEdit(post.id)}>
                        <EditIcon
                            sx={{
                                color: "#ccc",
                                fontSize: "16px",
                            }}
                        />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    );
};

export default PostItem;
