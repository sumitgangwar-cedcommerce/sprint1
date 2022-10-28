import { configureStore } from '@reduxjs/toolkit'
import  saveUserData  from './reducer/userSlice'

export const store = configureStore({
    reducer: {
      user : saveUserData
    },
  })