import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  name: "",
  username: "",
  age: 0,
  email: ""
}

interface IUser {
  id?: number
  username: string
  name: string
  age: number
  email: string
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: initialState
  },
  reducers: {
    login: (state, action) => {
      const user = action.payload as IUser 
      user.id = Math.floor(Math.random() * 100)
      state.value = user as any
    },

    logout: (state) => {
      state.value = initialState
    }
  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
