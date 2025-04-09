import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  firstName: string
  randomNumber: number
  rawDate: EpochTimeStamp
}

const initialState: State = {
  firstName: '',
  randomNumber: 0,
  rawDate: 0,
}

const state = createSlice({
  name: 'state',
  initialState,
  reducers: {
    addFirstName: (state, action: PayloadAction<string>) => ({
      ...state,
      firstName: action.payload,
    }),
    addRandomNumber: (state, action: PayloadAction<number>) => ({
      ...state,
      randomNumber: action.payload,
    }),
    addRawDate: (state, action: PayloadAction<number>) => ({
      ...state,
      rawDate: action.payload,
    }),
  },
  selectors: {
    firstName: (state) => state.firstName,
    randomNumber: (state) => state.randomNumber,
    rawDate: (state) => state.rawDate,
  },
})

export default state
