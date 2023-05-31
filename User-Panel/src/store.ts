import { configureStore } from "@reduxjs/toolkit"
import  UserSlice  from "./features/UserSlice"
export const store = configureStore({
    reducer:{
        users:UserSlice,
    }
})

//rootstate
export type RootState = ReturnType<typeof store.getState>
//dispatchtype
export type AppDispatch = typeof store.dispatch