import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const sideBarSlice = createSlice({
    name: 'navbarSlice',
    initialState: {
        isOpen: false
    },
    reducers: {
        setIsOpen: (state, action) => {
            state.isOpen = action.payload
        }

    }
})
export const { setIsOpen } = sideBarSlice.actions;
export default sideBarSlice.reducer;