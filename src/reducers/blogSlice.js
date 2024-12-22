import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(),
        title: "اولین پست",
        content: "محتوای اولین پست ما ☺️",
    },
    {
        id: nanoid(),
        title: "دومین پست",
        content: "دومین پست ما میباشد سلام دنیا 🤗",
    },
];

const blogsSlice = createSlice({
    name: "blogs",
    initialState: initialState,
    reducers: {
        blogAdded: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { blogAdded } = blogsSlice.actions;

export default blogsSlice.reducer;
