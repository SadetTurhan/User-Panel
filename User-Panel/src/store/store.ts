import { configureStore } from '@reduxjs/toolkit'
import { UserList, User } from './UserType'

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
})

function usersReducer(state: Store = {
    UserList: [],
    NewUser: "",
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch