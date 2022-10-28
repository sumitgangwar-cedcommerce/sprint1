import { getItem } from "../../helper/storageHelper";
import {  createSlice } from "@reduxjs/toolkit";

const initialState = getItem('user')

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        saveData : (state) => {
            return state
        }
    }
})

export const {saveData} = userSlice.actions

export default userSlice.reducer