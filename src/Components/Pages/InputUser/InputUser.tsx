import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Post } from "../../../types/blog.type";
import { useDispatch } from "react-redux";
import { addPost } from "../blog.reducer";

const initialState: Post = {
    id: "",
    postAuthor: "",
    description: "",
    postDate: "",
    postImage: "",
    postTitle: "",
    published: false,
};

const InputUser = () => {
    const [formData, setFormData] = useState<Post>(initialState);
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formDataWithId = { ...formData, id: new Date().toISOString() };
        dispatch(addPost(formDataWithId));
    };

    return (
        // <form onSubmit={handleSubmit}>
        <div className="h-[700px] w-full shadow-xl flex p-8">
            <div className="flex flex-col h-full desktop:w-[60%] phone:w-full">
                <h1 className="text-[50px] font-[Montserrat-Medium]">
                    <span className="text-[90px] text-orange-500">*</span>
                    Create new post.
                </h1>
                <Box
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center"
                    component="form"
                    sx={{
                        "& .MuiTextField-root": { m: 2, width: "60ch" },
                    }}
                    noValidate
                    autoComplete="off">
                    <div>
                        <TextField
                            id="postTitle"
                            name="postTitle"
                            label="Caption"
                            multiline
                            maxRows={4}
                            placeholder="Enter your post's title"
                            value={formData.postTitle}
                            onChange={(event) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    postTitle: event.target.value,
                                }))
                            }
                        />
                        <TextField
                            id="postAuthor"
                            name="postAuthor"
                            label="Author"
                            multiline
                            maxRows={4}
                            placeholder="Who are you?"
                            value={formData.postAuthor}
                            onChange={(event) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    postAuthor: event.target.value,
                                }))
                            }
                        />
                    </div>
                    <div>
                        <TextField
                            id="description"
                            name="description"
                            label="Post's description"
                            multiline
                            maxRows={4}
                            placeholder="Enter your content"
                            value={formData.description}
                            onChange={(event) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    description: event.target.value,
                                }))
                            }
                        />
                        <TextField
                            id="postImage"
                            name="postImage"
                            label="Post Image"
                            multiline
                            maxRows={4}
                            placeholder="Image's URL"
                            value={formData.postImage}
                            onChange={(event) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    postImage: event.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="flex items-center gap-[35px]">
                        <div className="flex flex-col ml-6">
                            <label
                                htmlFor="publishDate"
                                className="text-[13px]">
                                Publish Date
                            </label>
                            <input
                                className="h-[40px] w-[400px] p-5 border text-[13px] rounded-lg outline-none"
                                type="datetime-local"
                                id="publishDate"
                                placeholder=""
                                required
                                value={formData.postDate}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        postDate: event.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="flex gap-5">
                            <input
                                type="checkbox"
                                id="publish"
                                checked={formData.published}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        published: event.target.checked,
                                    }))
                                }
                            />
                            <label htmlFor="publish">
                                Do you want to publish?
                            </label>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        sx={{
                            width: "150px",
                            height: "40px",
                            margin: "12px",
                            borderRadius: "10px",
                        }}
                        variant="contained">
                        Publish Post
                    </Button>
                </Box>
            </div>
            <img
                className="desktop:w-[40%] phone:w-0 object-cover rounded-lg shadow-lg hover:opacity-80 cursor-pointer"
                src="https://images.unsplash.com/photo-1684943210712-7aa4b85b4474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                alt=""
            />
        </div>
        // </form>
    );
};

export default InputUser;
