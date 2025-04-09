import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  name: string
  number: string
  date: string
}

const initialState: State = {
  name: '',
  number: '',
  date: '',
}

const state = createSlice({
  name: 'state',
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<string>) => ({
      ...state,
      name: action.payload,
    }),
    addNumber: (state, action: PayloadAction<string>) => ({
      ...state,
      number: action.payload,
    }),
    addDate: (state, action: PayloadAction<string>) => ({
      ...state,
      date: action.payload,
    }),
  },
  selectors: {
    name: (state) => state.name,
    number: (state) => state.number,
    date: (state) => state.date,
  },
})

export default state
