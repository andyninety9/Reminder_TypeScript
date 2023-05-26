import { Box, Button, TextField } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Post } from "../../../types/blog.type";
import { useDispatch, useSelector } from "react-redux";
import {
    addPost,
    cancelEditingPost,
    finishEditingPost,
    startEditPost,
} from "../blog.reducer";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { RootState } from "../../../store";

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
    const editingPost = useSelector(
        (state: RootState) => state.blog.editingPost
    );

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (editingPost) {
            dispatch(finishEditingPost(formData));
            setFormData(initialState);
            return;
        }
        const formDataWithId = { ...formData, id: new Date().toISOString() };
        dispatch(addPost(formDataWithId));
        setFormData(initialState);
    };

    const handleCancelEditingPost = () => {
        dispatch(cancelEditingPost());
    };

    // const handleFinishEditingPost = (post: Post) => {
    //     dispatch(finishEditingPost(post));
    // };

    useEffect(() => {
        setFormData(editingPost || initialState);
    }, [editingPost]);

    return (
        <div className="h-[700px] w-full shadow-xl flex p-8">
            <div className="flex flex-col h-full desktop:w-[60%] phone:w-full">
                <h1 className="text-[50px] font-[Montserrat-Medium]">
                    <span className="text-[90px] text-orange-500">*</span>
                    Create new post.
                </h1>
                <Box
                    onReset={handleCancelEditingPost}
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
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DatePicker"]}>
                                <DatePicker
                                    value={dayjs(formData.postDate)}
                                    onChange={(newValue) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            postDate:
                                                dayjs(newValue).format(
                                                    "YYYY-MM-DD"
                                                ),
                                        }))
                                    }
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                        {/* </div> */}
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
                        <label htmlFor="publish">Do you want to publish?</label>
                    </div>
                    {!editingPost ? (
                        <Button
                            color="info"
                            type="submit"
                            sx={{
                                width: "100px",
                                height: "40px",
                                margin: "12px",
                                borderRadius: "10px",
                            }}
                            variant="contained">
                            Publish Post
                        </Button>
                    ) : (
                        <div>
                            <Button
                                type="submit"
                                sx={{
                                    width: "100px",
                                    height: "40px",
                                    margin: "12px",
                                    borderRadius: "10px",
                                }}
                                color="warning"
                                variant="contained">
                                Update
                            </Button>
                            <Button
                                type="reset"
                                color="success"
                                sx={{
                                    width: "100px",
                                    height: "40px",
                                    margin: "12px",
                                    borderRadius: "10px",
                                }}
                                variant="outlined">
                                Cancel
                            </Button>
                        </div>
                    )}
                </Box>
            </div>
            <div className="desktop:w-[40%] h-full overflow-hidden">
                <img
                    className="object-cover rounded-lg shadow-lg hover:scale-110 cursor-pointer w-full h-full"
                    src="https://www.minimaldesksetups.com/wp-content/uploads/2020/10/1-2.jpg.webp"
                    alt=""
                />
            </div>
        </div>
    );
};

export default InputUser;
